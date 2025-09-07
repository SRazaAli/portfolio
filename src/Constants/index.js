const myProjects = [
  {
    id: 1,
    title: "Apple - Modern UI/UX clone",
    description:
      "A sleek and responsive Apple.com-inspired website clone that replicates Apple’s modern design aesthetics with interactive animations and a realistic 3D product showcase to deliver a premium user experience.",
    subDescription: [
      "Integrated GSAP and ScrollTrigger to implement smooth scroll-based animations and engaging UI transitions.",
      "Rendered a realistic 3D iPhone model using Three.js to enhance product visualization.",
      "Designed a fully responsive layout with Tailwind CSS, optimized for all devices.",
      "Utilized component-based structure for clean, reusable code and better scalability.",
    ],

    href: "https://srazaali.github.io/apple-website/",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/apple-website.jpg`,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: `${import.meta.env.BASE_URL}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "Three.js",
        path: `${import.meta.env.BASE_URL}assets/logos/three-js-icon.svg`,
      },
      {
        id: 3,
        name: "GSAP",
        path: `${import.meta.env.BASE_URL}assets/logos/gsap-greensock.svg`,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: `${import.meta.env.BASE_URL}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "Brainwave – Modern UI/UX website",
    description:
      "Brainwave is a high-impact, modern tech landing page designed to showcase the capabilities of an AI startup or digital SaaS product. ",
    subDescription: [
      "Developed a sleek AI-focused landing page to simulate a real-world SaaS product showcase.",
      "Implemented a fully responsive layout using React and Tailwind CSS.",
      "Crafted dynamic, scroll-based animations Framer Motion to create an engaging and interactive user experience.",
    ]
    ,
    href: "https://srazaali.github.io/brainwave-website/",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/brainwave-website.jpg`,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: `${import.meta.env.BASE_URL}assets/logos/react.svg`  },
      {
        id: 2,
        name: "Motion",
        path: `${import.meta.env.BASE_URL}assets/logos/framer-motion.svg`,
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: `${import.meta.env.BASE_URL}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "Yummy - Food Ordering Web App",
    description:
      "Developed a Full stack Food Ordering Web Application using Node.js and SQL server database.",
    subDescription: [
      "Built separate customer-facing and admin workflows: allowing menu browsing, order placement, and responsive order management.",
      "Managed menu items, categories, and orders with CRUD operations and a dynamic admin dashboard.",
      "Integrated payment processing , enhancing the real-world applicability of the platform."
    ]
    ,
    href: "https://github.com/SRazaAli/Food-Ordering-Management-System.git",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/food-ordering-mgmt-system.jpg`,
    tags: [
      {
        id: 1,
        name: "HTML",
        path: `${import.meta.env.BASE_URL}assets/logos/html5.svg`   },
      {
        id: 2,
        name: "CSS",
        path: `${import.meta.env.BASE_URL}assets/logos/css3.svg`
        },
      {
        id: 3,
        name: "Node.js",
        path: `${import.meta.env.BASE_URL}assets/logos/nodejs.svg`
         },
      {
        id: 4,
        name: "SQL Server",
        path: `${import.meta.env.BASE_URL}assets/logos/sql-server.svg`
      },

    ],
  },
  {
    id: 5,
    title: "Arbisoft - A UI/UX clone",
    description:
      "This project is a clean and modern recreation of Arbisoft’s official company website.",
    subDescription: [
      "Built interactive service sections to mirror real offerings.",
      "Incorporated client testimonials and industry credibility elements to simulate corporate trust and branding.",
      "Applied smooth scroll-triggered animations and hover effects to enrich user engagement.",
      "Optimized for pixel-perfect responsiveness across desktop and mobile screens."
    ]
    ,
    href: "https://srazaali.github.io/arbisoft-clone/",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/arbisoft.jpg`,
    tags: [
       {
        id: 1,
        name: "HTML",
        path: `${import.meta.env.BASE_URL}assets/logos/html5.svg`  },
      {
        id: 2,
        name: "CSS",
        path: `${import.meta.env.BASE_URL}assets/logos/css3.svg` },
      {
        id: 3,
        name: "Bootstrap",
        path: `${import.meta.env.BASE_URL}assets/logos/bootstrap.svg`
           },
    ],
  },
  {
    id: 4,
    title: "Wilson Sporting Goods - Ecommerce store",
    description:
      "An E-commerce sporting gear showcase platform, emphasizing product browsing, category navigation, and visual appeal.",
    subDescription: [
      "Features 3 different brands for user to navigate through their products.",
      "Detailed product pages where user can dive deep into product descriptions.",
      "User can download the specs sheets of the products.",
      "focused on creating a responsive design that works beautifully across all devices.",
    ],
    href: "https://srazaali.github.io/Wilson-Sporting-Goods/",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/wilson-sporting-goods.jpg`,
    tags: [
      {
        id: 1,
        name: "HTML",
        path: `${import.meta.env.BASE_URL}assets/logos/html5.svg`
    },
      {
        id: 2,
        name: "CSS",
        path: `${import.meta.env.BASE_URL}assets/logos/css3.svg`,
     },
      {
        id: 3,
        name: "Javascript",
        path: `${import.meta.env.BASE_URL}assets/logos/javascript.svg`
      },
    ],
  },  
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: `${import.meta.env.BASE_URL}assets/socials/whatsApp.svg`
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: `${import.meta.env.BASE_URL}assets/socials/instagram.svg`,
  },
];

