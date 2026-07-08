import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, FileDown, Globe, Compass, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface ContactProps {
  darkMode: boolean;
  onDownloadResume: () => void;
}

export default function Contact({ darkMode, onDownloadResume }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [zoomLevel, setZoomLevel] = useState(14);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API Request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto close success alert after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Mail size={12} />
            <span>Connect Node</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-3xl sm:text-4xl tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Major Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-panel-grid">
          
          {/* Column 1: Info Cards & Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight">Contact Channels</h3>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Reach out for placement opportunities, consulting engagements, cyber risk reviews, or collaborative cloud architecture trials.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy Trigger */}
              <div className="p-4 sleek-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Email Address</p>
                    <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-xs sm:text-sm font-semibold hover:text-blue-400 transition-colors">
                      {PORTFOLIO_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={copyToClipboard}
                  className={`p-2 rounded-xl border ${
                    darkMode ? "border-slate-800 bg-slate-900 hover:text-white" : "border-slate-200 bg-slate-50 hover:text-slate-900"
                  } transition-colors`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn & GitHub Double Badge */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="contact-channel-linkedin"
                  href={PORTFOLIO_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sleek-card sleek-card-hover flex items-center gap-3 hover:scale-[1.02] transition-transform"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-500">LinkedIn</p>
                    <p className="text-xs font-bold">Connect</p>
                  </div>
                </a>

                <a
                  id="contact-channel-github"
                  href={PORTFOLIO_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sleek-card sleek-card-hover flex items-center gap-3 hover:scale-[1.02] transition-transform"
                >
                  <div className="p-2 rounded-lg bg-slate-500/10 text-slate-400">
                    <Github size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-500">GitHub</p>
                    <p className="text-xs font-bold">Follow</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Aesthetic Interactive Map Mockup */}
            <div className="p-5 sleek-card overflow-hidden flex-1 flex flex-col justify-between min-h-[180px] relative group">
              {/* Radar/Telemetry overlay */}
              <div className="absolute inset-0 bg-radial-gradient opacity-[0.03] pointer-events-none" />
              
              {/* Fake Map Grid lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                  <Compass size={14} className="animate-spin" style={{ animationDuration: "12s" }} />
                  <span>GeoNode.SecEnv::Live</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">Zoom: {zoomLevel}x</div>
              </div>

              {/* Geographic graphic indicator */}
              <div className="relative z-10 py-6 text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 relative">
                  <span className="absolute inset-0 rounded-full bg-blue-500/15 animate-ping" />
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-sm tracking-tight">Chennai, Tamil Nadu, India</h4>
                <p className="text-[10px] font-mono text-slate-500">LAT: 13.0827° N | LONG: 80.2707° E</p>
              </div>

              {/* Slider zoom and direction action */}
              <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center gap-4">
                <input
                  type="range"
                  min="10"
                  max="20"
                  value={zoomLevel}
                  onChange={(e) => setZoomLevel(parseInt(e.target.value))}
                  className="w-1/2 h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  title="Adjust Simulated Zoom"
                />
                
                <a
                  href="https://maps.google.com/?q=Chennai,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-3 py-1.5 text-[10px] font-bold rounded-lg border text-center flex items-center justify-center gap-1 hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
                >
                  <ExternalLink size={10} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Large Download Resume Trigger */}
            <button
              id="contact-large-resume-btn"
              onClick={onDownloadResume}
              className="w-full py-4 rounded-2xl font-bold text-sm border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer font-mono tracking-wide"
            >
              <FileDown size={18} />
              Secure Resume Download (PDF)
            </button>
          </div>

          {/* Column 2: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-6 sm:p-8 sleek-card flex flex-col justify-between relative overflow-hidden"
          >
            <form onSubmit={handleFormSubmit} className="space-y-5" id="portfolio-contact-form">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight">Send Message</h3>
                <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Submit your details. Submissions trigger automated secure sandbox pipelines mimicking actual server routes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Full Name *</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. Elon Musk"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      darkMode
                        ? "border-slate-800 bg-slate-900/40 text-white focus:border-blue-500"
                        : "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500"
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email Address *</label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. client@tesla.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      darkMode
                        ? "border-slate-800 bg-slate-900/40 text-white focus:border-blue-500"
                        : "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500"
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject-input" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Subject</label>
                <input
                  id="subject-input"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="E.g. Cloud Security Consultation"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/40 text-white focus:border-blue-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Message Text *</label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="E.g. I would love to interview you for our cloud/cyber risk internship position."
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/40 text-white focus:border-blue-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Submit Trigger Button */}
              <button
                id="btn-submit-contact-form"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:opacity-80 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                {isSubmitting ? (
                  <>
                    <Globe className="animate-spin" size={16} />
                    Securing Transmission...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Secure Encrypted Message
                  </>
                )}
              </button>
            </form>

            {/* Success Alert Overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-6 bottom-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                  id="submit-success-alert"
                >
                  <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-emerald-400">Message Transmitted Successfully!</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">
                      Naveen's sandbox terminal registered your packet. He will respond via the provided email shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
