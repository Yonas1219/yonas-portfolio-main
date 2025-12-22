import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  getnet,
  aastu,
  upwork,
  nexus,
  threejs,
  github,
  linkedin,
  telegram,
  twitter,
  instagram,
  shemach,
  cashgigs,
  glassfactory,
  recipe,
  recipe2,
  minabIcon,
  kena,
  sheger,
  plan,
  a2sv,
  splitbor,
  tarixchi,
} from "../assets";

export const socialLinks = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/yonas1219",
    bg: "#181717",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/yonas-enchalew-2a869822a/",
    bg: "#0077B5",
  },
  {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com/YonasYo1219",
    bg: "#1DA1F2",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/jann_19_19/?hl=en",
    bg: "#E1306C",
  },
  {
    id: "telegram",
    icon: telegram,
    link: "https://t.me/yonas1993",
    bg: "#0088CC",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile  Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / Machine Learning Engineer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue js",
    icon: vue,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Software Engineer",
    company_name: "Upwork Platform",
    website: "https://upwork.com/",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Oct 2025 – Present",
    points: [
      "Built scalable APIs and SaaS MVPs using Node.js, Express.js, Django, PostgreSQL, MongoDB, and Firebase, tailored to startup and SMB requirements.",
      "Built and deployed CashGigs.ca, a Canadian job listing platform, delivering production-ready backend services for job posting, search, and employer–candidate workflows.",
      "Designed and deployed cloud-native architectures on AWS (EC2, S3, RDS, Lambda) with Dockerized services for cost-efficient, scalable production environments.",
    ],
  },

  {
    title: "Software Engineer",
    company_name: "Nexus Technology",
    icon: nexus,
    website: "https://nexustechnologyet.com/",
    iconBg: "#E6DEDD",
    date: "Feb 2025 – Oct 2025",
    points: [
      "Engineered Django REST APIs for GlassFactory.info, connecting 200+ factories to brand owners, cutting response times by 35% while supporting 50K+ daily requests.",
      "Integrated AWS EC2, S3, RDS, and Lambda services to achieve 99.9% uptime and implement zero-downtime deployment releases for production systems.",
      "Automated CI/CD pipelines via GitHub Actions, eliminating 80% of manual deployments and doubling release frequency for faster development cycles.",
      "Developed Node.js + TypeScript backend for MaximumAccountability.net using Prisma ORM & MariaDB, reducing API latency by 40% and enabling real-time workforce tracking workflows.",
    ],
  },
  {
    title: "Certified AWS Solutions Architect",
    company_name: "ALX africa",
    icon: a2sv,
    website: "https://www.alxafrica.com/",
    iconBg: "#E6DEDD",
    date: "Sep 2023 – Oct 2024",

    points: [
      "Earned the AWS Certified Solutions Architect certification, which validates my ability to design and implement highly scalable, reliable, and cost-effective systems on the AWS platform.",
      "Earned the AWS Cloud Practitioner certificate, demonstrating foundational knowledge of AWS cloud services, solutions, and best practices for cloud architecture design.",
    ],
  },
  {
    title: "ML Engineer",
    company_name: "Dan Energies Ethiopia R&D",
    icon: minabIcon,
    website: "https://www.danenergyethiopia.com/",
    iconBg: "#E6DEDD",
    date: "Jul 2022 – Dec 2023",
    points: [
      "Designed and implemented TensorFlow-based AI models to predict JavaScript code snippets, reducing coding time by 20% and error rates by 15% for development teams.",
      "Optimized ML workflows and model training pipelines, boosting prototyping speed by 25% and improving efficiency for internal R&D projects and research initiatives.",
    ],
  },
];

const projects = [
  {
    name: "cashgigs.ca",
    description:
      "A comprehensive platform for finding gigs and jobs in Canada, connecting job seekers with opportunities across various industries and helping employers reach qualified candidates efficiently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: cashgigs,
    // source_code_link: "https://github.com/Yonas1219/store_it",
    web_link: "https://cashgigs.ca",
  },
  {
    name: "Glass Factory",
    description:
      "Connect with vetted factories worldwide and bring your fashion designs to life with confidence through a trusted network of verified manufacturing partners.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: glassfactory,
    // source_code_link: "https://github.com/Yonas1219/yc_directory",
    web_link: "https://www.glassfactory.info/",
  },

  {
    name: "Sheger Gebeta",
    description:
      "A culinary exploration platform where food enthusiasts can discover, share, and create delectable recipes on an intuitive and user-friendly interface designed for passionate cooks.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Pinia",
        color: "blue-text-gradient",
      },
    ],
    image: sheger,
    source_code_link: "",
    web_link: "https://preview.shegergebeta.com/",
  },
  {
    name: "Plan international",
    description:
      "Empowers working and stay-at-home mothers by establishing home-based childcare services, enabling them to build their own businesses in a high-demand sector through flexible entrepreneurial opportunities.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
	  {
        name: "AWS",
        color: "blue-text-gradient",
      },

    ],
    image: plan,
    source_code_link: "",
    web_link: "https://staging.uymp.org/",
  },

  {
    name: "Tarixchi - Your Gateway to Unlock Uzbekistan's Hidden History",
    description:
      "A unique digital platform dedicated to unveiling the rich tapestry of Uzbekistan's history through historically meaningful documents, artifacts, and cultural narratives for global audiences.",
    tags: [
     
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "pink-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
    ],
    image: tarixchi,
    source_code_link: "",
    web_link: "https://tarixchi.vercel.app/",
  },
  //
  {
    name: "Shemach",
    description:
      "A modern ecommerce platform that enables users to browse, search, and order products seamlessly, with intuitive checkout processes and order tracking capabilities for a smooth shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: shemach,
    source_code_link: "https://github.com/Yonas1219/shemach-main",
    web_link: "https://shemach-612da.web.app/",
  },
];

export { services, technologies, experiences, projects };
