
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User } from "lucide-react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - In a real app, this would connect to a backend
    if (email && password) {
      setIsLoggedIn(true);
      toast.success("Successfully logged in!");
    } else {
      toast.error("Please enter both email and password");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration - In a real app, this would connect to a backend
    if (email && password && name) {
      setIsLoggedIn(true);
      toast.success("Account created successfully!");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
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
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-health-dark" />
          </Button>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-health-primary" />
              </Button>
              <Button 
                variant="outline" 
                className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white"
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Dialog>
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
                  <form onSubmit={handleLogin} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input 
                        id="login-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-health-primary hover:bg-health-primary/90"
                    >
                      Sign In
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog>
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
                  <form onSubmit={handleRegister} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Full Name</Label>
                      <Input 
                        id="register-name" 
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input 
                        id="register-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-health-primary hover:bg-health-primary/90"
                    >
                      Create Account
                    </Button>
                  </form>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="justify-center w-full border-health-primary text-health-primary hover:bg-health-primary hover:text-white">
                          Sign In
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Sign In</DialogTitle>
                          <DialogDescription>
                            Enter your credentials to access your account
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleLogin} className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="mobile-login-email">Email</Label>
                            <Input 
                              id="mobile-login-email" 
                              type="email" 
                              placeholder="your.email@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobile-login-password">Password</Label>
                            <Input 
                              id="mobile-login-password" 
                              type="password" 
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-health-primary hover:bg-health-primary/90"
                          >
                            Sign In
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="justify-center w-full bg-health-primary text-white hover:bg-health-primary/90">
                          Register
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create Account</DialogTitle>
                          <DialogDescription>
                            Enter your details to create a new account
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleRegister} className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="mobile-register-name">Full Name</Label>
                            <Input 
                              id="mobile-register-name" 
                              placeholder="John Doe"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobile-register-email">Email</Label>
                            <Input 
                              id="mobile-register-email" 
                              type="email" 
                              placeholder="your.email@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobile-register-password">Password</Label>
                            <Input 
                              id="mobile-register-password" 
                              type="password" 
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-health-primary hover:bg-health-primary/90"
                          >
                            Create Account
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
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
