import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop, ThemeToggle } from "./components";
import { useEffect, useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className={`bg-background text-foreground ${darkMode ? "dark" : ""}`}>
      <div className="fixed top-2 right-2 z-50">
        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
      <ScrollToTop />
      {/* <Header /> */}
      <Outlet />
      <Footer setDarkMode={setDarkMode} darkMode={darkMode} />
    </main>
  );
}
