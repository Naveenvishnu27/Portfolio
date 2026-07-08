import { motion } from "motion/react";
import { Award, Shield, Cpu, Code, Cloud, Zap, ShieldAlert, Sparkles, Trophy } from "lucide-react";
import { PORTFOLIO_DATA } from "../types";

interface CertificationsAndAchievementsProps {
  darkMode: boolean;
}

export default function CertificationsAndAchievements({ darkMode }: CertificationsAndAchievementsProps) {
  // Map certification names to specific styled icons/colors
  const getCertStyling = (title: string) => {
    if (title.toLowerCase().includes("aws")) {
      return { icon: Cloud, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" };
    }
    if (title.toLowerCase().includes("java")) {
      return { icon: Code, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" };
    }
    if (title.toLowerCase().includes("windows")) {
      return { icon: Cpu, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" };
    }
    return { icon: Shield, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" };
  };

  // Map achievement icon names to Lucide icons
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap size={22} className="text-yellow-400" />;
      case "Award":
        return <Award size={22} className="text-purple-400" />;
      case "ShieldAlert":
        return <ShieldAlert size={22} className="text-emerald-400" />;
      case "Cloud":
        return <Cloud size={22} className="text-blue-400" />;
      default:
        return <Sparkles size={22} className="text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Section Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <Award size={20} />
              </div>
              <h3 className="font-sans font-bold text-2xl tracking-tight">Professional Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert, index) => {
                const styling = getCertStyling(cert.title);
                const IconComponent = styling.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-5 sleek-card sleek-card-hover flex items-start gap-4 hover:scale-[1.02] transition-all"
                  >
                    <div className={`p-3 rounded-xl border flex-shrink-0 ${styling.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-sm leading-tight tracking-tight">
                        {cert.title}
                      </h4>
                      <p className={`text-xs mt-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Achievements (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <Trophy size={20} />
              </div>
              <h3 className="font-sans font-bold text-2xl tracking-tight">Key Achievements</h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((ach, index) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-5 sleek-card sleek-card-hover flex items-center gap-4 transition-all"
                >
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    darkMode ? "bg-slate-900 border border-slate-800" : "bg-slate-50 border border-slate-100"
                  }`}>
                    {getAchievementIcon(ach.iconName)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight">{ach.title}</h4>
                    <p className={`text-xs mt-1 leading-normal ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {ach.description}
                    </p>
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
