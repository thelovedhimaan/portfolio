import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Love",
  lastName: "Dhimaan",
  name: `Love Dhimaan`,
  role: "Engineering Manager | Frontend Architect",
  avatar: "/images/avatar.jpg",
  email: "thelovedhimaan@gmail.com",
  location: "Gurugram/India",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on engineering leadership, frontend architecture, and AI-assisted development</>,
};

const social: Social = [
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
  title: `${person.name} — Engineering Manager | Frontend Architect`,
  description: `Portfolio of ${person.name}, an Engineering Manager and Frontend Architect building scalable enterprise software.`,
  headline: <>Building scalable products, engineering teams, and systems</>,
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
      I'm Love, an Engineering Manager and Frontend Architect based in Gurugram, India.
      I build scalable SaaS products, lead engineering teams, and stay hands-on with
      frontend architecture, performance, and AI-assisted development.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, Engineering Manager and Frontend Architect from ${person.location}`,

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
        Engineering Manager and technical leader with 5+ years of experience building
        and scaling enterprise SaaS applications, with deep expertise in frontend
        engineering and architecture and growing hands-on experience in backend and
        AI-powered development.
        <br /><br />
        Currently leading a 17-member engineering team across Frontend, Backend,
        Mobile, and AI, with responsibility for engineering execution, feature
        planning, architecture, quality, releases, and customer delivery. Remain
        hands-on with critical product modules while driving engineering standards,
        technical decisions, and AI-assisted development practices across the team.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",

    experiences: [
      {
        company: "ManufApp",
        timeframe: "April 2026 – Present",
        role: "Engineering Manager",
        achievements: [
          <>
            <strong>Team Leadership:</strong> Lead a 17-member engineering team across
            Frontend, Backend, Mobile, and AI, driving cross-functional engineering
            execution, delivery, and production readiness.
          </>,
          <>
            <strong>Sprint Management:</strong> Own sprint planning, feature breakdown,
            engineering allocation, execution tracking, testing coordination, and
            release delivery.
          </>,
          <>
            <strong>End-to-End Ownership:</strong> Own features from requirements
            clarification and technical design through development, testing, release,
            and production deployment.
          </>,
          <>
            <strong>Technical Architecture:</strong> Drive architecture and technical
            decisions across engineering initiatives, balancing scalability,
            maintainability, quality, product requirements, and delivery timelines.
          </>,
          <>
            <strong>Release & Deployment:</strong> Own EXE-based desktop tooling and
            releases, coordinating builds, validation, deployment, and updates across
            customer environments.
          </>,
          <>
            <strong>Customer Delivery:</strong> Work directly with enterprise customers
            on requirements, technical issues, deployments, production support, and
            feature planning.
          </>,
          <>
            <strong>Hands-On Development:</strong> Remain hands-on by independently
            owning and developing the Work Centre and Packaging modules, including
            architecture, feature development, tooling, and workflow improvements.
          </>,
          <>
            <strong>AI-Assisted Engineering:</strong> Use Claude AI and structured
            AI-assisted workflows to automate repetitive development tasks and achieve
            an estimated 3x increase in engineering productivity.
          </>,
        ],
        images: [],
      },

      {
        company: "ManufApp",
        timeframe: "September 2021 – March 2026",
        role: "Senior Frontend Engineer / Frontend Architect",
        achievements: [
          <>
            <strong>Architecture & Standards:</strong> Led frontend architecture and
            technical direction, defining scalable standards, reusable component
            architecture, and engineering workflows.
          </>,
          <>
            <strong>Performance Optimization:</strong> Architected and optimized
            high-performance dashboards handling 10K–50K+ records, achieving
            30–45% faster load and rendering performance through virtualization,
            code splitting, lazy loading, API optimization, and Next.js optimizations.
          </>,
          <>
            <strong>Enterprise Systems:</strong> Architected enterprise-grade PDF
            generation and ZPL barcode printing systems, including direct printer
            integration and customer-specific workflows.
          </>,
          <>
            <strong>Onboarding Automation:</strong> Developed onboarding automation
            tools that reduced enterprise client onboarding time by approximately 60%.
          </>,
          <>
            <strong>UI Modernization:</strong> Led the migration from Material UI to
            Ant Design, establishing a more consistent design system and reducing
            frontend UI issues across the product.
          </>,
          <>
            <strong>AI & Developer Experience:</strong> Established AI-assisted
            development practices using Claude AI and GitHub Copilot, introducing
            structured workflows that improved developer productivity and reduced
            development effort.
          </>,
          <>
            <strong>Mentorship & Collaboration:</strong> Hired and mentored frontend
            engineers, conducted architecture and code reviews, established development
            standards, and collaborated with backend teams to optimize REST APIs and
            frontend-backend data flows.
          </>,
          <>
            <strong>Customer Support:</strong> Worked directly with enterprise customers
            during onboarding, production deployments, technical investigations, and
            resolution of complex product issues.
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
            Built scalable React-based applications using reusable, maintainable UI
            components and modular frontend architecture.
          </>,
          <>
            Developed analytics dashboards that enabled stakeholders to monitor
            business metrics, operational data, and user behaviour.
          </>,
          <>
            Optimized frontend performance and responsiveness through architectural
            improvements, improving application speed and usability.
          </>,
          <>
            Designed reusable component patterns and frontend structures that improved
            maintainability and accelerated feature development.
          </>,
          <>
            Collaborated with product, backend, and cross-functional teams to translate
            business requirements into reliable, production-ready frontend solutions.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
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
            Building modern, high-performance web applications using React.js,
            Next.js, TypeScript, JavaScript, HTML5, and CSS3 with a focus on
            scalable and maintainable UI architecture.
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
        title: "Frontend Architecture & Performance",
        description: (
          <>
            Designing scalable frontend architectures and optimizing large-scale
            applications through virtualization, lazy loading, code splitting,
            efficient rendering, and API optimization.
          </>
        ),
        tags: [
          { name: "Frontend Architecture", icon: "architecture" },
          { name: "Performance Optimization", icon: "performance" },
          { name: "Virtualization", icon: "virtualization" },
          { name: "Lazy Loading", icon: "lazy" },
          { name: "Code Splitting", icon: "code" },
        ],
        images: [],
      },

      {
        title: "State Management & API Integration",
        description: (
          <>
            Managing complex application state and integrating REST APIs with
            optimized frontend-backend data flows. Experience with React Query
            and AI API integrations.
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
            Growing hands-on experience developing backend services using Node.js
            and Express.js, with relational and NoSQL databases including
            PostgreSQL and MongoDB.
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
            Building consistent and maintainable interfaces using modern UI
            libraries and design systems.
          </>
        ),
        tags: [
          { name: "Ant Design", icon: "antd" },
          { name: "Material UI", icon: "mui" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },

      {
        title: "AI & Developer Productivity",
        description: (
          <>
            Applying AI-assisted engineering workflows to accelerate development,
            automate repetitive tasks, improve developer productivity, and
            establish structured AI development practices.
          </>
        ),
        tags: [
          { name: "Claude AI", icon: "claude" },
          { name: "GitHub Copilot", icon: "copilot" },
          { name: "Cursor AI", icon: "cursor" },
          { name: "AI-Assisted Development", icon: "ai" },
          { name: "Prompt Engineering", icon: "prompt" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },

      {
        title: "Engineering Leadership",
        description: (
          <>
            Leading engineering teams through architecture, technical decisions,
            sprint management, feature planning, delivery, mentoring, hiring,
            releases, and customer-facing engineering initiatives.
          </>
        ),
        tags: [
          { name: "Engineering Management", icon: "management" },
          { name: "Team Leadership", icon: "team" },
          { name: "Sprint Management", icon: "sprint" },
          { name: "Technical Leadership", icon: "leadership" },
          { name: "System Architecture", icon: "architecture" },
          { name: "Mentoring", icon: "mentoring" },
          { name: "Hiring", icon: "hiring" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  title: "Blog",
  label: "Blog",
  description: "Engineering, frontend architecture, and AI-assisted development",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery };
