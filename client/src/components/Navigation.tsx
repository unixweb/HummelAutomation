import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onSectionChange?: (section: string) => void;
}

export default function Navigation({ onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location !== '/') {
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
    onSectionChange?.(sectionId);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Start", type: "scroll" },
    { id: "about", label: "Über mich", type: "scroll" },
    { id: "services", label: "Leistungen", type: "scroll" },
    { id: "contact", label: "Kontakt", type: "scroll" },
  ];

  const pageItems = [
    { path: "/impressum", label: "Impressum" },
    { path: "/datenschutz", label: "Datenschutz" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover-elevate rounded-md px-3 py-2"
            data-testid="link-logo"
          >
            Joachim Hummel
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            {pageItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateToPage(item.path)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid={`link-nav-${item.path.replace('/', '')}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover-elevate"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              {pageItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigateToPage(item.path)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover-elevate"
                  data-testid={`link-mobile-${item.path.replace('/', '')}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}