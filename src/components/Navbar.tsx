import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-foreground">
              MODERN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-accent transition-colors">
              Shop
            </a>
            <a href="#categories" className="text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <a
              href="#products"
              className="block py-2 text-foreground hover:text-accent transition-colors"
            >
              Shop
            </a>
            <a
              href="#categories"
              className="block py-2 text-foreground hover:text-accent transition-colors"
            >
              Collections
            </a>
            <a
              href="#about"
              className="block py-2 text-foreground hover:text-accent transition-colors"
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
