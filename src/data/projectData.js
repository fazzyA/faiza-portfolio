import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";

export const projects = [
  {
    title: "Organization App",
    description:
      "Full-stack app with CRUD features, board and list creation, user authentication, built with the MERN stack.",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Front-react-todo",
    category: "fullstack",
  },
  {
    title: "Urban Style E-commerce",
    description:
      "Functional e-commerce for clothing and accessories, with shopping cart, categories, and payment gateway developed in React.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    category: "fullstack",
  },
  {
    title: "Handcrafted Store",
    description:
      "Full-stack e-commerce to view, buy, and sell products, with login for users and sellers.",
    image:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    technologies: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    code: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    category: "fullstack",
  },
  {
    title: "Income-Expense Tracker",
    description:
      "App that performs CRUD operations to add, view, edit, and delete income and expenses.",
    image:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    technologies: ["React", "Context API"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    category: "frontend",
  },
  {
    title: "Weather App",
    description:
      "Application built with React that uses an API to display real-time weather.",
    image:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    technologies: ["React", "Context API", "Tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/app-clima",
    category: "frontend",
  },
  {
    title: "Legal Staff",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for law firms.",
    image: legalWeb.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/legal-staff",
    category: "frontend",
  },
  {
    title: "Medicare",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for healthcare providers.",
    image: mediCare.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    title: "AstroFit",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for fitness consulting.",
    image: astroFit.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    title: "100 Days Coding in JS",
    description: "100 projects built with HTML, CSS, and JavaScript.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    technologies: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    category: "frontend",
  },
  {
    title: "PlaniFy",
    description:
      "Web app to organize your projects, built with React + Vite, TypeScript, and Tailwind for styling.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    category: "frontend",
  },
  {
    title: "Verbenas Landscapes",
    description:
      "Static page developed with Astro and Tailwind as a challenge for a startup.",
    image: Verbenas.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    category: "frontend",
  },
  {
    title: "REST API",
    description:
      "RESTful API built with Express and MongoDB to manage tasks with CRUD operations, user registration, and JWT login.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    category: "backend",
  },
];
