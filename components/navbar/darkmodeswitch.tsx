"use client";
import { useTheme as useNextTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        isIconOnly
        radius="full"
        variant="bordered"
        className="w-11 h-11 border-2"
      >
        <div className="w-5 h-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      isIconOnly
      radius="full"
      variant="light"
      onPress={toggleTheme}
      className="relative w-11 h-11 overflow-hidden group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Sun Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isDark
            ? "opacity-0 rotate-180 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <MdWbSunny className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-180 scale-0"
        }`}
      >
        <BsMoonStarsFill className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      </div>

      {/* Rotating Ring Effect */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700 ${
          isDark
            ? "border-blue-400/30 rotate-0"
            : "border-yellow-400/30 rotate-180"
        } group-hover:rotate-[360deg]`}
      />
    </Button>
  );
};

export default DarkModeSwitch;
