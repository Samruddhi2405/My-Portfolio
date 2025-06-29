import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
