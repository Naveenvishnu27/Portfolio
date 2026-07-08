import { motion } from "motion/react";
import { User, Award, Cloud, BookOpen, Languages, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { label: "CGPA (B.Sc.)", value: "7.8 / 10", description: "Cloud Tech & Info Security", icon: Award, color: "text-blue-500 bg-blue-500/10" },
    { label: "AWS Training Labs", value: "30+ Hours", description: "Hands-on Architecting", icon: Cloud, color: "text-purple-500 bg-purple-500/10" },
    { label: "AICTE AWS Score", value: "91 / 100", description: "Top Performing Intern", icon: Shield, color: "text-cyan-500 bg-cyan-500/10" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <User size={12} />
            <span>Profile Overview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-3xl sm:text-4xl tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Aspiring Cloud Engineer & Security Specialist
            </h3>
            
            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              {PORTFOLIO_DATA.about}
            </p>

            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              My academic career is highly specialized in **Cloud Technology** and **Information Security**. 
              I design and deploy secure network structures, automate microservices, implement vulnerability assessments, 
              and write optimized, object-oriented code. My goal is to build cloud-native infrastructure that meets 
              high standards of confidentiality, integrity, and availability.
            </p>

            {/* Languages Display */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-blue-400 flex items-center gap-2">
                <Languages size={16} /> Spoken Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="px-4 py-2 sleek-card sleek-card-hover flex items-center justify-between gap-3"
                  >
                    <span className="font-medium text-sm">{lang.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
                      darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                    }`}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-5 sleek-card sleek-card-hover flex items-start gap-4 hover:scale-[1.02] transition-transform"
                  >
                    <div className={`p-3 rounded-xl ${stat.color} flex-shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className={`text-xs font-mono uppercase tracking-wider ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                        {stat.label}
                      </p>
                      <h4 className="text-xl font-bold font-sans mt-0.5 tracking-tight">
                        {stat.value}
                      </h4>
                      <p className={`text-xs mt-1 leading-normal ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Core values card */}
            <div className={`p-6 sleek-card bg-gradient-to-tr ${
              darkMode 
                ? "from-blue-950/20 to-purple-950/20" 
                : "from-blue-50/40 to-purple-50/40"
            }`}>
              <h4 className="font-semibold text-sm flex items-center gap-2 mb-2 text-purple-400">
                <BookOpen size={16} /> Academic Mission
              </h4>
              <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Applying state-of-the-art security, zero-trust paradigms, and highly performant AWS lambda triggers 
                to support fast, serverless enterprise pipelines with near-zero runtime idle charges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
