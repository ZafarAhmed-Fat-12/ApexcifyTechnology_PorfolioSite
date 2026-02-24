import React from "react";
import profileImage from "../images/zafar2.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={profileImage}
              alt="A portrait of Zafar, the developer"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 text-lg text-white">
              Hello! I'm a passionate web developer with experience in creating
              modern and responsive web applications using technologies like
              React, Node.js, and Tailwind CSS. I love solving problems and
              building beautiful, user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
