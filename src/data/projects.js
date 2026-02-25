import bookStoreImage from "../assets/ProjectsImage/bookstore-crop.png";
import habitChallengeImage from "../assets/ProjectsImage/habitChallenge-16x9-moreTopSpace.png";

export const projectsData = [
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
];