
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Button variant="outline" className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white">
            Sign In
          </Button>
          <Button className="bg-health-primary text-white hover:bg-health-primary/90">
            Register
          </Button>
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
                <Button variant="outline" className="justify-center w-full border-health-primary text-health-primary hover:bg-health-primary hover:text-white">
                  Sign In
                </Button>
                <Button className="justify-center w-full bg-health-primary text-white hover:bg-health-primary/90">
                  Register
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
