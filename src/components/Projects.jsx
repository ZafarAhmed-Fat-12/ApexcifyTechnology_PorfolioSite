import React from "react";
const ProjectCard = ({ title, description, tech, githubUrl }) => (
  <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-deep-blue">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span
            key={index}
            className="bg-sky-blue text-deep-blue text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gray-50 p-4 flex justify-end space-x-4">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="text-gray-600 hover:text-deep-blue transition-colors"
      >
        <i className="fa-brands fa-github text-2xl"></i>
      </a>
    </div>
  </div>
);

export default function Projects() {
  const myProjects = [
    {
      title: "1.  Portfolio Website",
      description:
        " A complete digital resume and project showcase, designed to provide a clean and engaging overview of my capabilities as a Web developer. Key features include a fully responsive and animated UI, a dynamic project gallery with links to GitHub repositories ",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/HZSoftwareSolution_PorfolioSite",
    },
    {
      title: "2. Image Gallery ",
      description:
        "A modern , front-end image gallery application that integrates directly with the pexels API for dynamic content. Features include on the-fly catagory filtering, a responsive grid layout,  a polished light box viewer, and also button icons for preview and next all built with pure HTML, CSS and JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/HZSoftwareSolutions_ImageGallery",
    },
    {
      title: "3. Random Password Generator",
      description:
        "A React  website for generating secure, random passwords with customizable options like length, character sets (uppercase, lowercase, numbers, symbols). Generates new passwords with every refresh. Built with a clean and intuitive UI.",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubUrl:
        "https://github.com/ZafarAhmed-Fat-12/random-password-generator",
    },
    {
      title: "4. Todo List App",
      description:
        "A responsive web application designed to help users manage daily tasks efficiently. Features include creating, editing, deleting, and marking tasks as complete with local storage integration for data persistence. Built with React and styled using Tailwind CSS for a clean and modern user interface.",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/todo-app",
    },
    {
      title: "5. currency converter",
      description:
        "A responsive web application that converts currency values between different countries using real-time exchange rates.",
      tech: ["CSS", "JavaScript", "API"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/currency-converter",
    },
    {
      title: "6. Calculator",
      description:
        " Modern Mobile-Styled Calculator, a web-based application designed to provide a premium smartphone-like experience on any device focuses on User Experience (UX) by integrating real-time feedback and adaptive UI elements typically found in high-end mobile operating systems",
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ZafarAhmed-Fat-12/calculator",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-creme overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-deep-blue">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
