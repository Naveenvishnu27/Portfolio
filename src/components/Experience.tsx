import { motion } from "motion/react";
import { Briefcase, BookOpen, GraduationCap, Calendar, Award, Star, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            <Briefcase size={12} />
            <span>Career & Education</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-3xl sm:text-4xl tracking-tight"
          >
            Experience & Education
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Column 1: Experience & Internships */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <Briefcase size={20} />
              </div>
              <h3 className="font-sans font-bold text-2xl tracking-tight">Professional Experience</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-12">
              {/* Internship Item */}
              {PORTFOLIO_DATA.internships.map((intern, index) => (
                <motion.div
                  key={intern.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#05060f] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-6 sleek-card sleek-card-hover">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                      <Star size={10} />
                      <span>Internship</span>
                    </div>

                    <h4 className="font-sans font-bold text-lg sm:text-xl tracking-tight group-hover:text-blue-400 transition-colors">
                      {intern.role}
                    </h4>
                    
                    <p className={`text-sm font-medium mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {intern.organization}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-mono">
                      <Calendar size={12} />
                      <span>{intern.period}</span>
                    </div>

                    {/* Assessment score */}
                    {intern.score && (
                      <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 inline-flex items-center gap-2">
                        <Award size={16} className="text-purple-400" />
                        <span className="text-xs font-medium">Assessment Score: <b className="text-blue-400 font-bold">{intern.score}</b></span>
                      </div>
                    )}

                    <div className="mt-4 space-y-2">
                      {intern.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs leading-relaxed">
                          <CheckCircle size={12} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className={darkMode ? "text-slate-400" : "text-slate-600"}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Experience Item (IT Help Desk) */}
              {PORTFOLIO_DATA.experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#05060f] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-6 sleek-card sleek-card-hover">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
                      <Star size={10} />
                      <span>Volunteer</span>
                    </div>

                    <h4 className="font-sans font-bold text-lg sm:text-xl tracking-tight group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h4>
                    
                    <p className={`text-sm font-medium mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {exp.organization}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-mono">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>

                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs leading-relaxed">
                          <CheckCircle size={12} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className={darkMode ? "text-slate-400" : "text-slate-600"}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-sans font-bold text-2xl tracking-tight">Academic Education</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-12">
              {PORTFOLIO_DATA.education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#05060f] group-hover:scale-125 transition-transform" />

                  <div className="p-6 sleek-card sleek-card-hover">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono py-0.5 px-2 rounded-lg ${
                        edu.period.includes("Pursuing")
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      }`}>
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-sans font-bold text-lg sm:text-xl tracking-tight group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>

                    {edu.specialization && (
                      <p className={`text-xs mt-1 font-mono uppercase tracking-wider ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {edu.specialization}
                      </p>
                    )}

                    <p className={`text-sm mt-3 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {edu.institution}
                    </p>

                    {edu.gpaOrCgpa && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                        <span className="text-xs text-slate-500">CGPA Achieved</span>
                        <span className="text-sm font-bold font-mono text-cyan-400">{edu.gpaOrCgpa}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
