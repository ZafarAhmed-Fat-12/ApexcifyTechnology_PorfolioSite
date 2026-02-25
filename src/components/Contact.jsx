import React from "react";

export default function Contact() {
  const myEmail = "zafarahmedbaloch102@gmail.com";

  const myWhatsAppNumber = "923071244873";

  const emailLink = `mailto:${myEmail}`;

  const whatsappLink = `https://wa.me/${myWhatsAppNumber}`;

  return (
    <section id="contact" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-deep-blue">Get In Touch</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out to me.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={emailLink}
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-deep-blue transition duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fa-solid fa-envelope"></i>
            Send an Email
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
