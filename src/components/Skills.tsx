import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Briefcase, ChevronRight, CheckCircle2, Shield, Network, Server, Terminal, Database, Sliders, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  // Map category titles to icons for visual representation
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Cloud Platforms":
        return <Server className="text-blue-500" size={18} />;
      case "Programming Languages":
        return <Terminal className="text-purple-500" size={18} />;
      case "Information Security":
        return <Shield className="text-emerald-500" size={18} />;
      case "Networking":
        return <Network className="text-amber-500" size={18} />;
      case "Operating Systems":
        return <Cpu className="text-indigo-500" size={18} />;
      case "Database":
        return <Database className="text-rose-500" size={18} />;
      case "Tools & Environment":
        return <Sliders className="text-cyan-500" size={18} />;
      default:
        return <CheckCircle2 className="text-blue-400" size={18} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            <Cpu size={12} />
            <span>Capability Index</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-3xl sm:text-4xl tracking-tight"
          >
            Technical & Soft Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />

          {/* Toggle Tabs */}
          <div className="flex justify-center mt-10">
            <div className={`p-1 rounded-xl border flex items-center ${
              darkMode ? "bg-slate-950 border-slate-900" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                id="skills-tab-technical"
                onClick={() => setActiveTab("technical")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "technical"
                    ? darkMode
                      ? "bg-slate-900 text-white shadow-md border border-slate-800"
                      : "bg-white text-slate-950 shadow-sm border border-slate-200"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <Cpu size={16} />
                Technical Skills
              </button>
              <button
                id="skills-tab-soft"
                onClick={() => setActiveTab("soft")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "soft"
                    ? darkMode
                      ? "bg-slate-900 text-white shadow-md border border-slate-800"
                      : "bg-white text-slate-950 shadow-sm border border-slate-200"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <Sparkles size={16} />
                Soft Skills
              </button>
            </div>
          </div>
        </div>

        {/* Skills Content Panel */}
        <div className="relative">
          {activeTab === "technical" ? (
            /* Technical Skills Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="tech-skills-grid">
              {PORTFOLIO_DATA.skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                  className="p-6 sleek-card sleek-card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-900">
                      {getCategoryIcon(category.title)}
                      <h3 className="font-semibold text-base tracking-tight">{category.title}</h3>
                    </div>

                    {/* Skill Items with Animated Skill Bars */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                              {skill.name}
                            </span>
                            <span className="font-mono text-blue-400 font-semibold">{skill.level}%</span>
                          </div>
                          
                          {/* Skill Bar Track */}
                          <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                            darkMode ? "bg-slate-900" : "bg-slate-100"
                          }`}>
                            {/* Animated Skill Bar Fill */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Soft Skills Bento Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="soft-skills-grid">
              {PORTFOLIO_DATA.softSkills.map((softSkill, softIdx) => (
                <motion.div
                  key={softSkill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: softIdx * 0.04 }}
                  className="p-6 sleek-card sleek-card-hover group flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                    <h3 className="font-bold text-base tracking-tight group-hover:text-blue-400 transition-colors">
                      {softSkill.name}
                    </h3>
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {softSkill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
