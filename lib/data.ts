/**
 * Central content source for the portfolio.
 *
 * Everything the site renders — bio, skills, certifications, projects, labs,
 * education, experience and contact details — is defined here so it can be
 * edited in one place without touching component code.
 *
 * Placeholders are intentionally marked. Add exact titles, dates and
 * verification links as they become available. Nothing here is fabricated:
 * missing repos, URLs, dates and credentials are left empty on purpose.
 */

import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Swords,
  Network,
  Blend,
  Code2,
  Search,
  Siren,
  Bug,
  GraduationCap,
  FlaskConical,
  Trophy,
  Globe,
  Radar,
  ScanSearch,
  KeyRound,
  FileSearch,
  Activity,
  ShieldAlert,
  Target,
  Crosshair,
  Workflow,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Site / profile                                                             */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: 'Muhammad Wajahat',
  // Public-facing positioning (offensive + defensive + purple team).
  title: 'Cybersecurity Penetration Tester | Offensive & Defensive Security | Purple Teaming',
  // Two-line hero headline.
  headline: 'Cybersecurity Penetration Tester',
  subheadline: 'Offensive & Defensive Security · Purple Teaming',
  // Official employment title.
  officialTitle: 'Cybersecurity Penetration Tester',
  location: 'Pakistan',
  // Public contact inbox (also the default destination for the contact form).
  email: 'waji21569870@gmail.com' as string | null,
  github: 'https://github.com/Wajahat883',
  githubHandle: 'Wajahat883',
  linkedin: 'https://linkedin.com/in/muhammad-wajahat-8292092b7/',
  linkedinHandle: 'muhammad-wajahat',
  resumePath: '/resume/Muhammad-Wajahat-Cybersecurity-Resume.pdf',
  resumeDownloadName: 'Muhammad-Wajahat-Cybersecurity-Resume.pdf',
  photo: '/images/waji.jpeg',
  intro:
    'I am a cybersecurity professional working across offensive and defensive security, with a focus on penetration testing, vulnerability assessment, security monitoring, threat hunting, and security investigations. My approach combines understanding how systems are attacked with learning how to detect, investigate, and strengthen defenses.',
};

export const siteMeta = {
  title: 'Muhammad Wajahat — Cybersecurity Portfolio',
  shortTitle: 'Muhammad Wajahat',
  description:
    'Muhammad Wajahat — Cybersecurity Penetration Tester working across offensive and defensive security with a Purple Team approach: penetration testing, vulnerability assessment, API & web application security, SIEM, threat hunting and security investigations.',
  keywords: [
    'Muhammad Wajahat',
    'Cybersecurity',
    'Penetration Tester',
    'Penetration Testing',
    'Offensive Security',
    'Defensive Security',
    'Purple Team',
    'Red Team',
    'Blue Team',
    'Vulnerability Assessment',
    'Web Application Security',
    'API Security',
    'SOC',
    'SIEM',
    'Threat Hunting',
    'MITRE ATT&CK',
    'Adversary Emulation',
    'Detection Engineering',
    'Splunk',
    'Elastic',
    'Burp Suite',
  ],
};

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------------------- */
/* Hero terminal animation                                                    */
/* -------------------------------------------------------------------------- */

