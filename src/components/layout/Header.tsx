
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (path !== "/consult") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={() => handleNavigation("/")}>
          <div className="w-8 h-8 rounded-full bg-health-primary flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AI</span>
          </div>
          <span className="font-bold text-xl text-health-dark">CareAdvisor</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => handleNavigation("/consult")}
            className="text-health-dark hover:text-health-primary transition-colors"
          >
            AI Consultation
          </button>
          <button 
            onClick={() => handleNavigation("/contact-doctor")}
            className="text-health-dark hover:text-health-primary transition-colors"
          >
            Contact Doctor
          </button>
          <button 
            onClick={() => handleNavigation("/history")}
            className="text-health-dark hover:text-health-primary transition-colors"
          >
            Health History
          </button>
          <button 
            onClick={() => handleNavigation("/resources")}
            className="text-health-dark hover:text-health-primary transition-colors"
          >
            Resources
          </button>
        </nav>
        
        {/* Desktop Action Items */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-health-dark" />
          </Button>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-health-primary" />
            </Button>
            <span className="text-sm text-health-dark">
              {user?.email}
            </span>
            <Button 
              variant="outline" 
              className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white"
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </div>
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
              <button 
                onClick={() => handleNavigation("/consult")}
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md text-left"
              >
                AI Consultation
              </button>
              <button 
                onClick={() => handleNavigation("/contact-doctor")}
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md text-left"
              >
                Contact Doctor
              </button>
              <button 
                onClick={() => handleNavigation("/history")}
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md text-left"
              >
                Health History
              </button>
              <button 
                onClick={() => handleNavigation("/resources")}
                className="px-3 py-2 text-health-dark hover:bg-health-light rounded-md text-left"
              >
                Resources
              </button>
              <div className="pt-2 flex flex-col space-y-2">
                <div className="px-3 py-2 text-sm text-health-dark">
                  {user?.email}
                </div>
                <Button 
                  onClick={handleLogout} 
                  className="justify-center w-full bg-health-primary text-white hover:bg-health-primary/90"
                >
                  Sign Out
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
