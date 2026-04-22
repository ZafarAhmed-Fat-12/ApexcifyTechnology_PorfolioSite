import { Code2, Zap, Target, Layers, Briefcase, GraduationCap } from 'lucide-react';
import profileImage from '../assets/images/zafar2.jpeg';

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Apecify Technologies',
    period: '2026 - Present',
    description: 'Developed and maintained user interfaces using React and Tailwind CSS, ensuring responsive design and optimal performance.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'HZSoftware solutions',
    period: '2025 - 2026',
    description: 'Built responsive web interfaces and contributed to product development.',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Islamia University Bahawalpur',
    year: 'Continuing',
    details: 'Specialized in Web Development',
  },
  {
    degree: 'Intermediate in Science',
    school: 'Government Degree College Ranipur',
    year: '2023',
    details: 'Pre-Medical Group, Passing With 83%',
  },
];
export default function About() {


  return (
    <section id="about" className="py-5 md:py-8 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-20 space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
              Zafar Ahmed
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
              MERN Stack  Developer
            </h2>
            <div className="w-20 h-1 bg-teal-600 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-lg border-4 border-teal-100">
              <img
                src={profileImage}
                alt="Zafar Ahmed - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-400">About Me</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                As a MERN Stack Developer, I thrive on transforming complex problems into
                elegant, efficient digital solutions. While I enjoy crafting responsive UIs
                with React and Tailwind CSS, my core strength is in backend design—designing
                secure APIs and managing data with precision. My background in computer science
                fundamentals allows me to approach every project with a problem-solving mindset,
                ensuring that the applications I build are not just functional, but high-performing and scalable.
              </p>

            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-teal-600" size={32} />
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>

            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-teal-200 pb-6">

                <div className="absolute -left-3 top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>

                <h4 className="text-lg font-bold text-slate-400">{job.title}</h4>
                <p className="text-teal-600 font-semibold">{job.company}</p>
                <p className="text-sm text-slate-400 mb-2">{job.period}</p>
                <p className="text-slate-400 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>


          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-teal-600" size={32} />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-teal-200 pb-6">

                <div className="absolute -left-3 top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>

                <h4 className="text-lg font-bold text-slate-400">{edu.degree}</h4>
                <p className="text-teal-600 font-semibold">{edu.school}</p>
                <p className="text-sm text-slate-400 mb-2">{edu.year}</p>
                <p className="text-slate-400 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>



        <div className="space-y-12 mt-20">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-white">My Ambitions</h3>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              I am driven by the challenge of solving intricate problems through clean, optimized code.
              My goal is to master backend infrastructure and database management, ensuring that every
              application I build is powered by a secure and high-speed core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 ">

            <div className="p-8 border-2 bg-slate-900 border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                  <Code2 className="text-teal-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Clean & Optimized Code</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Writing efficient, maintainable code that solves complex problems with elegance and simplicity.
                  </p>
                </div>
              </div>
            </div>


            <div className="p-8 border-2 bg-slate-900 border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                  <Zap className="text-teal-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Backend Infrastructure</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Mastering server architecture, APIs, and system design to build powerful backend solutions.
                  </p>
                </div>
              </div>
            </div>


            <div className="p-8 border-2 bg-slate-900 border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                  <Target className="text-teal-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Database Management</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Designing secure, high-speed databases that ensure data integrity and optimal performance.
                  </p>
                </div>
              </div>
            </div>


            <div className="p-8 border-2 bg-slate-900 border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                  <Layers className="text-teal-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Secure & Fast Applications</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Building applications with security at the core and performance as a priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-20 p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold text-teal-600 text-lg mb-2">Clean Code</p>
              <p className="text-gray-700">Writing maintainable, readable, and efficient code that stands the test of time.</p>
            </div>
            <div>
              <p className="font-bold text-teal-600 text-lg mb-2">Performance</p>
              <p className="text-gray-700">Building fast, scalable applications that deliver exceptional user experiences.</p>
            </div>
            <div>
              <p className="font-bold text-teal-600 text-lg mb-2">Continuous Learning</p>
              <p className="text-gray-700">Staying updated with latest technologies and best practices in the industry.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
