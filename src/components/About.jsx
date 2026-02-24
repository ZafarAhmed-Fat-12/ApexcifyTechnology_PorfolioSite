import React from "react";
import profileImage from "../images/zafar2.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-amber-500 text-white">
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

          <div className="md:w-2/3 text-left">
            <p className="text-white text-lg">
              Hello! I'm a passionate web developer with experience in creating
              modern and responsive web applications using technologies like
              React, Next.js, and Tailwind CSS. I love solving problems and
              building beautiful, user-friendly interfaces.
            </p>
            <p className="text-white text-lg mt-4">
              My goal is to build seamless and engaging user interfaces from
              concept to deployment, with a focus on writing clean and efficient
              code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
