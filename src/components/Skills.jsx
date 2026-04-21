
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'MongoDB',],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Netlify', 'VS Code', 'GitHub'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Leadership'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 md:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl">
            A comprehensive overview of my technical skills and professional capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-teal-600 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
