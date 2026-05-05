export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  highlights: string[];
    link?: string;
};

export const projects: Project[] = [
  {
    slug: "hennge-challenge",
    title: "Password Validation System",
blurb: "A form system with real-time validation and API integration.",
description:
  "Built a user creation form with real-time password validation based on multiple rules such as length, format, and character types. Integrated API handling with authentication and managed success and error responses.",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    highlights: [
      "Implemented dynamic validation UI with proper error handling",
      "Prevented unnecessary API calls on invalid input",
      "Focused on clean state management and user-friendly flow",
    ],
      link: "https://gist.github.com/nitinagrawal1",

  },
  {
    slug: "freelance-website",
    title: "Assignment Solutions Website",
blurb: "A responsive website built for a freelance project.",
description:
  "Developed a responsive website using React and Next.js with reusable components and form handling. Implemented validation and structured layout for smooth user interaction.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Built reusable UI components",
      "Handled form submissions and validation",
      "Created responsive layout for different devices",
    ],
     link: "https://assignment-solutions.vercel.app/",
  },
  {
    slug: "medical-tourism-world",
    title: "Medical Tourism World",
blurb: "Custom WordPress website with filtering and dynamic content.",
description:
  "Developed the website from scratch by converting Figma designs using Elementor and custom code. Built custom templates and implemented filtering features for better content management.",
    tech: ["WordPress", "PHP", "ACF", "Elementor"],
    highlights: [
      "Created custom hospital templates",
      "Implemented filtering for 150 plus surgeries",
      "Managed dynamic content using ACF",
    ],
      link: "https://medicaltourismworld.com/",
  },
  {
    slug: "bonanza-wealth",
    title: "Bonanza Wealth",
blurb: "Custom WordPress development for service-based pages.",
description:
  "Built multiple pages using Avada Builder with custom HTML and CSS. Integrated forms with external APIs and implemented features like OTP verification and dynamic content handling.",
    tech: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Integrated Contact Form with LeadSquared API",
      "Implemented OTP verification using custom scripts",
      "Created custom post types for blog sections",
    ],
     link: "https://bonanzawealth.com/",
  },
  {
    slug: "lucky-traders-portal",
    title: "Lucky Traders Portal",
blurb: "Backend system development using Laravel.",
description:
  "Worked on backend APIs for managing data and user operations. Implemented CRUD, validation, authentication, and handled structured data responses.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Worked on API development and validation",
      "Handled file uploads and JSON responses",
      "Implemented authentication and routing",
    ],
      link: "https://laxmayatechnologies.com/tradingportal/login",

  },
];

export type SkillGroup = {
  title: string;
  rotate: string;
  variant: "default" | "accent" | "blue" | "highlight";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    rotate: "rotate-1n",
    variant: "accent",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend and CMS",
    rotate: "rotate-1p",
    variant: "blue",
    skills: ["PHP", "Laravel", "WordPress"],
  },
  {
    title: "Databases and API Integration",
    rotate: "rotate-2n",
    variant: "highlight",
    skills: ["MySQL", "REST API", "LeadSquared API", "Twilio", "ConvertKit"],
  },
  {
    title: "Tools and Platforms",
    rotate: "rotate-1p",
    variant: "default",
    skills: [
      "GitHub",
      "ACF",
      "Elementor",
      "Avada",
      "WPBakery",
      "Vercel",
      "Netlify",
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  accent: "accent" | "blue";
};

export const experience: ExperienceItem[] = [
  {
    company: "Global Lancers",
    role: "PHP and WordPress Developer",
    location: "Jaipur, Rajasthan, India",
    period: "Dec 2024 to Nov 2025",
    accent: "accent",
bullets: [
  "Worked on WordPress projects including custom pages and layouts",
  "Integrated forms with external APIs and handled OTP functionality",
  "Managed dynamic content using custom post types and ACF",
  "Worked on responsive design and website improvements",
],
  },
  {
    company: "Laxmaya Technologies Pvt Ltd",
    role: "Laravel and PHP Developer Intern",
    location: "Jaipur, Rajasthan, India",
    period: "Mar 2024 to Jun 2024",
    accent: "blue",
bullets: [
  "Worked on backend features using Laravel including CRUD and validation",
  "Developed APIs for handling application data",
  "Handled file uploads and structured data responses",
  "Learned authentication and backend workflow",
],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
  accent: "accent" | "blue" | "highlight";
};

export const education: EducationItem[] = [
  {
    school: "JECRC University",
    degree: "Master of Computer Applications",
    period: "2022 to 2024",
    detail: "Computer Applications",
    accent: "accent",
  },
  {
    school: "Parishkar College of Global Excellence",
    degree: "Bachelor of Computer Applications",
    period: "2019 to 2022",
    detail: "Computer Applications",
    accent: "blue",
  },
  {
    school: "S.B.I.O.A Public School",
    degree: "Class 12",
    period: "2018 to 2019",
    detail: "Commerece",
    accent: "highlight",
  },
  {
    school: "S.B.I.O.A Public School",
    degree: "Class 10",
    period: "2016 to 2017",
    detail: "All Subjects",
    accent: "accent",
  },
];
