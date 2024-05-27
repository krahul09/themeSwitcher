import React from 'react';
import { useTheme } from '../contexts/theme';

const ThemedDiv = () => {
  const { theme } = useTheme();

  return (
    <div className={`p-6 m-4 rounded-lg transition-colors duration-500 ${theme === 'blue' ? 'bg-blue-500 text-black' : 'bg-pink-500 text-black'}`}>
      <h2 className="text-lg font-bold">Swtching Themes on button click</h2>
      <p className='flex justify-center'>This card's theme is {theme}.</p>
    </div>
  );
};

export default ThemedDiv;