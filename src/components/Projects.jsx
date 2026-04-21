import React from "react";
import { Code2, ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, githubUrl, index }) => (
  <div className="group relative h-full">

    <div className="relative h-full bg-slate-900 rounded-2xl border border-slate-700 group-hover:border-teal-500 overflow-hidden shadow-2xl transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-teal-500/20">


      <div className="h-1.5 bg-teal-500"></div>


      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded-full border border-teal-500/40">
            Project {index + 1}
          </span>
          <div className="text-teal-400">
            <Code2 size={20} />
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 flex-1 flex flex-col">

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
          {title.replace(/^\d+\.\s+/, '')}
        </h3>


        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {description}
        </p>


        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-slate-700 text-teal-300 text-xs font-semibold rounded-lg border border-teal-500/30 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>


      <div className="px-6 py-4 bg-slate-800 border-t border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <span>View Project</span>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <ExternalLink size={18} />
          <span className="text-sm">Code</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const myProjects = [
    {
      title: "Portfolio Website",
      description:
        "A complete digital resume and project showcase with fully responsive and animated UI, dynamic project gallery with GitHub links, and smooth scrolling navigation.",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/HZSoftwareSolution_PorfolioSite",
    },
    {
      title: "Image Gallery",
      description:
        "Modern front-end image gallery integrating Pexels API with dynamic content, category filtering, responsive grid layout, and polished lightbox viewer.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/HZSoftwareSolutions_ImageGallery",
    },
    {
      title: "Random Password Generator",
      description:
        "React application for generating secure passwords with customizable options including length, character sets, uppercase, lowercase, numbers, and symbols.",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/random-password-generator",
    },
    {
      title: "Todo List App",
      description:
        "Responsive task management application with create, edit, delete, and mark complete features. Includes local storage integration for data persistence.",
      tech: ["React", "Tailwind CSS", "LocalStorage"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/todo-app",
    },
    {
      title: "Currency Converter",
      description:
        "Responsive currency conversion tool for travelers and businesses. Utilizes external API for real-time exchange rates supporting multiple currencies.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/currency-converter",
    },
    {
      title: "Calculator",
      description:
        "Modern mobile-styled calculator providing premium smartphone-like experience with real-time feedback and adaptive UI elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/calculator",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 overflow-hidden relative">

      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-teal-500/20 text-teal-300 text-sm font-bold rounded-full border border-teal-500/40">
              ✨ My Work
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Featured Projects
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work demonstrating full-stack development expertise.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>


        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Want to see more projects?</p>
          <a
            href="https://github.com/ZafarAhmed-Fat-12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ExternalLink size={20} />
            Visit GitHub Profile
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