export const terminalLines: { prompt?: string; text: string; accent?: boolean }[] = [
  { prompt: '$', text: 'whoami', accent: true },
  { text: 'muhammad_wajahat — penetration tester' },
  { prompt: '$', text: 'cat approach.txt', accent: true },
  { text: 'offensive + defensive = purple team' },
  { prompt: '$', text: './assess --scope authorized', accent: true },
  { text: 'recon → exploit → detect → report' },
];

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: 'Bridging Offensive and Defensive Security',
  description:
    'A penetration tester who works both sides of security — thinking like an attacker and a defender to validate and improve real-world defenses.',
  paragraphs: [
    'My path into cybersecurity began on the build side. For around 1.5 years I worked as a frontend software developer at Comrex Private Limited, shipping production web applications and learning firsthand how modern systems are architected, deployed and broken.',
    'That development role has since ended, and I now work at Comrex as a Cybersecurity Penetration Tester. My work is dedicated entirely to security: authorized penetration testing, web application and API security assessment, vulnerability identification, and reporting with practical remediation guidance.',
    'I deliberately work across both sides of security. On the offensive side I test how systems break; on the defensive side I build practical skills in SIEM, threat hunting and security investigations using tools like Splunk, Elastic and Sysmon. Bringing the two together is the heart of a Purple Team approach — using real attacker techniques to validate detection and strengthen defenses.',
    'This is the professional identity I am building: a penetration tester who thinks like an adversary and a defender at the same time, maps techniques to MITRE ATT&CK, and turns offensive insight into measurable security improvement.',
  ],
  focusAreas: [
    'Penetration testing & vulnerability assessment',
    'Web application & API security',
    'SIEM, threat hunting & investigations',
    'Detection validation & adversary emulation',
    'MITRE ATT&CK technique mapping',
    'Purple Team approach to security improvement',
  ],
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type SkillLevel = 'Foundational' | 'Practicing' | 'Comfortable';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: { name: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Offensive Security',
    icon: Swords,
    description: 'Attacking systems under authorization to find and prove real weaknesses.',
    skills: [
      { name: 'Penetration Testing', level: 'Practicing' },
      { name: 'Web Application Security', level: 'Practicing' },
      { name: 'Burp Suite', level: 'Practicing' },
      { name: 'Nmap', level: 'Practicing' },
      { name: 'Metasploit', level: 'Foundational' },
      { name: 'OWASP Top 10', level: 'Comfortable' },
      { name: 'API Security', level: 'Practicing' },
      { name: 'Reconnaissance', level: 'Practicing' },
      { name: 'Vulnerability Assessment', level: 'Practicing' },
    ],
  },
  {
    title: 'Defensive Security',
    icon: ShieldCheck,
    description: 'Detecting, investigating and responding to malicious activity.',
    skills: [
      { name: 'SOC Operations', level: 'Foundational' },
      { name: 'SIEM', level: 'Practicing' },
      { name: 'Splunk', level: 'Practicing' },
      { name: 'Elastic', level: 'Practicing' },
      { name: 'Sysmon', level: 'Practicing' },
      { name: 'Windows Event Logs', level: 'Practicing' },
      { name: 'Threat Hunting', level: 'Foundational' },
      { name: 'MITRE ATT&CK', level: 'Foundational' },
      { name: 'Detection Engineering', level: 'Foundational' },
      { name: 'Incident Investigation', level: 'Foundational' },
    ],
  },
  {
    title: 'Purple Team Operations',
    icon: Blend,
    description:
      'Bridging offensive and defensive security through adversary emulation, detection validation, and security control improvement.',
    skills: [
      { name: 'MITRE ATT&CK Mapping', level: 'Foundational' },
      { name: 'Adversary Emulation', level: 'Foundational' },
      { name: 'Attack Simulation', level: 'Foundational' },
      { name: 'Detection Validation', level: 'Foundational' },
      { name: 'Detection Gap Analysis', level: 'Foundational' },
      { name: 'Security Control Validation', level: 'Foundational' },
      { name: 'Red / Blue Collaboration', level: 'Foundational' },
      { name: 'Threat Detection Improvement', level: 'Foundational' },
    ],
  },
  {
    title: 'Networking & Systems',
    icon: Network,
    description: 'The protocol and operating-system fundamentals underneath both sides.',
    skills: [
      { name: 'TCP/IP', level: 'Comfortable' },
      { name: 'DNS', level: 'Comfortable' },
      { name: 'HTTP/HTTPS', level: 'Comfortable' },
      { name: 'Wireshark', level: 'Practicing' },
      { name: 'Linux', level: 'Comfortable' },
      { name: 'Kali Linux', level: 'Practicing' },
      { name: 'Windows', level: 'Comfortable' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Certifications, training & awards                                          */
/* -------------------------------------------------------------------------- */

export interface Certification {
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  // Optional — add verification links / credential IDs when available.
  credentialUrl?: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    title: 'IBM Cybersecurity Certificate',
    issuer: 'IBM',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Introduction to Ethical Hacking Principles',
    issuer: 'Coursera',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Pentesting Principles',
    issuer: 'TryHackMe',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Introduction to Pentesting',
    issuer: 'TryHackMe',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Certified Defensive Security Analyst (CDSA)',
    issuer: 'Hack The Box',
    status: 'In Progress',
    note: 'Currently Learning — Not Yet Certified.',
  },
];

export interface Award {
  title: string;
  issuer: string;
  note?: string;
}

export const awards: Award[] = [
  {
    title: 'eHunar Scholarship Program',
    issuer: 'eHunar',
    note: 'Selected into the scholarship / training program.',
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory =
  | 'Offensive Security'
  | 'Defensive Security'
  | 'Purple Teaming'
  | 'Security Development';

export type ProjectStatus = 'In Development' | 'Completed' | 'Ongoing' | 'Concept';

export interface Project {
  title: string;
  category: ProjectCategory;
  type: 'Personal Project' | 'Training / Labs';
  status: ProjectStatus;
  overview: string;
  purpose: string;
  features: string[];
  methodology: string;
  technologies: string[];
  icon: LucideIcon;
  // Links intentionally omitted until repos / deployments are public.
  // Do NOT invent these — add the real URL when the repo / demo is available.
  repoUrl?: string;
  liveUrl?: string;
  // Cover visual. Real project asset where one exists; otherwise a clearly
  // labeled conceptual illustration (never a fabricated product screenshot).
  image?: string;
  imageFit?: 'cover' | 'contain';
  // true when `image` is a conceptual illustration rather than a real screenshot.
  imageIsConcept?: boolean;
  // Featured projects render large in the showcase.
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Bug Finder Pro',
    category: 'Security Development',
    type: 'Personal Project',
    status: 'In Development',
    overview:
      'A cybersecurity-focused web tool for URL security scanning, vulnerability identification, AI-assisted finding triage, CVSS-based prioritization and security report generation.',
    purpose:
      'Speed up security scanning and give findings consistent, risk-based prioritization.',
    features: [
      'URL & web application security scanning',
      'AI-assisted triage of findings',
      'CVSS-based risk prioritization',
      'Automated security report generation',
    ],
    methodology:
      'Findings are mapped to CVSS severity and OWASP categories so remediation can be prioritized by risk.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Docker', 'AI API'],
    icon: Bug,
    repoUrl: 'https://github.com/Wajahat883/Bug-Finder',
    image: '/images/projects/bug-finder.png',
    imageFit: 'cover',
    featured: true,
  },
  {
    title: 'Tasklytics — Web App Security Assessment',
    category: 'Offensive Security',
    type: 'Personal Project',
    status: 'Completed',
    overview:
      'An authorized security assessment of a SaaS task-management application built with Next.js, API routes, MongoDB and JWT authentication.',
    purpose:
      'Find and document real web application weaknesses through an authorized assessment.',
    features: [
      'Authorized end-to-end web app assessment',
      'API surface mapping & endpoint analysis',
      'JWT authentication & session review',
      'Documented findings with remediation notes',
    ],
    methodology:
      'Manual testing with Burp Suite against the OWASP Top 10, focused on authentication, session management and access control.',
    technologies: ['Next.js', 'API Routes', 'MongoDB', 'JWT', 'Burp Suite'],
    icon: ShieldCheck,
    image: '/images/projects/tasklytics.png',
    imageFit: 'cover',
    liveUrl: 'https://staging.tasklytics.ai/',
  },
  {
    title: 'CyberLearn AI',
    category: 'Security Development',
    type: 'Personal Project',
    status: 'Concept',
    overview:
      'An AI-powered learning platform concept that transforms dense technical material into structured educational resources, diagrams and presentations.',
    purpose:
      'Turn dense technical material into clear, structured learning content.',
    features: [
      'Transforms raw material into structured lessons',
      'Generates diagrams & presentations',
      'AI content pipeline via OpenRouter',
    ],
    methodology:
      'A prompt-engineered pipeline that structures source material into lessons, diagrams and slides.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenRouter API'],
    icon: Code2,
    repoUrl: 'https://github.com/Wajahat883/Cyber_Learn',
    image: '/images/projects/cyberlearn.png',
    imageFit: 'cover',
  },
  {
    title: 'HTB Defensive Security Investigations',
    category: 'Defensive Security',
    type: 'Training / Labs',
    status: 'Ongoing',
    overview:
      'Hands-on defensive security work on Hack The Box: investigating telemetry with Splunk and Elastic, analyzing Windows events, monitoring authentication and hunting suspicious process activity.',
    purpose:
      'Build hands-on detection and investigation skills against realistic telemetry.',
    features: [
      'Splunk & Elastic log analysis',
      'Windows event & authentication monitoring',
      'Suspicious process investigations',
      'MITRE ATT&CK technique mapping',
    ],
    methodology:
      'Analyst workflow: query telemetry, pivot on indicators, and map observed activity to MITRE ATT&CK.',
    technologies: ['Splunk', 'Elastic', 'Windows Logs', 'Sysmon', 'MITRE ATT&CK'],
    icon: Search,
    image: '/images/projects/htb-defensive.svg',
    imageFit: 'cover',
    imageIsConcept: true,
  },
];

// Status-based filters for the Projects section.
export const projectStatuses: ('All Projects' | ProjectStatus)[] = [
  'All Projects',
  'Completed',
  'In Development',
  'Ongoing',
  'Concept',
];

/* -------------------------------------------------------------------------- */
/* Hands-on labs                                                              */
/* -------------------------------------------------------------------------- */

export type LabCategory = 'Offensive Security' | 'Defensive Security' | 'Purple Team';
export type LabStatus = 'Completed' | 'In Progress';

export interface Lab {
  title: string;
  category: LabCategory;
  // Platform these were practiced on. CONFIRM / CORRECT these values.
  platform: string;
  status: LabStatus;
  tools: string[];
  objective: string;
  outcomes: string[];
  icon: LucideIcon;
  // Optional external write-up / proof link (e.g. a blog or HTB profile).
  detailsUrl?: string;
  // Real screenshot path when available; otherwise a branded cover is shown.
  image?: string;
}

export const labCategories: ('All' | LabCategory)[] = [
  'All',
  'Offensive Security',
  'Defensive Security',
  'Purple Team',
];

export const labs: Lab[] = [
  /* ---- Offensive Security (completed) ---- */
  {
    title: 'Web Application Penetration Testing',
    category: 'Offensive Security',
    platform: 'TryHackMe',
    status: 'Completed',
    tools: ['Burp Suite', 'OWASP ZAP'],
    objective: 'Test web applications for common vulnerabilities under authorization.',
    outcomes: ['Mapped and tested input-validation and auth flaws', 'Practised a manual testing workflow'],
    icon: Globe,
  },
  {
    title: 'Network Reconnaissance',
    category: 'Offensive Security',
    platform: 'TryHackMe',
    status: 'Completed',
    tools: ['Nmap', 'Wireshark'],
    objective: 'Enumerate hosts, ports and services to map an attack surface.',
    outcomes: ['Service and version enumeration', 'Basic traffic analysis'],
    icon: Radar,
  },
  {
    title: 'Vulnerability Assessment',
    category: 'Offensive Security',
    platform: 'TryHackMe',
    status: 'Completed',
    tools: ['Nmap', 'Burp Suite'],
    objective: 'Identify, validate and rate the severity of vulnerabilities.',
    outcomes: ['Separated real findings from false positives', 'Applied CVSS-based severity'],
    icon: ScanSearch,
  },
  {
    title: 'Authentication & API Security Testing',
    category: 'Offensive Security',
    platform: 'TryHackMe',
    status: 'Completed',
    tools: ['Burp Suite', 'Postman'],
    objective: 'Test authentication flows and API endpoints for weaknesses.',
    outcomes: ['JWT and session analysis', 'Broken access-control checks'],
    icon: KeyRound,
  },
  {
    title: 'OWASP Top 10 Practical Labs',
    category: 'Offensive Security',
    platform: 'TryHackMe',
    status: 'Completed',
    tools: ['Burp Suite'],
    objective: 'Work through the OWASP Top 10 categories hands-on.',
    outcomes: ['Practised injection, XSS and access-control issues'],
    icon: Bug,
  },

  /* ---- Defensive Security (completed) ---- */
  {
    title: 'SOC Investigations',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['SIEM'],
    objective: 'Triage alerts and investigate suspicious activity like a SOC analyst.',
    outcomes: ['Alert triage workflow', 'Structured evidence gathering'],
    icon: Siren,
  },
  {
    title: 'Splunk SIEM Queries',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['Splunk'],
    objective: 'Search and correlate security events with SPL.',
    outcomes: ['SPL querying', 'Event correlation across sources'],
    icon: Search,
  },
  {
    title: 'Windows Event Log Analysis',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['Windows Event Logs'],
    objective: 'Interpret Windows logs for signs of compromise.',
    outcomes: ['Logon and authentication event analysis'],
    icon: FileSearch,
  },
  {
    title: 'Sysmon Investigations',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['Sysmon'],
    objective: 'Trace process, network and file activity using Sysmon telemetry.',
    outcomes: ['Process-tree reconstruction', 'Indicator pivoting'],
    icon: Activity,
  },
  {
    title: 'Threat Hunting with Elastic',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['Elastic'],
    objective: 'Hunt for malicious activity using Elastic queries and dashboards.',
    outcomes: ['Hypothesis-driven hunting'],
    icon: Crosshair,
  },
  {
    title: 'Suspicious Process & Network Activity Analysis',
    category: 'Defensive Security',
    platform: 'Hack The Box',
    status: 'Completed',
    tools: ['Sysmon', 'Wireshark'],
    objective: 'Investigate anomalous process execution and network behaviour.',
    outcomes: ['Correlated process and network indicators'],
    icon: ShieldAlert,
  },

  /* ---- Purple Team / Security Validation (in progress) ---- */
  {
    title: 'MITRE ATT&CK Mapping',
    category: 'Purple Team',
    platform: 'Self-study',
    status: 'In Progress',
    tools: ['MITRE ATT&CK'],
    objective: 'Map observed techniques to ATT&CK tactics and techniques.',
    outcomes: ['Building technique-identification fluency'],
    icon: Target,
  },
  {
    title: 'Attack Simulation & Detection Validation',
    category: 'Purple Team',
    platform: 'Self-study',
    status: 'In Progress',
    tools: ['MITRE ATT&CK'],
    objective: 'Simulate techniques and confirm that detections fire.',
    outcomes: ['Learning to validate detection coverage'],
    icon: Swords,
  },
  {
    title: 'Detection Gap Analysis',
    category: 'Purple Team',
    platform: 'Self-study',
    status: 'In Progress',
    tools: ['MITRE ATT&CK'],
    objective: 'Find where detections are missing across the ATT&CK matrix.',
    outcomes: ['Identifying coverage gaps'],
    icon: Workflow,
  },
  {
    title: 'Security Control Validation',
    category: 'Purple Team',
    platform: 'Self-study',
    status: 'In Progress',
    tools: ['MITRE ATT&CK'],
    objective: 'Validate that controls detect or prevent known techniques.',
    outcomes: ['Testing control effectiveness'],
    icon: ShieldCheck,
  },
  {
    title: 'Red Team & Blue Team Investigation Workflows',
    category: 'Purple Team',
    platform: 'Self-study',
    status: 'In Progress',
    tools: ['MITRE ATT&CK'],
    objective: 'Connect offensive actions to the defensive investigation steps they trigger.',
    outcomes: ['Bridging offensive and defensive workflows'],
    icon: Blend,
  },
];

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'Virtual University of Pakistan',
  status: 'In Progress — 4 semesters completed',
  expectedGraduation: 'Expected graduation: 2028',
  icon: GraduationCap,
  coursework: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Web Engineering',
  ],
};

