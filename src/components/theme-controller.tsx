"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import DarkIcon from "@/icons/dark";
import LightIcon from "@/icons/light";
import SystemIcon from "@/icons/system";

export default function ThemeController() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LightIcon className="h-6 w-6" />;

  const ThemeIconMapper = () => {
    if (theme === "light")
      return <LightIcon className="h-5 w-5 text-sky-600" />;
    if (theme === "dark") return <DarkIcon className="h-5 w-5 text-sky-400" />;

    if (window.matchMedia("(prefers-color-scheme: light)").matches)
      return <LightIcon className="h-5 w-5 " />;
    return <DarkIcon className="h-5 w-5 text-gray-300" />;
  };

  return (
    <Select
      aria-labelledby="Theme Select"
      selectedKey={theme}
      onSelectionChange={(selected) => setTheme(selected as string)}
      className="flex flex-col"
    >
      <Button className="outline-none">
        <ThemeIconMapper />
      </Button>
      <Popover
        placement="bottom right"
        offset={16}
        crossOffset={40}
        className="w-[144px] overflow-auto rounded-xl border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
      >
        <ListBox aria-labelledby="Theme" className="py-1 outline-none">
          <ListBoxItem
            id="light"
            textValue="Light"
            className="flex items-center gap-x-2 px-2 py-1 outline-none hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <LightIcon
              className={`h-4 w-4 ${
                theme === "light"
                  ? "text-sky-600"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            />{" "}
            <span
              className={`text-sm tracking-wide ${
                theme === "light" ? "text-sky-600" : ""
              }`}
            >
              Light
            </span>
          </ListBoxItem>
          <ListBoxItem
            id="dark"
            textValue="Dark"
            className="flex items-center gap-x-2 px-2 py-1 outline-none hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <DarkIcon
              className={`h-4 w-4 ${
                theme === "dark"
                  ? "text-sky-400"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            />{" "}
            <span
              className={`text-sm tracking-wide ${
                theme === "dark" ? "text-sky-400" : ""
              }`}
            >
              Dark
            </span>
          </ListBoxItem>
          <ListBoxItem
            id="system"
            textValue="System"
            className="flex items-center gap-x-2 px-2 py-1 outline-none hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <SystemIcon
              className={`h-4 w-4 ${
                theme === "system"
                  ? "text-sky-400"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            />{" "}
            <span
              className={`text-sm tracking-wide ${
                theme === "system" ? "text-sky-400" : ""
              }`}
            >
              System
            </span>
          </ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}
