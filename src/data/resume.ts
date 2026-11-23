export interface ExperienceItem {
  role: string
  organization: string
  organizationQualifier?: string
  organizationUrl?: string
  period: string
  location?: string
  bullets: string[]
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  url?: string
  urlLabel?: string
  featured?: boolean
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface LanguageItem {
  name: string
  level: string
}

export const profile = {
  name: 'Diana Qasemian',
  alternateName: 'Fatemeh',
  initials: 'DQ',
  title: 'Front-End Developer',
  coreStack: ['React', 'TypeScript', 'JavaScript'],
  summary:
    'Front-end developer with experience delivering several projects across a variety of tools and platforms, from client websites and landing pages to interactive web applications. Currently focused on React and TypeScript, with hands-on experience in UI development, state management, and app integration through JikJik.',
  email: 'ghasemian29fatemeh@gmail.com',
  phone: '+98 933 658 1969',
  phoneHref: 'tel:+989336581969',
  location: 'Kerman, Iran',
  githubUrl: 'https://github.com/DianaQasemian',
  githubHandle: 'github.com/DianaQasemian',
  linkedinUrl: 'https://www.linkedin.com/in/diana-qasemian-452440120/',
  linkedinProjectsUrl:
    'https://www.linkedin.com/in/diana-qasemian-452440120/details/projects/',
  resumeUrl: `${import.meta.env.BASE_URL}Diana-Qasemian-Resume.pdf`,
  avatarUrl: `${import.meta.env.BASE_URL}diana-avatar.png`,
} as const

export const experiences: ExperienceItem[] = [
  {
    role: 'Front-End Developer',
    organization: 'JikJik',
    organizationQualifier: 'Project Owner',
    organizationUrl: 'https://github.com/mirzaqasemi/jikjik-client',
    period: 'May 2026 – Present',
    bullets: [
      'Designed and implemented the complete messaging app front end with React and TypeScript, using Tailwind CSS and shadcn/ui for responsive UI development.',
      'Used TanStack Query for server-state management, React Router for navigation, and Matrix JS SDK for real-time communication.',
      'Developed authentication flows, direct and group messaging, and contact management, with local data persistence and error handling across app workflows.',
      'Integrated PWA support and Capacitor for Android packaging; used Vite for development and builds.',
    ],
  },
  {
    role: 'Website Design',
    organization: 'Freelance',
    period: 'Jan 2024 – Present',
    location: 'Remote',
    bullets: [
      'Designed and delivered responsive websites and landing pages using WordPress and Framer.',
      'Created custom UI/UX and extended website functionality with HTML, CSS, JavaScript, PHP, and AJAX.',
      'Managed client projects from design through deployment.',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    organization: 'Namira Software Corporation',
    organizationUrl:
      'https://www.linkedin.com/company/namira-software-corporation/',
    period: 'Nov 2023 – Dec 2023',
    location: 'Remote from Sari, Iran · Company based in British Columbia, Canada',
    bullets: [
      'Practiced React and developed familiarity with Shopify during a two-month internship.',
      'Contributed to QA through website testing, bug fixes, and optimization, gaining hands-on experience with WordPress.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'JikJik',
    description:
      'Direct and group messaging with group creation and contacts; an online web app, installable PWA, and Android APK built with Capacitor.',
    tags: ['React', 'TypeScript', 'Matrix JS SDK', 'PWA', 'Capacitor'],
    url: 'https://github.com/mirzaqasemi/jikjik-client',
    urlLabel: 'GitHub',
    featured: true,
  },
  {
    title: 'Parnian Gallery Store',
    description:
      'Built a WordPress store with cart and order management; resolved plugin and image issues in a separate test environment.',
    tags: ['WordPress', 'WooCommerce', 'HTML', 'CSS'],
    url: 'https://parniangaallery.com/',
    urlLabel: 'parniangaallery.com',
  },
  {
    title: 'Behtarina Kojast',
    description:
      'Designed a custom local business directory without a pre-built theme, with live PHP/AJAX search.',
    tags: ['WordPress', 'JavaScript', 'PHP'],
  },
  {
    title: 'Phototherapy Equipment Rental',
    description:
      'Delivered a custom responsive phototherapy services website with a rental request form; in active client use.',
    tags: ['WordPress', 'CSS', 'JavaScript'],
    url: 'https://zarditeb.com/',
    urlLabel: 'zarditeb.com',
  },
  {
    title: 'Yieldo · Framer Landing Page',
    description:
      'Designed and built a DeFi landing page in Framer, with product storytelling, feature sections, and calls to action.',
    tags: ['Framer'],
    url: 'https://yieldo.framer.website/',
    urlLabel: 'yieldo.framer.website',
  },
]

export const moreProjectsNote = {
  prefix: 'Also Roselia Beauty, TeacherMohsem Academy, Toprankdm Agency, and more',
  linkLabel: 'LinkedIn',
  url: profile.linkedinProjectsUrl,
} as const

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Technologies',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'React Router', 'TanStack Query', 'Matrix JS SDK'],
  },
  {
    category: 'Styling & UI',
    items: ['Tailwind CSS', 'shadcn/ui', 'Bootstrap'],
  },
  {
    category: 'Web Development',
    items: ['Responsive interfaces', 'AJAX'],
  },
  {
    category: 'App Setup & Builds',
    items: ['PWA configuration', 'Capacitor setup', 'APK builds'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Vite', 'Capacitor', 'WordPress', 'Framer', 'Shopify (basic)'],
  },
  {
    category: 'Academic Familiarity',
    items: ['Java', 'C', 'Python'],
  },
]

export const education = {
  degree: 'B.Sc. Computer Hardware Engineering',
  institution: 'Babol Noshirvani University of Technology',
  period: 'Sep 2017 – Dec 2021',
} as const

export const languages: LanguageItem[] = [
  { name: 'Persian', level: 'Native' },
  { name: 'English', level: 'Professional proficiency' },
]
