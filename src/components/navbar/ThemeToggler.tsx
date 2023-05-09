import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className=""
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀"}
      <span className="sr-only">Cambiar modo claro o modo oscuro</span>
    </button>
  );
}

export { ThemeToggler };
