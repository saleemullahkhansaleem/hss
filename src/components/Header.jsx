import { Link } from "react-router-dom";
import { ThemeToggle } from ".";
import { Button } from "./ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = ({ setDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "About", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Stats", href: "stats" },
    // { label: "Contact", href: "contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Building2 className="size-6 text-primary" />
          <span className="text-lg font-semibold">Syed Hanif Shah</span>
        </Link>
        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link to="contact">Contact Me</Link>
          </Button>
        </nav>
        {/* Mobile Navigation */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container mx-auto md:hidden">
          <nav className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full">Contact Me</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
