import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleSwitch: React.FC = () => {
  // Initialize state from localStorage or default to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') { // Ensure localStorage is available
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      // Optionally check system preference if no saved theme
      // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // return prefersDark ? 'dark' : 'light';
    }
    return 'light'; // Default theme
  });

  // Effect to apply theme class to documentElement and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', theme);
        console.log(`Theme set to ${theme} and saved to localStorage.`);
      } catch (error) {
        console.error("Failed to save theme to localStorage:", error);
      }
    }
  }, [theme]);

  // Toggle handler
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // Ensure the component only renders client-side where localStorage is available
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing or a placeholder SSR state
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={20} aria-hidden="true" />
      ) : (
        <Sun size={20} aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggleSwitch;
