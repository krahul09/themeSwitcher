import React, { createContext, useState, useContext, useEffect } from 'react';



const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('blue');


    useEffect(() => {
        document.documentElement.classList.remove('blue', 'pink');
        document.documentElement.classList.add(theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'blue' ? 'pink' : 'blue'));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

export const useTheme = () => useContext(ThemeContext);