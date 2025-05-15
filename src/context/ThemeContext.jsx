import { createContext, useContext, useState, useMemo } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const value = useMemo(() => ({
    isDarkMode,
    setIsDarkMode,
    showSidebar,
    setShowSidebar
  }), [isDarkMode, showSidebar]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
