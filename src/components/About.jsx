import React from 'react'

export default function About() {
  return (
 


    <section id="about" className="py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Hey! I'm Zafar Ahmed 
        <br />
          Frontend Developer</h1>
      <p className="max-w-2xl mx-auto text-gray-600">
        Hi, I'm Front-end Web Developer creating beautiful and functional websites.
       
      </p>

      <div className="relative w-4/5 h-72 mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://picsum.photos/800/300"
          alt="Random placeholder image"
          className="absolute w-full h-full object-cover animate-[fade_15s_infinite]"
        />
        <img
          src="https://picsum.photos/800/301"
          alt="Random placeholder image"
          className="absolute w-full h-full object-cover animate-[fade_15s_infinite] delay-[5s]"
        />
        <img
          src="https://picsum.photos/800/302"
          alt="Random placeholder image"
          className="absolute w-full h-full object-cover animate-[fade_15s_infinite] delay-[10s]"
        />
      </div>
    </section>
   );
}

