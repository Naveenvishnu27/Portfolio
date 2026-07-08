import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Terminal, Shield, Cloud, Server, Sparkles, FileText, CheckCircle2, X } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CertificationsAndAchievements from "./components/CertificationsAndAchievements";
import Contact from "./components/Contact";
import { PORTFOLIO_DATA } from "./types";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("Initializing secure handshake...");
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [resumeDownloadProgress, setResumeDownloadProgress] = useState<number>(0);
  const [isDownloadingResume, setIsDownloadingResume] = useState<boolean>(false);

  // Load and apply theme selection
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(true); // Default to premium dark theme
    }

    // Telemetry Loading Screen text cycle
    const loadingTexts = [
      "Initializing secure handshake...",
      "Resolving dns lookup of Naveen...",
      "Connecting to AWS S3 & API Gateway endpoints...",
      "Authenticating via secure Cognito user pool...",
      "Clearing cybersecurity firewalls & CIA criteria...",
      "Decryption successful. Loading premium portfolio..."
    ];

    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      currentTextIndex++;
      if (currentTextIndex < loadingTexts.length) {
        setLoadingText(loadingTexts[currentTextIndex]);
      }
    }, 280);

    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(textInterval);
    }, 1800);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(textInterval);
    };
  }, []);

  // Sync dark class on body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#05060f"; // Sleek Theme Deep Dark Navy Black
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f8fafc"; // Slate-50
    }
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Track active section and scroll top button visibility
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "contact"];
    
    const handleScroll = () => {
      // Toggle scroll to top button visibility
      setShowScrollTop(window.scrollY > 400);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Simulate downloading resume
  const triggerResumeDownload = () => {
    if (isDownloadingResume) return;
    setIsDownloadingResume(true);
    setResumeDownloadProgress(0);

    const interval = setInterval(() => {
      setResumeDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Generate simulated resume PDF file
            const fileContent = `
=========================================
NAVEEN VISHNU G - PORTFOLIO RESUME
=========================================
Email: ${PORTFOLIO_DATA.email}
Profile: Aspiring Cloud Engineer | Software Developer | Cyber Risk Enthusiast
Location: Chennai, Tamil Nadu, India

ACADEMIC HIGHLIGHTS:
- M.Sc. Computer Science (Pursuing)
- B.Sc. Computer Science (Cloud Technology & Information Security) - CGPA: 7.8/10

TECHNICAL EXPERTISE:
- Cloud Platforms: AWS, S3, Lambda, API Gateway, Cognito, IAM, EC2, CloudWatch
- Programming Languages: Java, Python, C
- Information Security: Network Security, Vulnerability Assessment, Cryptography, CIA Triad, Identity & Access Management (IAM)
- Networking: TCP/IP, DNS, DHCP, HTTP/HTTPS, LAN/WAN, Firewall Concepts, OSI Model
- Database & Tools: MySQL, Git, GitHub, VS Code, Postman

EXPERIENCE & HIGHLIGHTS:
- Cloud Computing Intern at AICTE AWS Academy (Assessment Score: 91/100)
- IT Help Desk Volunteer
- Smart India Hackathon Participant
- 30+ Hours AWS Hands-on Labs completed

Full interactive portfolio details: ${window.location.href}
=========================================
Generated securely via Naveen's Portfolio Cryptographic Handshake.
`;
            const blob = new Blob([fileContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "Naveen_Vishnu_G_Resume_Summary.txt";
            link.click();
            URL.revokeObjectURL(url);

            setIsDownloadingResume(false);
            setShowResumeModal(false);
          }, 600);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
          >
            <div className="w-full max-w-md p-6 text-center space-y-6">
              {/* Rotating Logo element */}
              <div className="relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-xl border border-blue-500/20">
                <Terminal size={32} className="text-white animate-pulse" />
              </div>

              {/* Status Log Console */}
              <div className="bg-black/80 rounded-2xl p-4 border border-slate-900 shadow-inner font-mono text-left space-y-2 max-w-sm mx-auto">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pb-2 border-b border-slate-900">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Naveen_SecNode::Handshake</span>
                </div>
                <div className="text-xs text-cyan-400 font-semibold animate-pulse">{loadingText}</div>
              </div>

              {/* Loader Track */}
              <div className="h-1 w-48 bg-slate-900 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN APPLICATION FRAME */}
      {!isLoading && (
        <div className="relative overflow-hidden">
          {/* Sleek Interface Theme Gradient Orbs */}
          <div className="absolute top-10 left-[-150px] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute top-[25%] right-[-150px] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[30%] left-[-200px] w-[600px] h-[600px] bg-cyan-600/10 dark:bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

          {/* STICKY HEADER */}
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            activeSection={activeSection}
          />

          {/* PORTFOLIO SECTIONS */}
          <main className="relative z-10">
            {/* HERO HERO SECTION */}
            <Hero
              darkMode={darkMode}
              onViewProjects={() => {
                const projElement = document.getElementById("projects");
                projElement?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              onContactMe={() => {
                const contactElement = document.getElementById("contact");
                contactElement?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              onDownloadResume={() => setShowResumeModal(true)}
            />

            {/* ABOUT ME SECTION */}
            <About darkMode={darkMode} />

            {/* TECHNICAL & SOFT SKILLS */}
            <Skills darkMode={darkMode} />

            {/* FEATURED PROJECTS */}
            <Projects darkMode={darkMode} />

            {/* TIMELINE OF EXPERIENCE */}
            <Experience darkMode={darkMode} />

            {/* CERTIFICATIONS AND ACHIEVEMENTS */}
            <CertificationsAndAchievements darkMode={darkMode} />

            {/* CONTACT ME PANEL */}
            <Contact
              darkMode={darkMode}
              onDownloadResume={() => setShowResumeModal(true)}
            />
          </main>

          {/* CONTINUOUS MARQUEE TICKER */}
          <div className={`w-full py-4 overflow-hidden relative z-10 border-t border-b ${
            darkMode ? "bg-slate-950/40 border-slate-900" : "bg-slate-100/60 border-slate-200"
          }`}>
            <div className={`animate-marquee whitespace-nowrap flex gap-16 text-[10px] font-mono uppercase tracking-widest ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> CERTIFIED: AWS CLOUD PRACTITIONER</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> JAVA FUNDAMENTALS SPECIALIST</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> CISCO CYBERSECURITY ACCREDITED</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> NETWORK INFRASTRUCTURE SPECIALIST</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> INFRASTRUCTURE SECURITY ARCHITECT</span>
              {/* Duplicate for seamless infinite loop */}
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> CERTIFIED: AWS CLOUD PRACTITIONER</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> JAVA FUNDAMENTALS SPECIALIST</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> CISCO CYBERSECURITY ACCREDITED</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> NETWORK INFRASTRUCTURE SPECIALIST</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400">●</span> INFRASTRUCTURE SECURITY ARCHITECT</span>
            </div>
          </div>

          {/* FOOTER BAR */}
          <footer className={`py-12 text-center ${
            darkMode ? "bg-slate-950/60 text-slate-500" : "bg-white text-slate-500"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <p className="text-xs sm:text-sm font-sans">
                &copy; {new Date().getFullYear()} <b>{PORTFOLIO_DATA.name}</b>. All rights reserved.
              </p>
              <div className="flex justify-center items-center gap-4 text-[10px] font-mono">
                <span className="flex items-center gap-1">
                  <Cloud size={10} /> Served on Cloud Run
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Shield size={10} /> AES encrypted contact
                </span>
              </div>
            </div>
          </footer>

          {/* FLOATING ACTION BUTTONS */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                id="floating-scroll-top"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                onClick={handleScrollToTop}
                className={`fixed bottom-6 right-6 p-3.5 rounded-full z-40 border shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-blue-400 hover:text-white hover:bg-slate-800"
                    : "bg-white border-slate-200 text-blue-600 hover:text-slate-950 hover:bg-slate-50"
                }`}
                title="Scroll back to top"
              >
                <ArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* RESUME COMPILER OVERLAY MODAL */}
          <AnimatePresence>
            {showResumeModal && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`w-full max-w-md rounded-3xl border shadow-2xl p-6 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-950"
                  }`}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-900 mb-6">
                    <div className="flex items-center gap-2">
                      <FileText className="text-purple-400" size={18} />
                      <h3 className="font-bold font-sans text-base">Secure Resume Handshake</h3>
                    </div>
                    <button
                      id="close-resume-modal"
                      onClick={() => setShowResumeModal(false)}
                      className={`p-1 rounded-lg border ${
                        darkMode ? "border-slate-800 bg-slate-900 text-slate-400 hover:text-white" : "border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Naveen's resume compiler hashes personal credentials, formats cloud nodes, and collates experience indices into a clean, human-readable summary sheet.
                  </p>

                  {/* Progress Indicator */}
                  {isDownloadingResume ? (
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-purple-400">Hashing credentials...</span>
                        <span>{resumeDownloadProgress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                          style={{ width: `${resumeDownloadProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-xl border flex items-start gap-3 bg-blue-500/5 border-blue-500/20 text-blue-400">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                        <div className="text-[11px] leading-relaxed">
                          <b>Verified Source Payload:</b> Ready to construct resume file containing verified AWS credits, university CGPA, and packet analyser descriptions.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowResumeModal(false)}
                      disabled={isDownloadingResume}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold border cursor-pointer ${
                        darkMode
                          ? "border-slate-800 bg-slate-900 text-slate-400 hover:text-white disabled:opacity-40"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 disabled:opacity-40"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      id="btn-confirm-resume-download"
                      onClick={triggerResumeDownload}
                      disabled={isDownloadingResume}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-98 cursor-pointer disabled:scale-100 disabled:opacity-40 flex items-center gap-1.5 shadow-md"
                    >
                      <Sparkles size={12} />
                      {isDownloadingResume ? "Compiling..." : "Compile & Download"}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}
