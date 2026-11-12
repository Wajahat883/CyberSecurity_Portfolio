/**
 * Central content source for the portfolio.
 *
 * Everything the site renders — bio, skills, certifications, projects, labs,
 * education, experience and contact details — is defined here so it can be
 * edited in one place without touching component code.
 *
 * Placeholders are intentionally marked. Add exact titles, dates and
 * verification links as they become available.
 */

import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Swords,
  Network,
  Terminal,
  Code2,
  Search,
  Siren,
  Bug,
  GraduationCap,
  Briefcase,
  FlaskConical,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Site / profile                                                             */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: 'Muhammad Wajahat',
  title: 'Cybersecurity Enthusiast | Blue Team & Web Application Security',
  location: 'Pakistan',
  // Placeholder — update with a monitored professional inbox.
  email: 'wajahat.security@example.com',
  github: 'https://github.com/Wajahat883',
  githubHandle: 'Wajahat883',
  linkedin: 'https://linkedin.com/in/muhammad-wajahat-8292092b7/',
  linkedinHandle: 'muhammad-wajahat',
  resumePath: '/resume/Muhammad-Wajahat-Resume.pdf',
  intro:
    'I am an aspiring cybersecurity professional focused on defensive security, threat hunting, security operations, and web application security. I combine structured learning with hands-on labs, security research, and practical projects to develop real-world cybersecurity skills.',
};