export const experiences = [
  {
    title: "Diploma In Software Engineering (DISM)",
    job: "Aptech",
    date: "2021-2023",
  contents: [
    "Completed a comprehensive 2-year program covering full-stack software development through 4 progressive semesters.",
    "✅ Front-End Development: Learned HTML5, CSS3, JavaScript, Bootstrap and jQuery to build responsive and interactive user interfaces.",
    "✅ Back-End Development: Gained hands-on experience with Node.js, Express.js, and database integration using MySQL.",
    "✅ Full-Stack Projects: Combined front-end and back-end knowledge to create real-world applications and deploy working systems.",
    "✅ Learned the importance of software security, version control (Git), debugging, and testing throughout the development lifecycle."
  ],
}
,
   {
    title: "BSCS",
    job: "Bahria University Karachi Campus",
    date: "2023-Present",
    contents: [
    "Pursuing a 4-year undergraduate degree focused on core areas such as algorithms, data structures, databases, web development, and software engineering.",
    "Build a personal developer portfolio using Three.js, React, Vite, and WebAPI to showcase projects and technical expertise.",
    "Actively enrolled in external courses to supplement academic knowledge and gain certifications from Coursera and Udemy.",
    "Engaged in team-based academic projects that reflect real-world software development processes, including documentation, version control, and testing.",
    "Exploring areas like computer networks, compiler construction, and AI as part of the ongoing curriculum.",
  ],
  },
  {
    title: "Fullstack Developer Intern",
    job: "InternnCraft",
    date: "2024",
    contents: [
      "Built and deployed three full-stack web applications using React, Node.js, Express, and SQL.",
      "Worked with REST APIs, authentication systems, and real-time user interfaces.",
      "Collaborated with mentors to improve code quality and learned industry-standard practices.",
    ],
  },
 
];
export const reviews = [
  
  
  {
    name: "Developing Back-End Apps With Node.Js",
    username: "Credential ID CV769X42JPR2",
    body: "Coursera – IBM — Sep 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/ibm.png`,
  },
   {
    name: "Fullstack Developer Intern",
    username: "Certificate of Completion",
    body: "InternnCraft - Aug 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/internncraft.jpg`,
  },
  {
    name: "AI Fundamentals Bootcamp",
    username: "Certificate of Participation",
    body: "BUCIS – BUKC – Aug 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/bucis.jpg`,
  },
  
  {
    name: "Intro to MERN Stack Bootcamp",
    username: "Certificate of Participation",
    body: "BUCIS – BUKC – July 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/bucis.jpg`
  }
  ,
    {
    name: "Generative AI & LLM’s Workshop",
    username: "Certificate of Participation",
    body: "Connect AI – BUAIC – May 2025",
    img: `${import.meta.env.BASE_URL}assets/logos/buaic.jpg`,
  },
  {
    name: "Code in the Dark",
    username: "Certificate of Participation",
    body: "Supercomp’24 – BUKC – Dec 2024",
      img: `${import.meta.env.BASE_URL}assets/logos/bucis.jpg`
    }

  ,
  {
    name: " SQL: Introduction For Querying Databases",
    username: "Credential ID D1UBYQ83E3BM",
    body: "Coursera – IBM — Dec 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/ibm.png`
  },
  {
    name: "Speed Programming ",
    username: "Certificate of Participation",
    body: "Coders Clash – BUCIS – May 2024",
    img: `${import.meta.env.BASE_URL}assets/logos/bucis.jpg`,
  }
];

export default myProjects;