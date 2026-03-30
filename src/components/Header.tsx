import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, hash?: string) => {
    if (window.location.pathname === '/' && hash) {
      // If already on home page, just scroll to section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (hash) {
      // If on different page, navigate to home then scroll
      navigate(`${path}#${hash}`);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
            <nav className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('/', 'hero')}
                className="text-muted-foreground hover:text-primary transition-all duration-500 animate-fade-in hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/', 'services')}
                className="text-muted-foreground hover:text-primary transition-all duration-500 animate-fade-in hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/', 'ongoing-events')}
                className="text-muted-foreground hover:text-primary transition-all duration-500 animate-fade-in hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Upcoming Events
              </button>
              <button 
                onClick={() => handleNavigation('/', 'testimonials')}
                className="text-muted-foreground hover:text-primary transition-all duration-500 animate-fade-in hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigation('/', 'contact')}
                className="text-muted-foreground hover:text-primary transition-all duration-500 animate-fade-in hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Contact
              </button>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;