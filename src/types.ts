export interface Skill {
  name: string;
  level: number; // percentage for animated progress bars (0-100)
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  docUrl?: string;
  category: "cloud" | "security" | "all";
}

export interface TimelineItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  score?: string;
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  period: string;
  gpaOrCgpa?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  iconName: string;
}

// Global data for Naveen Vishnu G
export const PORTFOLIO_DATA = {
  name: "Naveen Vishnu G",
  titles: ["Cloud Engineer", "AWS Developer", "Software Developer", "Cybersecurity Enthusiast"],
  tagline: "Building Secure Cloud Solutions • AWS Enthusiast • Java & Python Developer • Passionate about Cybersecurity",
  about: "I am an M.Sc. Computer Science student with a strong foundation in Cloud Computing, Information Security, and Software Development. I have practical experience designing secure serverless cloud applications using AWS services including Lambda, S3, API Gateway, Cognito, IAM, EC2, and CloudWatch. I enjoy solving complex technical problems, building scalable applications, and continuously learning modern technologies.",
  email: "naveenvishnu56719@gmail.com",
  phone: "+91 9080706050", // Standard placeholder if not specified, user email is in metadata
  linkedinUrl: "https://linkedin.com/in/naveen-vishnu-g", // Standard professional placeholder
  githubUrl: "https://github.com/naveenvishnug", // Standard professional placeholder
  
  skillCategories: [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "Amazon Web Services (AWS)", level: 90 },
        { name: "AWS S3", level: 92 },
        { name: "AWS Lambda", level: 88 },
        { name: "AWS API Gateway", level: 85 },
        { name: "AWS Cognito", level: 80 },
        { name: "AWS IAM", level: 88 },
        { name: "AWS EC2", level: 90 },
        { name: "AWS CloudWatch", level: 82 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 88 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Information Security",
      skills: [
        { name: "Network Security", level: 82 },
        { name: "Vulnerability Assessment", level: 80 },
        { name: "Cryptography Basics", level: 75 },
        { name: "CIA Triad", level: 90 },
        { name: "Identity & Access Management (IAM)", level: 88 }
      ]
    },
    {
      title: "Networking",
      skills: [
        { name: "TCP/IP & OSI Model", level: 85 },
        { name: "DNS & DHCP", level: 82 },
        { name: "HTTP/HTTPS", level: 90 },
        { name: "LAN/WAN", level: 80 },
        { name: "Firewall Concepts", level: 82 }
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", level: 90 },
        { name: "Ubuntu Linux", level: 85 },
        { name: "Command Line / Bash", level: 85 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Visual Studio Code", level: 92 },
        { name: "AWS Console & CLI", level: 85 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "REST APIs", level: 88 },
        { name: "Serverless Architecture", level: 85 },
        { name: "Cloud Security", level: 84 },
        { name: "SDLC", level: 80 },
        { name: "Object-Oriented Programming", level: 85 },
        { name: "Data Structures", level: 78 }
      ]
    }
  ] as SkillCategory[],

  softSkills: [
    { name: "Problem Solving", description: "Analytical mindset focused on breaking down complex problems and debugging system bottlenecks." },
    { name: "Critical Thinking", description: "Evaluating alternative architectures to optimize cloud latency, cost, and reliability." },
    { name: "Leadership", description: "Mentoring junior peers, taking ownership of project lifecycles, and driving positive changes." },
    { name: "Teamwork", description: "Thriving in collaborative environments to integrate backend microservices and secure networking." },
    { name: "Communication", description: "Articulating complex technical concepts, writing comprehensive docs, and presenting ideas clearly." },
    { name: "Adaptability", description: "Embracing emerging frameworks, cloud services, and security practices with curiosity." },
    { name: "Quick Learner", description: "Rapidly picking up new tools, SDKs, and methodologies to stay on the cutting edge of tech." },
    { name: "Analytical Thinking", description: "Decoding security alerts, analyzing raw packets, and designing secure, robust policies." },
    { name: "Time Management", description: "Executing milestones efficiently, balancing academic pursuits, labs, and personal development." },
    { name: "Decision Making", description: "Evaluating tradeoffs in security vs. usability to architect optimal authorization systems." },
    { name: "Presentation Skills", description: "Delivering engaging demos, detailing project milestones, and sharing knowledge within circles." },
    { name: "Technical Troubleshooting", description: "Diagnosing networking, operating system, and cloud resource permission bottlenecks." }
  ],

  projects: [
    {
      title: "CloudVault",
      techStack: ["AWS S3", "AWS Lambda", "AWS Cognito", "API Gateway", "Python"],
      description: "A secure serverless file storage and sharing platform featuring robust multi-tier authentication, cost-efficient resource provisioning, and real-time activity dashboards.",
      features: [
        "Secure Login with AWS Cognito Integration",
        "Encrypted File Upload & Secure S3 Buckets",
        "Presigned URLs for Secure File Download",
        "Role-Based Access Controls (IAM)",
        "Real-Time Cloud Monitoring using CloudWatch Logs"
      ],
      githubUrl: "https://github.com/naveenvishnug/CloudVault",
      liveUrl: "#", // Placeholder that stays client side and prompts interactive feedback
      category: "cloud"
    },
    {
      title: "Network Intrusion Detection System",
      techStack: ["Python", "Scapy", "Wireshark"],
      description: "A lightweight, Python-based security suite designed to actively monitor local network cards, capture live packets, analyze headers, and flag potential reconnaissance or spoofing threats.",
      features: [
        "Live Packet Capture & Stream Analysis",
        "ARP Spoofing Detection",
        "TCP Port Scan Fingerprinting",
        "Real-Time Terminal & Console Threat Alerts"
      ],
      githubUrl: "https://github.com/naveenvishnug/NIDS-Python",
      docUrl: "#", // Placeholder link
      category: "security"
    }
  ] as Project[],

  internships: [
    {
      role: "Cloud Computing Intern",
      organization: "AICTE AWS Academy",
      period: "May 2025 - July 2025",
      highlights: [
        "Hands-on architectural setup using Amazon EC2, VPCs, and Security Groups.",
        "Engineered secure, high-availability database connections using Amazon RDS.",
        "Implemented multi-tiered AWS architectures to isolate presentation, application, and storage layers.",
        "Successfully achieved an excellent assessment milestone score of 91/100."
      ],
      score: "91/100"
    }
  ] as TimelineItem[],

  experiences: [
    {
      role: "IT Help Desk Volunteer",
      organization: "College / Community IT Services",
      period: "2024 - Present",
      highlights: [
        "Provided frontline technical support, hardware troubleshooting, and configuration services.",
        "Guided custom Windows OS installations, device imaging, and custom Linux environments.",
        "Assisted in migrating local legacy accounts to cloud-based Microsoft 365 services.",
        "Resolved complex network troubleshooting tickets, diagnosing DHCP conflicts and DNS issues."
      ]
    }
  ] as TimelineItem[],

  education: [
    {
      degree: "M.Sc. Computer Science",
      specialization: "Cloud & Intelligent Systems",
      institution: "State University",
      period: "2025 - 2027"
    },
    {
      degree: "B.Sc. Computer Science",
      specialization: "Cloud Technology & Information Security",
      institution: "State College of Technology",
      period: "2022 - 2025",
      gpaOrCgpa: "7.8 / 10"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner Essentials",
      issuer: "AWS Academy / Amazon Web Services"
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "Oracle Academy / Corporate Training"
    },
    {
      title: "Microsoft Windows OS Basics",
      issuer: "Microsoft / Technology Partner"
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy"
    }
  ] as Certification[],

  achievements: [
    {
      title: "Smart India Hackathon Participant",
      description: "Collaborated in an intense 36-hour sprint to build cloud-based utility mapping systems.",
      iconName: "Zap"
    },
    {
      title: "Best Project Award",
      description: "Recognized during collegiate project showcase for building a secured network-packet analyzer.",
      iconName: "Award"
    },
    {
      title: "Cyber Security Club Active Member",
      description: "Led weekly captures (CTFs), conducted introductory Linux command line sessions, and network setups.",
      iconName: "ShieldAlert"
    },
    {
      title: "30+ Hours AWS Hands-on Labs",
      description: "Completed intensive lab cycles detailing multi-region VPC configurations, IAM federation, and serverless logic.",
      iconName: "Cloud"
    }
  ] as Achievement[],

  languages: [
    { name: "English", proficiency: "Professional Working" },
    { name: "Tamil", proficiency: "Native or Bilingual" },
    { name: "Hindi", proficiency: "Conversational" }
  ]
};
