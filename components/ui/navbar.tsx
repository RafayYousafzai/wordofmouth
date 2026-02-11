// components/navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Founders", href: "/#founders" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "What's Next", href: "/whats-next" },
  ];

  // Smooth scroll handler for hash links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If element not found on current page, navigate normally
        window.location.href = href;
      }
    }
    setIsOpen(false);
  };

  // Magnetic button effect component
  const MagneticLink = ({
    children,
    href,
    className,
    onHover,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    onHover?: () => void;
  }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setPosition({
        x: (e.clientX - centerX) * 0.2,
        y: (e.clientY - centerY) * 0.2,
      });
    };

    return (
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
      >
        <Link
          href={href}
          className={className}
          onMouseEnter={onHover}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPosition({ x: 0, y: 0 })}
          onClick={(e) => handleNavClick(e, href)}
        >
          {children}
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/90 dark:bg-[#1a1410]/95 backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo with floating animation */}
            <MagneticLink href="/" className="flex items-center gap-3 group">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/icon.png"
                  alt="Word of Mouth"
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  priority
                />
                {/* Sparkle effect on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-1 -right-1 text-yellow-400"
                >
                  <Sparkles size={16} fill="currentColor" />
                </motion.div>
              </motion.div>

              <div className="flex flex-col">
                <motion.span
                  className="text-xl font-black tracking-tight text-[#181411] dark:text-white"
                  whileHover={{ x: 3 }}
                >
                  Word of Mouth
                </motion.span>
                <span className="text-[10px] font-bold text-[#f48c25] uppercase tracking-widest hidden sm:block">
                  Real Food. Real Friends.
                </span>
              </div>
            </MagneticLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  <MagneticLink
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-bold text-[#5c4d3c] dark:text-[#d4c4b0] hover:text-[#f48c25] dark:hover:text-[#f48c25] transition-colors duration-300 flex items-center gap-2"
                  >
                    <motion.span
                      animate={{
                        scale: hoveredItem === item.label ? 1.2 : 1,
                        rotate:
                          hoveredItem === item.label ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                    {item.label}

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f48c25] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredItem === item.label ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MagneticLink>
                </motion.div>
              ))}

              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* CTA Button with wiggle animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotate: [0, 0, 0, 0, 0, 2, -2, 2, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                }}
              >
                <Link
                  href="/get-the-app"
                  className="ml-4 w-f relative overflow-hidden rounded-2xl bg-[#f48c25] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#f48c25]/30 hover:shadow-[#f48c25]/50 transition-shadow duration-300 group"
                >
                  <motion.span
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  Get the App
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#f48c25]/10 dark:bg-[#f48c25]/20 text-[#f48c25]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#1a1410] z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f48c25]/10 text-[#f48c25]"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex-1 flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-center gap-4 p-4 rounded-2xl text-[#5c4d3c] dark:text-[#d4c4b0] hover:bg-[#f48c25]/10 dark:hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-all duration-300 group"
                      >
                        <span className="font-bold text-lg">{item.label}</span>
                        <motion.span
                          className="ml-auto opacity-0 group-hover:opacity-100 text-[#f48c25]"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/get-the-app"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-[#f48c25] text-white font-black text-lg shadow-lg shadow-[#f48c25]/30"
                  >
                    <UtensilsCrossed size={20} />
                    Get the App
                  </Link>

                  <div className="mt-4 flex justify-center">
                    <DarkModeToggle mobile />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Dark Mode Toggle Component
function DarkModeToggle({ mobile = false }: { mobile?: boolean }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  if (mobile) {
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center gap-3 p-4 rounded-2xl bg-[#f48c25]/10 dark:bg-[#f48c25]/20 text-[#5c4d3c] dark:text-[#d4c4b0] w-full font-bold"
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.div>
        {isDark ? "Dark Mode" : "Light Mode"}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-2 relative w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden group"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 0 : 40,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <span className="text-xl">🌙</span>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDark ? -40 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <span className="text-xl">☀️</span>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark
            ? "0 0 20px rgba(244, 140, 37, 0.3)"
            : "0 0 20px rgba(244, 140, 37, 0.1)",
        }}
      />
    </motion.button>
  );
}
