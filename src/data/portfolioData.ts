export const portfolioData = {
  name: "Muhammed Patel",
  role: "Computer Science Student",
  university: "Memorial University of Newfoundland",
  specialization: "Cybersecurity & Information Security",
  location: "St. John's, NL, Canada",
  
  about: `👋 Hey there! I'm Muhammed aka Mo, a passionate Computer Science student with a deep fascination for cybersecurity.

🎓 Currently pursuing my Bachelor's in Computer Science with a specialization in Cybersecurity and Information Security. I love the challenge of understanding how systems work and how to protect them from various threats.

🔒 My journey in cybersecurity started with curiosity about how hackers operate, which led me to learn ethical hacking, penetration testing, and security analysis. I believe that to protect systems effectively, you need to think like an attacker.

💻 When I'm not diving deep into security research or working on projects, you can find me:
   • Participating in CTF competitions
   • Contributing to open-source security tools  
   • Learning about the latest vulnerabilities and exploits
   • Building secure applications and systems

🌟 My goal is to become a cybersecurity professional who helps organizations stay one step ahead of threats while making the digital world a safer place for everyone.`,

  projects: [
  {
    name: "AI Shield — AI Security Firewall",
    description:
      "Production-ready AI security firewall that detects and blocks prompt injection and jailbreak attacks before requests reach LLMs. Uses multi-layer risk scoring and real-time verdict classification.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "SQLite",
      "Docker",
      "Railway",
      "Vercel"
    ],
    status: "Active Development",
    highlights: [
      "Detects 50+ malicious prompt patterns in real time",
      "Multi-layer risk scoring (Safe / Suspicious / Blocked)",
      "Live monitoring dashboard with secure AI proxying",
    ],
    github: "https://github.com/muhammedp07/AiShield"
  },
  {
    name: "Vulnerability Management System",
    description:
      "Automated vulnerability detection and management system aligned with NIST CSF, performing network scanning, service enumeration, and risk scoring.",
    tech: [
      "Python",
      "Nmap",
      "TCP/IP",
      "Socket Programming",
      "SQLite"
    ],
    status: "Completed",
    highlights: [
      "Automated vulnerability detection and reporting",
      "Custom Python scripts for service enumeration",
      "Historical trend analysis using stored scan data"
    ],
    github: "https://github.com/muhammedp07/vulnerability-management-system"
  },
  {
    name: "Phishing Link Scanner",
    description:
      "Web-based phishing detection tool that analyzes URLs using real-time threat intelligence to identify malicious links.",
    tech: [
      "Python",
      "Flask",
      "AWS EC2",
      "Nginx",
      "Gunicorn"
    ],
    status: "Completed",
    highlights: [
      "Real-time detection using Google Safe Browsing API",
      "Secure cloud deployment with SSL and reverse proxy",
      "Focus on cloud and web security best practices"
    ],
    github: "https://github.com/muhammedp07/plscanner"
  },
  {
    name: "Secure Web Applications (MSA Projects)",
    description:
      "Developed and maintained secure full-stack web applications with authentication, access control, and encrypted data handling for university organizations.",
    tech: [
      "React",
      "Node.js",
      "JavaScript",
      "Authentication",
      "Encryption"
    ],
    status: "Completed",
    highlights: [
      "Implemented secure authentication and access control",
      "Applied secure coding practices to prevent common web vulnerabilities"
    ]
  }
],

  skills: {
    "Security & Penetration Testing": [
      "Ethical Hacking",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Network Security",
      "Malware Analysis",
      "Digital Forensics",
      "Social Engineering"
    ],
    "Programming Languages": [
      "Python",
      "JavaScript/TypeScript",
      "Go",
      "C/C++",
      "Java",
      "Bash/Shell Scripting",
      "PowerShell",
      "SQL"
    ],
    "Security Tools": [
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "OWASP ZAP",
      "Kali Linux",
      "Nessus",
      "John the Ripper",
      "Hashcat",
      "Aircrack-ng"
    ],
    "Web Technologies": [
      "React/Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "REST APIs",
      "GraphQL",
      "WebSockets"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "Kubernetes",
      "Git/GitHub",
      "CI/CD Pipelines",
      "Linux Administration",
      "Nginx/Apache"
    ],
    "Databases": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite"
    ]
  },

  contact: {
    email: "mrpatel@mun.ca",
  },

  socials: {
    github: "https://github.com/muhammedp07",
    linkedin: "https://www.linkedin.com/in/muhammedpatel007/"
  }
};