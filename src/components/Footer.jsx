import { Link } from "react-router-dom";
import { BackToTopButton } from ".";

export default function Footer() {
  return (
    <footer className="border-t px-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-16 md:flex-row md:py-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./logo.svg"
              alt="logo"
              className="w-8 object-cover fill-primary text-primary"
            />
          </Link>
          <p className="text-xs leading-loose text-muted-foreground md:text-sm">
            © 2024 HS Secretariat. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-xs font-medium text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs font-medium text-muted-foreground hover:text-primary"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
      <BackToTopButton />
    </footer>
  );
}
