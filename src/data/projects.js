
import blogApiImage from "../assets/ProjectsImage/Blog-api.png";
import habitChallengeImage from "../assets/ProjectsImage/habitChallenge-16x9-moreTopSpace.png";
import bookStoreImage from "../assets/ProjectsImage/bookstore-crop.png";

export const projectsData = [

  {
  name: "Express + Prisma Blog API",
  status: "Ongoing",
  description:
    "A production-ready RESTful API built with Express 5, Prisma ORM, and PostgreSQL. Implements JWT authentication, role-based authorization (ADMIN vs USER), Zod request validation, and full CRUD operations for Posts, Tags, and Comments. Deployed with environment-based configuration and migration automation.",
  image: blogApiImage,
  technologies: [
    "Node.js",
    "Express 5",
    "Prisma / PostgreSQL",
    "JWT",
    "Zod",
    "Render"
  ],
  // liveUrl: "https://express-prisma-z4x3.onrender.com",
  githubUrl: "https://github.com/N-PanhaMony/Express_prisma"
},

  {
    name: "21-Day Habit Challenge App",
    status: "Completed",
    description:
      "A task-based habit tracking application built with React and Vite. Features progressive day unlocking, editable daily tasks, motivational quotes, auto-save with localStorage persistence, and a fully responsive grid layout inspired by Atomic Habits principles.",
    image: habitChallengeImage,
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
    ],
    liveUrl: "https://atomic-habits-21days.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/ATOMIC_HABITS",
  },
  {
    name: "BookStore ",
    status: "Completed",
    description:
      "A responsive book search application that integrates with the Google Books API. Implements debounced search input, dynamic API queries, loading states, error handling, and clean reusable component architecture.",
    image: bookStoreImage,
    technologies: [
      "React",
      "Vite",
      "Google Books API",
      "JavaScript"
    ],
    liveUrl: "https://bookstorev1-omega.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/BookStore",
  },
  

];