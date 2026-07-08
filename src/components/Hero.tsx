import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown, FileText, Send, Code, Shield, Cloud } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface HeroProps {
  darkMode: boolean;
  onViewProjects: () => void;
  onContactMe: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ darkMode, onViewProjects, onContactMe, onDownloadResume }: HeroProps) {
  const [text, setText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = PORTFOLIO_DATA.titles;
  const typingSpeed = isDeleting ? 40 : 100;
  const period = 2000; // Pause duration

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[titleIdx];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length + 1));
      }, typingSpeed);

      if (text === currentFullText) {
        // Pause before erasing
        timer = setTimeout(() => setIsDeleting(true), period);
      }
    } else {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length - 1));
      }, typingSpeed);

      if (text === "") {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIdx, titles, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Neon Gradient Orbs */}
        <div
          className={`absolute top-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full blur-3xl transition-colors duration-1000 ${
            darkMode ? "bg-blue-600/10" : "bg-blue-400/10"
          } animate-pulse`}
          style={{ animationDuration: "8s" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-3xl transition-colors duration-1000 ${
            darkMode ? "bg-purple-600/10" : "bg-purple-400/10"
          } animate-pulse`}
          style={{ animationDuration: "12s" }}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full blur-3xl transition-colors duration-1000 ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-400/5"
          } animate-pulse`}
          style={{ animationDuration: "10s" }}
        />

        {/* Techno Mesh/Grid Background Accent */}
        <div
          className={`absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.05)_1px,transparent_1px)] bg-[size:32px_32px] ${
            darkMode
              ? "opacity-[0.2] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
              : "opacity-[0.5]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pretitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6 shadow-sm font-mono tracking-wide"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping mr-1" />
          <span>Available for Internships & Full-time Roles</span>
        </motion.div>

        {/* Main Header Name */}
        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans font-extrabold text-5xl sm:text-7xl tracking-tight leading-none mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {PORTFOLIO_DATA.name}
          </span>
        </motion.h1>

        {/* Animated Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-3xl font-semibold opacity-90 flex items-center">
            <span className="text-slate-400 mr-2 font-light">I'm a</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              {text}
            </span>
            <span className="w-1.5 h-7 sm:h-9 bg-cyan-500 ml-1.5 animate-pulse rounded-sm" />
          </span>
        </motion.div>

        {/* Professional Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-light ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {PORTFOLIO_DATA.tagline}
        </motion.p>

        {/* Action Call buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            id="hero-btn-projects"
            onClick={onViewProjects}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-black shadow-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Code size={18} />
            View Projects
          </button>

          <button
            id="hero-btn-resume"
            onClick={onDownloadResume}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium border transition-all cursor-pointer flex items-center justify-center gap-2 ${
              darkMode
                ? "border-white/20 bg-white/10 text-slate-100 hover:bg-white/20"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
            }`}
          >
            <FileText size={18} />
            Download Resume
          </button>

          <button
            id="hero-btn-contact"
            onClick={onContactMe}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium border transition-all cursor-pointer flex items-center justify-center gap-2 ${
              darkMode
                ? "border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                : "border-blue-200 bg-blue-5/30 text-blue-600 hover:bg-blue-5/50 hover:border-blue-300"
            }`}
          >
            <Send size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center space-x-4 mb-16"
        >
          <a
            id="hero-social-github"
            href={PORTFOLIO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl border transition-all hover:scale-110 ${
              darkMode
                ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
                : "border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            id="hero-social-linkedin"
            href={PORTFOLIO_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl border transition-all hover:scale-110 ${
              darkMode
                ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
                : "border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            id="hero-social-email"
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className={`p-3 rounded-xl border transition-all hover:scale-110 ${
              darkMode
                ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
                : "border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
            title="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span className={`text-xs tracking-widest uppercase font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
            Discover More
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className={`p-1.5 rounded-full ${darkMode ? "text-blue-400 bg-blue-400/5 border border-blue-500/20" : "text-blue-600 bg-blue-50 border border-blue-100"}`}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