/* -------------------------------------------------------------------------- */
/* Professional experience                                                    */
/* -------------------------------------------------------------------------- */

export interface ExperienceRole {
  role: string;
  company: string;
  companyLocation: string;
  period: string;
  current: boolean;
  icon: LucideIcon;
  summary: string;
  points: string[];
}

// Most recent role first.
export const experiences: ExperienceRole[] = [
  {
    role: 'Cybersecurity Penetration Tester',
    company: 'Comrex Private Limited',
    companyLocation: 'Islamabad, Pakistan',
    period: '2025 – Present', // EDIT: set your exact start month/year
    current: true,
    icon: Swords,
    summary:
      'My current role, dedicated entirely to security. I perform authorized penetration testing and security assessments, and apply a Purple Team mindset — using attacker techniques to understand and improve defensive coverage.',
    points: [
      'Conduct authorized penetration tests on web applications and APIs.',
      'Perform web application and API security assessments and vulnerability identification.',
      'Assess authentication, session management and access-control weaknesses.',
      'Document findings with clear, prioritized remediation guidance for developers.',
    ],
  },
  {
    role: 'Software Developer (Frontend)',
    company: 'Comrex Private Limited',
    companyLocation: 'Islamabad, Pakistan',
    period: 'June 2024 – 2025', // EDIT: set the exact end month/year (~1.5 years)
    current: false,
    icon: Code2,
    summary:
      'Previous role — approximately 1.5 years building and maintaining production web interfaces. This gave me a hands-on understanding of how web applications are architected and deployed, which directly strengthens my security work today.',
    points: [
      'Built responsive, component-based user interfaces for production web applications.',
      'Worked with modern JavaScript frameworks and REST APIs across the frontend stack.',
      'Collaborated on application architecture, state management and performance.',
      'Applied secure-by-default frontend practices informed by OWASP web security principles.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Icons re-exported for sections that need them inline                       */
/* -------------------------------------------------------------------------- */

export const sectionIcons = {
  labs: FlaskConical,
  soc: Siren,
  award: Trophy,
};
