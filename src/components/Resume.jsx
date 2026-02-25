import React from "react";

export default function Resume() {
  const oneDriveDownloadUrl =
    "https://1drv.ms/b/c/c446764d87ad6c75/IQBWwHaw_ghmQ75QGAEs9UFrAZjoGrON5fDANnc3g_AO_60?e=EFvxoT"; // <--- PASTE YOUR LINK HERE

  return (
    <section id="resume" className="py-20 bg-creme overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-deep-blue">My Resume</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          For a more detailed look at my work experience, education, and skills,
          please download my full CV.
        </p>

        <a
          href={oneDriveDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-deep-blue transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
