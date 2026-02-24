import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
