import { Link } from "react-router-dom";
import { BackToTopButton, ThemeToggle } from ".";
import { Building2 } from "lucide-react";

export default function Footer({ setDarkMode, darkMode }) {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4">
          <Building2 className="size-6" />
          <p className="text-sm leading-loose text-muted-foreground md:text-base">
            © 2024 Syed Hanif Shah. All rights reserved.
          </p>
        </div>
        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
        <BackToTopButton />
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
