import React from "react";

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Zafar Ahmed
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          A Passionate Front-end Web Developer
        </p>
        <a 
          href="#projects" 
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
