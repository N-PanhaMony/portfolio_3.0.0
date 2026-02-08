import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import ContactMe from "./pages/ContactMe.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactMe />
      </Layout>
    </BrowserRouter>
  );
}
