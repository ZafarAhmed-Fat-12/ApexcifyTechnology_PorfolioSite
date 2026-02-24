import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";

function App() {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "This very website, built using React and Tailwind CSS to showcase my skills and projects.",
    },
    {
      title: "E-commerce Store",
      description:
        "A fully functional online store with a shopping cart, product pages, and a checkout process.",
    },
    {
      title: "Task Management App",
      description:
        "A simple and intuitive app to manage daily tasks, built with React for the frontend.",
    },
  ];

  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects projects={projectData} />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