export const siteMeta = {
  title: 'Muhammad Wajahat — Cybersecurity Portfolio',
  shortTitle: 'Muhammad Wajahat',
  description:
    'Portfolio of Muhammad Wajahat — an aspiring cybersecurity professional focused on Blue Team operations, SOC & SIEM analysis, threat hunting, and web application security.',
  keywords: [
    'Muhammad Wajahat',
    'Cybersecurity',
    'Blue Team',
    'SOC Analyst',
    'SIEM',
    'Threat Hunting',
    'DFIR',
    'Web Application Security',
    'Penetration Testing',
    'Splunk',
    'Elastic',
    'MITRE ATT&CK',
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
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    'My path into cybersecurity started with a Computer Science foundation and a growing fascination with how systems are attacked, defended, and investigated. What began as curiosity about web application vulnerabilities has become a focused commitment to defensive security and security operations.',
    'Today I study the blue-team side of security in depth: building familiarity with SOC workflows, learning to analyze telemetry in SIEM platforms like Splunk and Elastic, investigating Windows event and Sysmon logs, and practicing structured threat hunting mapped to the MITRE ATT&CK framework. On the offensive side, I work through OWASP Top 10 issues and web application testing so I can understand attacker behavior well enough to defend against it.',
    'My professional background as a frontend developer gives me a practical understanding of how modern web applications are built — which directly informs how I approach their security. My long-term goal is to grow into Purple Team operations, where offensive and defensive perspectives meet.',
  ],
  focusAreas: [
    'Defensive security & SOC operations',
    'SIEM analysis & threat hunting',
    'Network security',
    'Web application penetration testing',
    'Security automation',
    'Purple Team operations (long-term goal)',
  ],
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type SkillLevel = 'Foundational' | 'Practicing' | 'Comfortable';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Defensive Security',
    icon: ShieldCheck,
    accent: 'cyan',
    skills: [
      { name: 'Splunk', level: 'Practicing' },
      { name: 'Elastic', level: 'Practicing' },
      { name: 'Sysmon', level: 'Practicing' },
      { name: 'Windows Event Logs', level: 'Practicing' },
      { name: 'SIEM Fundamentals', level: 'Comfortable' },
      { name: 'Threat Hunting', level: 'Foundational' },
      { name: 'MITRE ATT&CK Fundamentals', level: 'Foundational' },
    ],
  },
  {
    title: 'Offensive Security',
    icon: Swords,
    accent: 'blue',
    skills: [
      { name: 'Burp Suite', level: 'Practicing' },
      { name: 'Nmap', level: 'Practicing' },
      { name: 'Metasploit', level: 'Foundational' },
      { name: 'OWASP Top 10', level: 'Comfortable' },
      { name: 'Web App Security Testing', level: 'Practicing' },
      { name: 'Reconnaissance', level: 'Practicing' },
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    accent: 'sky',
    skills: [
      { name: 'TCP/IP', level: 'Comfortable' },
      { name: 'DNS', level: 'Comfortable' },
      { name: 'HTTP/HTTPS', level: 'Comfortable' },
      { name: 'Wireshark', level: 'Practicing' },
      { name: 'Network Fundamentals', level: 'Comfortable' },
    ],
  },
  {
    title: 'Operating Systems',
    icon: Terminal,
    accent: 'cyan',
    skills: [
      { name: 'Kali Linux', level: 'Practicing' },
      { name: 'Linux', level: 'Comfortable' },
      { name: 'Windows', level: 'Comfortable' },
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    accent: 'blue',
    skills: [
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'React', level: 'Comfortable' },
      { name: 'Next.js', level: 'Comfortable' },
      { name: 'Node.js', level: 'Practicing' },
      { name: 'MongoDB', level: 'Practicing' },
      { name: 'TypeScript', level: 'Practicing' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Certifications & training                                                  */
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
    title: 'eHunar Scholarship Program',
    issuer: 'eHunar',
    status: 'Completed',
    // credentialUrl: 'ADD_VERIFICATION_LINK',
  },
  {
    title: 'Certified Defensive Security Analyst (CDSA)',
    issuer: 'Hack The Box',
    status: 'In Progress',
    note: 'Currently learning — not yet certified.',
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = 'Security Tool' | 'Web App Security' | 'AI / Platform' | 'Defensive Labs';

export interface Project {
  title: string;
  category: ProjectCategory;
  type: 'Personal Project' | 'Training / Labs';
  description: string;
  highlights: string[];
  technologies: string[];
  icon: LucideIcon;
  // Links intentionally omitted until repos / deployments are public.
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Bug Finder Pro',
    category: 'Security Tool',
    type: 'Personal Project',
    description:
      'A cybersecurity-focused web tool for URL security scanning, vulnerability identification, AI-assisted finding triage, CVSS-based prioritization, and security report generation.',
    highlights: [
      'URL security scanning & vulnerability identification',
      'AI-assisted triage of findings',
      'CVSS-based risk prioritization',
      'Automated security report generation',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Docker', 'AI API'],
    icon: Bug,
  },
  {
    title: 'Tasklytics — Web App Security Assessment',
    category: 'Web App Security',
    type: 'Personal Project',
    description:
      'Authorized security testing of a SaaS application built with Next.js, API routes, MongoDB and JWT authentication — focused on finding and documenting real-world web application weaknesses.',
    highlights: [
      'Authentication & session security review',
      'API endpoint analysis',
      'HTTP request / response inspection',
      'JWT authentication analysis',
    ],
    technologies: ['Next.js', 'API Routes', 'MongoDB', 'JWT', 'Burp Suite'],
    icon: ShieldCheck,
  },
  {
    title: 'CyberLearn AI',
    category: 'AI / Platform',
    type: 'Personal Project',
    description:
      'An AI-powered cybersecurity learning platform concept that transforms technical learning materials into structured educational resources, diagrams and presentations.',
    highlights: [
      'Converts raw material into structured lessons',
      'Generates diagrams & presentations',
      'AI content pipeline via OpenRouter',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenRouter API'],
    icon: Code2,
  },
  {
    title: 'HTB Defensive Security Investigations',
    category: 'Defensive Labs',
    type: 'Training / Labs',
    description:
      'Hands-on defensive security learning on Hack The Box: investigating telemetry with Splunk and Elastic, analyzing Windows events, monitoring authentication, and hunting suspicious process activity.',
    highlights: [
      'Splunk & Elastic log analysis',
      'Windows event & authentication monitoring',
      'Suspicious process investigations',
      'Structured threat hunting',
    ],
    technologies: ['Splunk', 'Elastic', 'Windows Logs', 'Sysmon', 'MITRE ATT&CK'],
    icon: Search,
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Security Tool',
  'Web App Security',
  'AI / Platform',
  'Defensive Labs',
];

/* -------------------------------------------------------------------------- */
/* Hands-on labs                                                              */
/* -------------------------------------------------------------------------- */

export interface Lab {
  title: string;
  description: string;
  tags: string[];
}

export const labs: Lab[] = [
  {
    title: 'Splunk Search & Reporting',
    description: 'Writing SPL queries to search, correlate and report on security-relevant events.',
    tags: ['Splunk', 'SIEM'],
  },
  {
    title: 'Windows Event Log Analysis',
    description: 'Reading and interpreting Windows Security, System and Application logs for signs of compromise.',
    tags: ['Windows', 'Logs'],
  },
  {
    title: 'Sysmon Investigation',
    description: 'Using Sysmon telemetry to trace process creation, network connections and file activity.',
    tags: ['Sysmon', 'Endpoint'],
  },
  {
    title: 'Failed Login Investigations',
    description: 'Detecting brute-force and password-spraying patterns from authentication failure events.',
    tags: ['Auth', 'Detection'],
  },
  {
    title: 'Kerberos Authentication Analysis',
    description: 'Analyzing Kerberos ticket events to spot abnormal authentication behavior.',
    tags: ['Kerberos', 'AD'],
  },
  {
    title: 'Suspicious Process Execution',
    description: 'Investigating anomalous process chains and command-line activity on endpoints.',
    tags: ['Endpoint', 'Hunting'],
  },
  {
    title: 'Threat Hunting with Elastic',
    description: 'Building hunting queries and dashboards in Elastic to surface malicious activity.',
    tags: ['Elastic', 'Hunting'],
  },
  {
    title: 'Network Reconnaissance',
    description: 'Mapping hosts and services with Nmap and interpreting the results safely.',
    tags: ['Nmap', 'Recon'],
  },
  {
    title: 'Authorized Web Application Testing',
    description: 'Testing web apps for OWASP Top 10 issues using Burp Suite in authorized lab environments.',
    tags: ['Burp Suite', 'OWASP'],
  },
];

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'Virtual University of Pakistan',
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

export const experience = {
  role: 'Junior Frontend Developer',
  company: 'Comrex Private Limited',
  companyLocation: 'Islamabad, Pakistan',
  period: 'June 2024 – Present',
  icon: Briefcase,
  summary:
    'Building and maintaining modern web interfaces, which gives me a hands-on understanding of how web applications are architected — knowledge that directly supports my web application security work.',
  points: [
    'Develop responsive, component-based user interfaces for production web applications.',
    'Work with modern JavaScript frameworks and REST APIs across the frontend stack.',
    'Collaborate on application architecture, state management and performance.',
    'Apply secure-by-default frontend practices informed by OWASP web security principles.',
  ],
  note: 'This is a web development role — included to show transferable technical skills, not as cybersecurity employment.',
};

/* -------------------------------------------------------------------------- */
/* Icons re-exported for sections that need them inline                       */
/* -------------------------------------------------------------------------- */

export const sectionIcons = {
  labs: FlaskConical,
  soc: Siren,
};
