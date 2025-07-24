"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Download, Sparkles } from "lucide-react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Team", id: "team" },
    { name: "App Features", id: "app-features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleDownloadClick = () => {
    window.open(
      "https://apps.apple.com/us/app/word-of-mouth-foodie/id6744751812",
      "_blank"
    );
  };

  const handleNavClick = (sectionId: any) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!mounted) return null;

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="backdrop-blur-xl bg-background/80 dark:bg-background/60 border-b border-divider/50 shadow-lg transition-all duration-300"
      isBlurred
      isBordered
      maxWidth="xl"
      height="4.5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground hover:text-warning-500 transition-all duration-300 hover:scale-110"
        />
        <NavbarBrand>
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative">
              <Image
                src="/icon.png"
                alt="WOM Logo"
                className="w-16 h-16 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 rounded-xl blur opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="sm:flex hidden flex-col">
              <p className="font-black text-xl bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 bg-clip-text text-transparent animate-gradient">
                WOM
              </p>
              <p className="text-xs text-foreground/60 font-medium tracking-wider">
                Foodie
              </p>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Button
              variant="light"
              onClick={() => handleNavClick(item.id)}
              className={`relative font-medium transition-all duration-500 group px-4 py-2 rounded-xl hover:scale-105 ${
                activeSection === item.id
                  ? "text-warning-600 dark:text-warning-400 bg-warning-50/80 dark:bg-warning-950/50"
                  : "text-foreground/80 hover:text-warning-600 dark:hover:text-warning-400"
              }`}
            >
              <span className="relative z-10 transition-all duration-300">
                {item.name}
              </span>

              {/* Hover background effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-warning-400/10 via-warning-500/10 to-warning-600/10 dark:from-warning-300/10 dark:via-warning-400/10 dark:to-warning-500/10 rounded-xl transition-all duration-500 ${
                  activeSection === item.id
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                }`}
              ></div>

              {/* Active/hover underline */}
              <div
                className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 rounded-full transition-all duration-500 ${
                  activeSection === item.id
                    ? "w-3/4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                }`}
              ></div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-warning-400/20 dark:bg-warning-300/20 rounded-xl blur-md transition-all duration-500 ${
                  activeSection === item.id
                    ? "opacity-50 scale-110"
                    : "opacity-0 scale-95 group-hover:opacity-30 group-hover:scale-105"
                }`}
              ></div>
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-warning-50 dark:hover:bg-warning-950/50 transition-all duration-500 hover:scale-110 hover:rotate-12 rounded-xl group"
            size="sm"
          >
            <div className="relative">
              {theme === "dark" ? (
                <Sun
                  size={18}
                  className="text-warning-500 dark:text-warning-400 group-hover:text-warning-600 dark:group-hover:text-warning-300 transition-all duration-300 group-hover:rotate-12"
                />
              ) : (
                <Moon
                  size={18}
                  className="text-warning-500 dark:text-warning-400 group-hover:text-warning-600 dark:group-hover:text-warning-300 transition-all duration-300 group-hover:-rotate-12"
                />
              )}
              <div className="absolute inset-0 bg-warning-400/20 dark:bg-warning-300/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={handleDownloadClick}
            className="bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 hover:from-warning-500 hover:via-warning-600 hover:to-warning-700 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 dark:hover:from-warning-400 dark:hover:via-warning-500 dark:hover:to-warning-600 text-white dark:text-black font-bold shadow-lg hover:shadow-xl hover:shadow-warning-500/25 dark:hover:shadow-warning-400/25 transition-all duration-500 hover:scale-110 hover:-translate-y-0.5 rounded-xl px-6 relative overflow-hidden group"
            variant="flat"
            startContent={
              <Download size={16} className="group-hover:animate-bounce" />
            }
          >
            <span className="relative z-10">Download App</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/95 dark:bg-background/90 backdrop-blur-xl border-r border-divider/50 transition-all duration-500">
        <div className="flex flex-col gap-2 mt-6 px-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Button
                variant="light"
                onClick={() => handleNavClick(item.id)}
                className={`w-full justify-start p-4 rounded-xl font-medium transition-all duration-500 hover:scale-105 group ${
                  activeSection === item.id
                    ? "bg-warning-50 dark:bg-warning-950/50 text-warning-600 dark:text-warning-400"
                    : "hover:bg-warning-50/50 dark:hover:bg-warning-950/30 hover:text-warning-600 dark:hover:text-warning-400"
                }`}
                size="lg"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                  {item.name}
                </span>
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-warning-400 to-warning-600 dark:from-warning-300 dark:to-warning-500 rounded-full transition-all duration-500 ${
                    activeSection === item.id
                      ? "h-8 opacity-100"
                      : "h-0 opacity-0 group-hover:h-6 group-hover:opacity-100"
                  }`}
                ></div>
              </Button>
            </NavbarMenuItem>
          ))}
          <div className="mt-6 pt-6 border-t border-divider/50">
            <Button
              onClick={handleDownloadClick}
              className="w-full bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 text-white dark:text-black font-bold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 rounded-xl relative overflow-hidden group"
              startContent={
                <Download size={16} className="group-hover:animate-bounce" />
              }
              endContent={
                <Sparkles
                  size={14}
                  className="animate-pulse group-hover:animate-spin"
                />
              }
            >
              <span className="relative z-10">Download App</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>
      </NavbarMenu>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </Navbar>
  );
}
