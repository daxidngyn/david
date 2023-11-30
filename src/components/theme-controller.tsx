"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import DarkIcon from "@/icons/dark";
import LightIcon from "@/icons/light";

export default function ThemeController() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LightIcon className="w-6 h-6" />;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <DarkIcon className="w-6 h-6 text-white" />
      ) : (
        <LightIcon className="w-6 h-6" />
      )}
    </button>
  );
}
