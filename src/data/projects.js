
import subscriptionImage from "../assets/ProjectsImage/subscriptionTracker.png";
import EcommerceStrip from "../assets/ProjectsImage/E-commerce.png";
import blogApiImage from "../assets/ProjectsImage/Blog-api.png";
import habitChallengeImage from "../assets/ProjectsImage/habitChallenge-16x9-moreTopSpace.png";
import bookStoreImage from "../assets/ProjectsImage/bookstore-crop.png";

export const projectsData = [
  {
    name: "Subscription Tracker (Expensio)",
    status: "Completed",
    description:
      "A Subscription management application built with Next.js App Router and Firebase. Implements secure email/password authentication, real-time Firestore synchronization, and global state management via React Context. Includes dynamic subscription analytics such as total monthly cost, yearly projections, and category-based tracking. Designed with clean data flow architecture and scalable cloud integration.",
    image: subscriptionImage,
    technologies: [
      "Next.js",
      "React",
      "Firebase Auth",
      "Firestore",
      "Docker"
    ],
    liveUrl: "https://expensio-next-firebase.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/Expensio_next_firebase"
  },

  {
    name: "Khmer Temple Art Store",
    status: "Completed",
    description:
      "A full-stack e-commerce application built using Next.js App Router with secure Stripe Checkout integration. Features global cart state management, dynamic product rendering, server-side checkout session creation via API routes, and optimized image loading (low-resolution placeholders transitioning to high-resolution assets). Structured with modular components and production-ready environment configuration.",
    image: EcommerceStrip,
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Docker"
    ],
    liveUrl: "https://e-commerce-next-js-stripe.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/E_Commerce_Next.js_Stripe"
  },

  {
    name: "Express + Prisma Blog API",
    status: "Ongoing",
    description:
      "A modular RESTful API built with Express 5 and Prisma ORM connected to PostgreSQL. Implements JWT-based authentication, role-based authorization (Admin/User), structured MVC architecture, and request validation using Zod. Supports full CRUD operations for posts, tags, and comments, with environment-based configuration and scalable backend design.",
    image: blogApiImage,
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker"
    ],
    githubUrl: "https://github.com/N-PanhaMony/Express_prisma"
  },

  {
    name: "21-Day Habit Challenge",
    status: "Completed",
    description:
      "A responsive habit tracking application built with React and Vite. Features progressive day unlocking logic, editable task management, motivational content integration, and persistent client-side storage using localStorage. Designed with reusable components and structured UI state handling.",
    image: habitChallengeImage,
    technologies: [
      "React",
      "Vite"
    ],
    liveUrl: "https://atomic-habits-21days.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/ATOMIC_HABITS"
  },

  {
    name: "BookStore Search App",
    status: "Completed",
    description:
      "A dynamic book search application integrating the Google Books API. Implements debounced input handling, dynamic query requests, loading and error state management, and reusable component architecture. Focused on clean UI composition and efficient client-side API interaction.",
    image: bookStoreImage,
    technologies: [
      "React",
      "Vite"
    ],
    liveUrl: "https://bookstorev1-omega.vercel.app/",
    githubUrl: "https://github.com/N-PanhaMony/BookStore"
  }
];