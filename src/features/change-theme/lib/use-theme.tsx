
import { useLayoutEffect, useState } from "react";


export const useTheme = () => {
  
  let localTheme: string | null = 'light';
  
  if (typeof window !== "undefined") {
    localTheme = localStorage.getItem('data-theme')
  }
  const [theme, setTheme] = useState<string>(localTheme || 'dracula');
  
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);
  
  
  return {theme, setTheme}
}