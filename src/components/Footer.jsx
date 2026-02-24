import React from "react";
const SocialLink = ({ href, label, iconClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
  >
    <i className={`${iconClass} text-3xl`}></i>
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/zafar-ahmed-baloch-a50a7a340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      iconClass: "devicon-linkedin-plain",
    },
    {
      name: "GitHub",
      href: "https://github.com/ZafarAhmed-Fat-12",
      iconClass: "devicon-github-original",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zafar73304?igsh=dWQ5aWI2YWx0YjIz",
      iconClass: "fa-brands fa-instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1AUtJ1iVYU/",
      iconClass: "fa-brands fa-facebook",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          {socialMedia.map((social) => (
            <SocialLink
              key={social.name}
              href={social.href}
              label={social.name}
              iconClass={social.iconClass}
            />
          ))}
        </div>
        <p className="text-sm">© {currentYear} Zafar. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
