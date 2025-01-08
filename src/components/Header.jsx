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
      <div className="container mx-auto flex h-12 items-center justify-between">
        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
    </header>
  );
};

export default Header;
