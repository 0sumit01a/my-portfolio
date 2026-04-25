import { Award, BriefcaseBusiness, Github, Linkedin, Mail, MonitorSmartphone, ShoppingCart } from 'lucide-react';

export const profile = {
  name: 'Sumit Singh Bisht',
  role: 'Software Engineer | MERN Stack Developer',
  tagline: 'MERN stack developer building clean web apps.',
  intro:
    'Motivated BCA student specializing in MERN stack development, experienced in full-stack applications and ecommerce platforms with hands-on internship experience as a Software Development Engineer at a fintech startup.',
  resumeLabel: 'Resume',
  resumeHref: '#contact',
  location: 'Noida, India',
  availability: 'Open to frontend and MERN roles',
  email: 'sumitbishtxyt@gmail.com',
  education: 'BCA Student',
};

export const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sumitbishtxyt', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sumitbishtxyt', icon: Linkedin },
  { label: 'Email', href: 'mailto:sumitbishtxyt@gmail.com', icon: Mail },
];

export const highlights = [
  { label: 'Stack', value: 'React, Node, Express, MongoDB' },
  { label: 'Focus', value: 'Clean UI and REST APIs' },
];

export const projects = [
  {
    name: 'EdunexSys',
    type: 'Freelance Frontend Developer',
    icon: MonitorSmartphone,
    stack: ['React.js', 'Responsive Design', 'Component Architecture', 'UI/UX'],
    summary: 'Built responsive React components for an education platform.',
    links: [
      { label: 'Website', href: 'https://edunexsys.com' },
    ],
  },
  {
    name: 'E-Commerce Website',
    type: 'Personal Full-Stack Project',
    icon: ShoppingCart,
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    summary: 'Created a MERN ecommerce app with cart, auth, orders, and REST APIs.',
    links: [
      { label: 'Code', href: 'https://github.com/sumitbishtxyt' },
    ],
  },
];

export const buildingNow = {
  title: 'Experience and achievements.',
  featured: {
    name: 'Software Development Engineer Intern',
    company: 'Bluestock Fintech',
    period: 'Dec 2025 - Jan 2026',
    location: 'Remote',
    description: 'Completed a two-month SDE internship and worked on practical fintech development tasks.',
    bullets: [
      'Worked within a professional engineering team environment',
      'Practiced agile workflows and collaborative development',
      'Earned official completion certificate ID: BFSD190961',
    ],
  },
  learning: [
    'Internship Certificate - Software Development Engineer',
    'Certificate ID: BFSD190961',
    'Issued January 30, 2026 by Ganesh Karale, Founder & CEO',
  ],
};

export const about = {
  lead: 'I build responsive interfaces, REST APIs, and full-stack MERN apps.',
  secondary: 'Currently studying BCA and improving through real projects, freelance work, and internships.',
};

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Responsive Design', 'Component Architecture', 'UI/UX Principles'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful API Design'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose ODM'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'npm', 'Postman'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem-Solving', 'Client Communication', 'Team Collaboration', 'Attention to Detail'],
  },
];

export const contact = {
  email: 'sumitbishtxyt@gmail.com',
  message: 'Open to frontend, MERN, internship, and freelance opportunities.',
};

export const credentials = [
  {
    icon: BriefcaseBusiness,
    label: 'Internship',
    title: 'Software Development Engineer Intern',
    meta: 'Bluestock Fintech | Dec 2025 - Jan 2026 | Remote',
  },
  {
    icon: Award,
    label: 'Certificate',
    title: 'Software Development Engineer Internship Certificate',
    meta: 'Certificate ID: BFSD190961',
  },
];
