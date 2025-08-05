import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gradient">AutoResume AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#templates" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Templates
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth/login">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/auth/signup">
                <User className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg border">
              <a href="#features" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#templates" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
                Templates
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
                About
              </a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" className="justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button variant="hero" size="sm" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}