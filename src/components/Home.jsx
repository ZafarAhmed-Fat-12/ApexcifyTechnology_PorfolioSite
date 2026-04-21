import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-60">
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009689" />
                <stop offset="100%" stopColor="#00d4aa" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient )"
              d="M50.7,-70.4C63.4,-60.6,69.7,-42.6,75.4,-24.6C81.1,-6.6,86.1,11.5,82.1,27.7C78.2,43.8,65.4,58.1,50.2,68C35,78,17.5,83.8,1.2,82.1C-15.1,80.5,-30.3,71.5,-44.3,61.1C-58.3,50.8,-71.2,39.1,-78.9,23.7C-86.6,8.3,-89.1,-10.7,-82.5,-25.5C-75.8,-40.2,-60.1,-50.7,-44.9,-59.7C-29.6,-68.7,-14.8,-76.3,2.1,-79.2C19,-82.1,38,-80.3,50.7,-70.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>


      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="space-y-6">
          <h3 className="text-lg md:text-2xl lg:text-3xl text-teal-700 font-semibold uppercase tracking-wide">
            Welcome to my portfolio!
          </h3>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            Hi, I'm a Full Stack Developer
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-teal-600 hover:to-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-teal-600 text-teal-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-50 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

  );
}
