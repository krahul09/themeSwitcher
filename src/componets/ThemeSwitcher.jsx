import React from 'react';
import { useTheme } from '../contexts/theme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-red-600 text-white rounded-md mt-4"
    >
      Click here to switch to {theme === 'blue' ? 'pink' : 'blue'} mode
    </button>
  );
};

export default ThemeSwitcher;