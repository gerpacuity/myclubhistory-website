import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Screenshot 2025-08-24 132539_1757589851097.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="My Club History Logo" 
              className="h-16 w-auto lg:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <button 
              onClick={() => scrollToSection("showcase")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-the-book"
            >
              The Book
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="w-px h-8 bg-border/80 mx-2"></div>
            <button 
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-living-history"
            >
              Living History Features
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="w-px h-8 bg-border/80 mx-2"></div>
            <button 
              onClick={() => scrollToSection("metrics")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-success"
            >
              Success Stories
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="w-px h-8 bg-border/80 mx-2"></div>
            <button 
              onClick={() => scrollToSection("process")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-the-process"
            >
              The Process
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="w-px h-8 bg-border/80 mx-2"></div>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-about"
            >
              About Us
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="w-px h-8 bg-border/80 mx-2"></div>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-medium relative group px-4"
              data-testid="nav-contact"
            >
              Contact
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </nav>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 space-y-4 bg-card/50 backdrop-blur-sm animate-in slide-in-from-top duration-200">
            <button
              onClick={() => scrollToSection("showcase")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-the-book"
            >
              The Book
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-living-history"
            >
              Living History Features
            </button>
            <button
              onClick={() => scrollToSection("metrics")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-success"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-the-process"
            >
              The Process
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-about"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 font-medium"
              data-testid="nav-mobile-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}