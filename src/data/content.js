// ─────────────────────────────────────────────────────────────────────────
// Central placeholder content. Inspired by the Selfown template, customized.
// TODO: Replace placeholder copy, links, and images with Nicole's real info.
// Images use picsum.photos with fixed seeds so they stay stable across reloads.
// For your own photo, put the file in public/ and reference it directly (see portrait).
// ─────────────────────────────────────────────────────────────────────────

const img = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const profile = {
  name: 'Nicole Bernardo',
  firstName: 'Nicole',
  // Roles cycled by the hero typewriter ("I'm a freelance …")
  roles: ['Software Engineer', 'Web Developer', 'Problem Solver'],
  intro:
    'Passionate software engineer with a knack for turning ideas into functional, user-friendly web applications, and a growing curiosity for exploring how AI can shape the way we build.',
  location: 'San Francisco, CA',
  email: 'nicolebernardo96@gmail.com',
  portrait: '/nicole-photo.JPG',
  resumeUrl: '/resume.pdf',
}

// Animated counters in the About section
export const stats = [
  { value: 6, suffix: '+', label: 'Years experience' },
  { value: 80, suffix: '+', label: 'Projects completed' },
  { value: 40, suffix: '+', label: 'Happy clients' },
  { value: 12, suffix: '', label: 'Awards won' },
]

// About-section short bio bullets
export const skills = [
  'React & Next.js',
  'TypeScript & JavaScript',
  'Python & Django',
  'AI tools (Claude, Cursor)',
  'GraphQL & REST APIs',
  'PostgreSQL & MySQL',
]

// What I Do — `icon` maps to a lucide-react icon name (see WhatIDo.jsx)
export const whatIDo = [
  {
    icon: 'Code2',
    title: 'Frontend Development',
    desc: 'Responsive, user-friendly interfaces with React, TypeScript, and GraphQL.',
  },
  {
    icon: 'Server',
    title: 'Backend & APIs',
    desc: 'REST and GraphQL APIs built with Python and Django to power the frontend.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end features that connect modern frontends to reliable backend data.',
  },
  {
    icon: 'FlaskConical',
    title: 'Testing & Quality',
    desc: 'Confident releases backed by Cypress and Jest coverage on new features.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Development',
    desc: 'Using tools like Claude and Cursor to build faster and retain app context.',
  },
  {
    icon: 'RefreshCw',
    title: 'Legacy Modernization',
    desc: 'Migrating older apps to React and shared component libraries, piece by piece.',
  },
]

// Resume / timeline
export const experience = [
  {
    period: 'Jul 2025 — Present',
    role: 'Software Engineer II',
    org: 'First American',
    desc: 'Leveraging AI tools such as Claude and Cursor to modernize a legacy application into React, while developing Claude skills that preserve application context throughout the migration.',
  },
  {
    period: 'Apr 2023 — Jul 2025',
    role: 'Software Engineer',
    org: 'Endpoint',
    desc: 'Delivered frontend features in React, TypeScript, and GraphQL within a collaborative team, reinforced by Cypress and Jest test coverage to ensure reliable, maintainable releases.',
  },
  {
    period: 'Mar 2022 — Mar 2023',
    role: 'Full Stack Software Engineer',
    org: 'Apple',
    desc: 'Engineered internal scheduling calendar features across React and Django, extended the React QueryBuilder library to support complex user-driven queries, and built and tested Django API endpoints powering seamless frontend–backend interaction.',
  },
  {
    period: 'May 2021 — Dec 2021',
    role: 'Junior Software Developer',
    org: 'Cloud Peak Law',
    desc: 'Developed a custom email editor enabling admins to craft personalized lead outreach using Python, Django, HTML, CSS, and JavaScript, and contributed to redesigning a dynamic order form with Vue and supporting Django endpoints.',
  },
  {
    period: 'Sep 2020 — Dec 2020',
    role: 'Software Engineer Intern',
    org: 'Sunshine Life & Health Advisors',
    desc: 'Translated Figma designs into full-stack web applications using React, Semantic UI, Django, and PostgreSQL.',
  },
]

export const education = [
  {
    period: 'Aug 2014 — May 2020',
    role: "Bachelor's in Computer Science",
    org: 'San Francisco State University',
    desc: 'Studied computer science with a focus on software engineering and web development.',
  },
]

// Project filter categories (the `key` matches each project's `category`)
export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Apps' },
  { key: 'design', label: 'UI / Design' },
]

export const projects = [
  {
    title: 'Nicole Portfolio',
    category: 'web',
    tag: 'Web App',
    image: '/nicole-portfolio.png',
    desc: 'My most recent portfolio, built with the help of AI tools like Claude and Cursor.',
    link: 'https://github.com/nbernardo96/nicole-portfolio',
  },
  {
    title: 'SunPunch',
    category: 'web',
    tag: 'Web App',
    image: '/sunpunch-app.png',
    desc: 'A clock-in website for tracking employees clocking in and out, built during the pandemic to support the transition to working from home.',
    link: 'https://github.com/nbernardo96/sunpunch/tree/main',
  },
  {
    title: 'My Spotify Profile',
    category: 'design',
    tag: 'UI / Design',
    image: '/my-spotify-profile.png',
    desc: "A side project using Spotify's API to pull a user's most listened-to tracks and assign them a Pokémon based on their music taste.",
    link: 'https://www.figma.com/design/UrTSSZ02zdFkpzsX7lVDz7/MySpotifyProfile?node-id=0-1&p=f&t=uaYbl2EMi7l2QomT-0',
  },
]

// Social links — `icon` maps to a key in ui/BrandIcon.jsx
export const socials = [
  { icon: 'Github', label: 'GitHub', url: 'https://github.com/nbernardo96' },
  { icon: 'Linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/nicole-bernardo/' },
]

// Navbar links
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
