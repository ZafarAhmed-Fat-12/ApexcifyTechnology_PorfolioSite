import React from "react";

const SkillItem = ({ name, level, iconClass }) => (
  <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <i className={`${iconClass} text-5xl mb-3`}></i>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-sm text-gray-600">{level}</p>
  </div>
);

export default function Skills() {
  const skillsData = [
    {
      name: "HTML5",
      level: "Advanced",
      iconClass: "devicon-html5-plain colored",
    },
    {
      name: "CSS3",
      level: "Advanced",
      iconClass: "devicon-css3-plain colored",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      iconClass: "devicon-javascript-plain colored",
    },
    {
      name: "React",
      level: "Intermediate",
      iconClass: "devicon-react-original colored",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      iconClass: "devicon-tailwindcss-plain colored",
    },
    {
      name: "Next.js",
      level: "Beginner",
      iconClass: "devicon-nextjs-original colored",
    },
    {
      name: "Git",
      level: "Intermediate",
      iconClass: "devicon-git-plain colored",
    },
    {
      name: "Figma",
      level: "Beginner",
      iconClass: "devicon-figma-plain colored",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              level={skill.level}
              iconClass={skill.iconClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
