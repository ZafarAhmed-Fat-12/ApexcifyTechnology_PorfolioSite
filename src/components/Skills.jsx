import React from "react";

const SkillItem = ({ name, iconClass }) => (
  <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <i className={`${iconClass} text-5xl mb-3`}></i>
    <h3 className="font-semibold ">{name}</h3>
    <p className="text-sm text-white"></p>
  </div>
);

export default function Skills() {
  const skillsData = [
    {
      name: "HTML5",
      iconClass: "devicon-html5-plain colored",
    },
    {
      name: "CSS3",
      iconClass: "devicon-css3-plain colored",
    },
    {
      name: "JavaScript",
      iconClass: "devicon-javascript-plain colored",
    },
    {
      name: "React",
      iconClass: "devicon-react-original colored",
    },
    {
      name: "Tailwind CSS",
      iconClass: "devicon-tailwindcss-plain colored",
    },
    {
      name: "Python",
      iconClass: "devicon-python-plain colored",
    },
    {
      name: "Git",
      iconClass: "devicon-git-plain colored",
    },
    {
      name: "C++",
      iconClass: "devicon-cplusplus-plain colored",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 ">
          {" "}
          Skills & Technologies
        </h2>

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
