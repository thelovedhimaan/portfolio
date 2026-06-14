import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Love",
  lastName: "Dhimaan",
  name: `Love Dhimaan`,
  role: "Senior Frontend Engineer",
  avatar: "/images/avatar.jpg",
  email: "thelovedhimaan@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on frontend engineering and web development</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thelovedhimaan",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thelovedhimaan",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/thelovedhimaan",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@thelovedhimaan",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable frontends that perform and scale</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Love, a Senior Frontend Engineer based in Gurugram, India. I specialize in building <br /> scalable SaaS applications with React.js, Next.js, and TypeScript.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Senior Frontend Engineer with 5+ years of experience designing and building scalable SaaS
        applications using React.js, Next.js, and Javascript. Proven expertise in frontend
        architecture, performance optimization, enterprise application development, and leading
        engineering initiatives in high-growth environments. Experienced in building large-scale
        dashboards, establishing reusable UI systems, and integrating AI-powered capabilities.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Manufapp",
        timeframe: "September 2021 – Present",
        role: "Senior Frontend Engineer / Frontend Lead",
        achievements: [
          <>
            Led frontend architecture and technical direction for a 35-member Agile team including
            18 engineers, defining scalable frontend standards and reusable component architecture.
          </>,
          <>
            Built high-performance dashboards handling 10K–50K+ records using virtualization and
            optimized rendering strategies.
          </>,
          <>
            Improved application load times by 30–45% using code splitting, lazy loading, API
            optimization, and Next.js optimizations.
          </>,
          <>
            Integrated AI-powered features and third-party AI APIs; implemented AI-assisted
            development practices using GitHub Copilot and Cursor AI to boost team productivity.
          </>,
          <>
            Architected enterprise-grade PDF generation and ZPL barcode printing systems with
            direct printer integration.
          </>,
          <>
            Developed onboarding automation tools reducing enterprise client onboarding time by
            ~60%.
          </>,
          <>
            Led migration from Material UI to Ant Design, improving UI consistency and reducing
            UI-related issues across the platform.
          </>,
        ],
        images: [],
      },
      {
        company: "Sauda Technologies",
        timeframe: "December 2020 – July 2021",
        role: "Frontend Engineer",
        achievements: [
          <>
            Built scalable React-based frontend applications using reusable and maintainable UI
            component systems.
          </>,
          <>
            Developed analytics dashboards that enabled stakeholders to monitor business metrics and
            user behavior effectively.
          </>,
          <>
            Optimized website performance, improving responsiveness and overall user experience
            through architectural improvements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Kurukshetra University",
        description: <>B.Sc. Information Technology, 2016 – 2020.</>,
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Frontend Development",
      description: (
        <>
          Building modern, high-performance web applications using React.js, Next.js, TypeScript,
          JavaScript, HTML5, and CSS3 with a focus on scalable and maintainable UI development.
        </>
      ),
      tags: [
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
      ],
      images: [],
    },
    {
      title: "Architecture & Performance Engineering",
      description: (
        <>
          Designing scalable frontend architectures with strong focus on performance optimization,
          virtualization, lazy loading, code splitting, and efficient rendering strategies for large-scale applications.
        </>
      ),
      tags: [
        { name: "Frontend Architecture", icon: "architecture" },
        { name: "Performance Optimization", icon: "performance" },
        { name: "Lazy Loading", icon: "lazy" },
        { name: "Code Splitting", icon: "code" },
      ],
      images: [],
    },
    {
      title: "State Management & API Integration",
      description: (
        <>
          Managing complex application state and integrating REST APIs with optimized data flow.
          Experience with React Query and AI API integrations for intelligent and dynamic applications.
        </>
      ),
      tags: [
        { name: "REST APIs", icon: "api" },
        { name: "React Query", icon: "reactquery" },
        { name: "State Management", icon: "state" },
        { name: "AI APIs", icon: "ai" },
      ],
      images: [],
    },
    {
      title: "Backend & Databases",
      description: (
        <>
          Developing backend services using Node.js and Express.js with experience in relational
          and NoSQL databases including PostgreSQL and MongoDB for scalable applications.
        </>
      ),
      tags: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
      ],
      images: [],
    },
    {
      title: "UI Libraries & Design Systems",
      description: (
        <>
          Working with modern UI frameworks and component libraries to build consistent,
          responsive, and accessible user interfaces.
        </>
      ),
      tags: [
        { name: "Ant Design", icon: "antd" },
        { name: "Material UI", icon: "mui" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
      images: [],
    },
    {
      title: "Tools & AI-Assisted Development",
      description: (
        <>
          Using modern development tools and AI-powered workflows to accelerate development,
          improve code quality, and enhance productivity in real-world projects.
        </>
      ),
      tags: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Figma", icon: "figma" },
        { name: "Google Analytics", icon: "analytics" },
        { name: "GTM", icon: "gtm" },
        { name: "Cursor AI", icon: "cursor" },
        { name: "GitHub Copilot", icon: "copilot" },
      ],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about frontend engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Frontend engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about,  work, gallery };
