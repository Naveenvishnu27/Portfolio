import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, ExternalLink, Github, Filter, ShieldAlert, CheckCircle, Terminal, Cpu, Cloud, FileText, X } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../types";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [filter, setFilter] = useState<"all" | "cloud" | "security">("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  
  // Interactive Simulator States
  const [vaultStep, setVaultStep] = useState(0); // 0=idle, 1=login simulated, 2=uploading, 3=success
  const [nidsPackets, setNidsPackets] = useState<{ id: number; proto: string; src: string; status: string; risk: "low" | "high" }[]>([]);
  const [isNidsScanning, setIsNidsScanning] = useState(false);

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const handleOpenSimulator = (project: Project) => {
    setActiveModalProject(project);
    setVaultStep(0);
    setNidsPackets([]);
    setIsNidsScanning(false);
  };

  // Run simulated cloud/NIDS processes
  const handleSimulateCloud = () => {
    setVaultStep(1);
    setTimeout(() => {
      setVaultStep(2);
      setTimeout(() => {
        setVaultStep(3);
      }, 1500);
    }, 1200);
  };

  const handleSimulateNids = () => {
    if (isNidsScanning) return;
    setIsNidsScanning(true);
    setNidsPackets([]);

    const mockPackets = [
      { id: 1, proto: "TCP", src: "192.168.1.45", status: "SYN packet received", risk: "low" as const },
      { id: 2, proto: "UDP", src: "10.0.0.8", status: "DNS Query resolved", risk: "low" as const },
      { id: 3, proto: "TCP", src: "185.220.101.4", status: "Sequential port scan detected", risk: "high" as const },
      { id: 4, proto: "ARP", src: "00:0c:29:3e:5a:12", status: "Duplicate IP mapped (ARP Poisoning)", risk: "high" as const },
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < mockPackets.length) {
        setNidsPackets((prev) => [...prev, mockPackets[current]]);
        current++;
      } else {
        clearInterval(interval);
        setIsNidsScanning(false);
      }
    }, 800);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <Code size={12} />
            <span>Featured Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-3xl sm:text-4xl tracking-tight"
          >
            Engineering Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <button
              id="filter-btn-all"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : darkMode
                  ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Filter size={14} />
              All Projects
            </button>
            <button
              id="filter-btn-cloud"
              onClick={() => setFilter("cloud")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                filter === "cloud"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : darkMode
                  ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cloud size={14} />
              Cloud Architecture
            </button>
            <button
              id="filter-btn-security"
              onClick={() => setFilter("security")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                filter === "security"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : darkMode
                  ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldAlert size={14} />
              Information Security
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 sleek-card sleek-card-hover group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient border glowing hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 pointer-events-none transition-all duration-500" />

              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.category === "cloud" ? (
                      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                        <Cloud size={18} />
                      </div>
                    ) : (
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                        <ShieldAlert size={18} />
                      </div>
                    )}
                    <span className={`text-xs font-mono uppercase tracking-widest ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      {project.category === "cloud" ? "Cloud / Serverless" : "Cybersecurity"}
                    </span>
                  </div>

                  <a
                    id={`project-github-link-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl border ${
                      darkMode ? "border-slate-800 bg-slate-900/60 hover:text-white" : "border-slate-200 bg-slate-50 hover:text-slate-900"
                    } transition-colors`}
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-lg font-mono ${
                        darkMode ? "bg-slate-900 text-slate-300 border border-slate-800" : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400">Key Features</h4>
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs">
                      <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                      <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interaction Row Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                <button
                  id={`project-sim-btn-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleOpenSimulator(project)}
                  className="flex-1 px-4 py-2.5 text-xs font-bold rounded-xl text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/10"
                >
                  <Cpu size={14} />
                  Run Live Sandbox Simulator
                </button>

                {project.docUrl && (
                  <button
                    onClick={() => handleOpenSimulator(project)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-xl border flex items-center justify-center gap-1.5 cursor-pointer ${
                      darkMode
                        ? "border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileText size={14} />
                    Documentation
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simulator Modal Box */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className={`w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col ${
                darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-950"
              }`}
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-blue-500" />
                  <span className="font-mono text-xs font-semibold text-blue-400">Sandbox.CloudEnv::Console</span>
                </div>
                <button
                  id="close-simulator-modal"
                  onClick={() => setActiveModalProject(null)}
                  className={`p-1.5 rounded-lg border ${
                    darkMode ? "border-slate-800 bg-slate-900 text-slate-400 hover:text-white" : "border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 flex-1 overflow-y-auto max-h-[70vh]">
                <h3 className="font-bold text-xl mb-2 tracking-tight">
                  Simulating: {activeModalProject.title}
                </h3>
                <p className={`text-xs mb-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Interactive sandbox simulating the secure execution layers, API callbacks, and trigger pipelines designed by Naveen.
                </p>

                {activeModalProject.category === "cloud" ? (
                  /* CLOUDVAULT SIMULATOR */
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-black p-4 text-xs font-mono text-cyan-400 space-y-1.5 shadow-inner">
                      <p className="text-slate-500">// AWS Cognito & IAM Authorized Sandbox</p>
                      <p>user@cognito-session:~$ initiate_vault_auth_flow</p>
                      {vaultStep >= 1 && <p className="text-emerald-400">[OK] JWT Authentication validated successfully via User Pool.</p>}
                      {vaultStep >= 1 && <p>user@cognito-session:~$ upload_file --src ~/local/academic_record.pdf</p>}
                      {vaultStep >= 2 && <p className="text-amber-400">[*] Uploading: [███████████████] 100% (2.4 MB)</p>}
                      {vaultStep >= 2 && <p className="text-blue-400">[*] S3 event trigger initiated. Calling Lambda function: arn:aws:lambda:us-east-1:fn-file-hasher</p>}
                      {vaultStep >= 3 && <p className="text-emerald-400">[SUCCESS] File hashed and stored. Metadata committed to DB. CloudWatch triggered.</p>}
                    </div>

                    <div className="flex justify-end pt-2">
                      {vaultStep < 3 ? (
                        <button
                          id="btn-trigger-cloud-sim"
                          onClick={handleSimulateCloud}
                          disabled={vaultStep > 0}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer flex items-center gap-1.5"
                        >
                          {vaultStep > 0 ? "Uploading & Invoking..." : "Simulate File Upload Flow"}
                        </button>
                      ) : (
                        <button
                          onClick={() => setVaultStep(0)}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                        >
                          Reset Sandbox
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* NIDS SIMULATOR */
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-black p-4 text-xs font-mono text-red-400 min-h-[160px] space-y-1.5 shadow-inner">
                      <p className="text-slate-500">// Python NIDS monitoring interface (Scapy Engine)</p>
                      <p>root@security-node:~$ python3 nids.py --interface wlan0</p>
                      {nidsPackets.map((pkt) => (
                        <p key={pkt.id} className={pkt.risk === "high" ? "text-red-500 font-semibold" : "text-slate-300"}>
                          [{pkt.proto}] {pkt.src} - {pkt.status} {pkt.risk === "high" ? "[ALERT: POTENTIAL THREAT]" : ""}
                        </p>
                      ))}
                      {isNidsScanning && <p className="text-yellow-400 animate-pulse">[+] Sniffing network interfaces actively...</p>}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        id="btn-trigger-nids-sim"
                        onClick={handleSimulateNids}
                        disabled={isNidsScanning}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer flex items-center gap-1.5"
                      >
                        {isNidsScanning ? "Sniffing Packets..." : "Start Network Packet Capture"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
