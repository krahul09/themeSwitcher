import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import './index.css'
import ThemeSwitcher from "./componets/ThemeSwitcher";
import ThemedDiv from "./componets/ThemedDiv";

function App() {
 

  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <ThemeSwitcher />
      <ThemedDiv />
    </div>
  </ThemeProvider>
  );
}

export default App;
