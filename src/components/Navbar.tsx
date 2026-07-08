import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Terminal, Cloud, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Navbar({ darkMode, toggleDarkMode, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled styling
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200/20">
        <motion.div
          id="scroll-progress-indicator"
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center space-x-3 group focus:outline-none"
            id="navbar-brand"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="leading-tight flex flex-col">
              <span className="font-sans font-bold text-base tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                {PORTFOLIO_DATA.name}
              </span>
              <span className="text-[9px] text-cyan-400 font-mono uppercase tracking-widest">
                Cloud & Security Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? darkMode
                        ? "text-cyan-400"
                        : "text-blue-600"
                      : darkMode
                      ? "text-slate-400 hover:text-white hover:bg-slate-900/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              id="desktop-theme-toggle"
              onClick={toggleDarkMode}
              className={`p-2 ml-4 rounded-lg border transition-all ${
                darkMode
                  ? "border-slate-800 bg-slate-900 text-yellow-400 hover:bg-slate-800 hover:text-yellow-300"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-theme-toggle"
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? "border-slate-800 bg-slate-900 text-yellow-400"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t overflow-hidden ${
              darkMode
                ? "bg-slate-950 border-slate-900"
                : "bg-white border-slate-100"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? darkMode
                          ? "bg-blue-500/10 text-blue-400 font-semibold border-l-4 border-blue-500 pl-2"
                          : "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600 pl-2"
                        : darkMode
                        ? "text-slate-400 hover:bg-slate-900 hover:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
