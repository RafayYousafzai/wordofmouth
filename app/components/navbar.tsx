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
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Download, Sparkles } from "lucide-react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Team",
    "App Features",
    "Testimonials",
    "Contact",
  ];

  const handleDownloadClick = () => {
    window.open(
      "https://apps.apple.com/us/app/word-of-mouth-foodie/id6744751812",
      "_blank"
    );
  };

  if (!mounted) return null;

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="backdrop-blur-xl bg-background/80 border-b border-divider/50 shadow-lg"
      isBlurred
      isBordered
      maxWidth="xl"
      height="4.5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground hover:text-[#FFC94A] transition-colors"
        />
        <NavbarBrand>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                src="/logo.png"
                alt="WOM Logo"
                className="w-16 h-16 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC94A] to-[#FFD700] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl bg-gradient-to-r from-[#FFC94A] via-[#FFD700] to-[#FFC94A] bg-clip-text text-transparent">
                WOM
              </p>
              <p className="text-xs text-foreground/60 font-medium">Foodie</p>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item}>
            <Link
              color="foreground"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative font-medium text-foreground/80 hover:text-[#FFC94A] transition-all duration-300 group px-2 py-1"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFC94A]/10 to-[#FFD700]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFC94A] to-[#FFD700] group-hover:w-full transition-all duration-300"></div>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-[#FFC94A]/10 transition-all duration-300 hover:scale-105 rounded-xl"
            size="sm"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-[#FFC94A]" />
            ) : (
              <Moon size={18} className="text-[#FFC94A]" />
            )}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={handleDownloadClick}
            className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFC94A] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl px-6"
            variant="flat"
            startContent={<Download size={16} />}
          >
            Download App
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-xl border-r border-divider/50">
        <div className="flex flex-col gap-2 mt-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full p-3 rounded-xl hover:bg-[#FFC94A]/10 hover:text-[#FFC94A] transition-all duration-300 font-medium"
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-4 pt-4 border-t border-divider/50">
            <Button
              onClick={handleDownloadClick}
              className="w-full bg-gradient-to-r from-[#FFC94A] to-[#FFD700] text-black font-semibold shadow-lg rounded-xl"
              startContent={<Download size={16} />}
              endContent={<Sparkles size={14} className="animate-pulse" />}
            >
              Download App
            </Button>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
