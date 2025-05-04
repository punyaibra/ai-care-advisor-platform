
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { NotificationDropdown } from "@/components/notifications/NotificationDropdown";
import { UserProfileDropdown } from "@/components/user/UserProfileDropdown";
import { useUser } from "@/contexts/UserContext";
import { useNotifications } from "@/contexts/NotificationContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  
  const { user, isLoggedIn, login, register, logout } = useUser();
  const { addNotification } = useNotifications();
  
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    const success = await login(data.email, data.password);
    if (success) {
      toast.success("Successfully logged in!");
      setLoginDialogOpen(false);
      loginForm.reset();
      
      // Add a welcome back notification
      addNotification({
        title: "Welcome back!",
        message: "You've successfully logged in to your account.",
        type: "success",
      });
    }
  };

  const handleRegister = async (data: z.infer<typeof registerSchema>) => {
    const success = await register(data.name, data.email, data.password);
    if (success) {
      toast.success("Account created successfully!");
      setRegisterDialogOpen(false);
      registerForm.reset();
      
      // Add welcome notifications
      addNotification({
        title: "Welcome to CareAdvisor!",
        message: "Your account has been successfully created.",
        type: "success",
      });
      
      setTimeout(() => {
        addNotification({
          title: "Getting Started",
          message: "Try our AI consultation feature to analyze your symptoms.",
          type: "info",
        });
      }, 3000);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-health-primary flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AI</span>
          </div>
          <span className="font-bold text-xl text-health-dark">CareAdvisor</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/consult" className="text-health-dark hover:text-health-primary transition-colors">
            AI Consultation
          </Link>
          <Link to="/history" className="text-health-dark hover:text-health-primary transition-colors">
            Health History
          </Link>
          <Link to="/resources" className="text-health-dark hover:text-health-primary transition-colors">
            Resources
          </Link>
        </nav>
        
        {/* Desktop Action Items */}
        <div className="hidden md:flex items-center space-x-3">
          <NotificationDropdown />
          
          {isLoggedIn ? (
            <UserProfileDropdown 
              isLoggedIn={isLoggedIn} 
              userName={user?.name} 
              userEmail={user?.email} 
              onLogout={handleLogout} 
            />
          ) : (
            <>
              <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                      Enter your credentials to access your account
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4 pt-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-health-primary hover:bg-health-primary/90"
                        disabled={loginForm.formState.isSubmitting}
                      >
                        {loginForm.formState.isSubmitting ? "Signing in..." : "Sign In"}
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>

              <Dialog open={registerDialogOpen} onOpenChange={setRegisterDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-health-primary text-white hover:bg-health-primary/90">
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create Account</DialogTitle>
                    <DialogDescription>
                      Enter your details to create a new account
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4 pt-4">
                      <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-health-primary hover:bg-health-primary/90"
                        disabled={registerForm.formState.isSubmitting}
                      >
                        {registerForm.formState.isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-health-dark" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link 
                to="/consult" 
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Consultation
              </Link>
              <Link 
                to="/history" 
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Health History
              </Link>
              <Link 
                to="/resources" 
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                {isLoggedIn ? (
                  <Button 
                    onClick={handleLogout} 
                    className="justify-center w-full bg-health-primary text-white hover:bg-health-primary/90"
                  >
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="justify-center w-full border-health-primary text-health-primary hover:bg-health-primary hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setLoginDialogOpen(true);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="justify-center w-full bg-health-primary text-white hover:bg-health-primary/90"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setRegisterDialogOpen(true);
                      }}
                    >
                      Register
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
