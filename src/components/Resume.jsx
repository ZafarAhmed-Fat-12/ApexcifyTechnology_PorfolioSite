import React from "react";

export default function Resume() {
  const cvFileName = "My-Resume.pdf";

  return (
    <section id="resume" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4 text-gray-800">My Resume</h2>
        <p className="text-gray-900 text-lg max-w-2xl mx-auto mb-8">
          For a more detailed look at my work experience, education, and skills, please download my full CV.
        </p>
        
        <a
          href={`/${cvFileName}`}
          download
          
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-blue-700 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Download CV
        </a>
        
      </div>
    </section>
  );
}
