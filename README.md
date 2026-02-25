# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# My Personal Portfolio Website

This is the source code for my personal portfolio website, built from scratch to showcase my skills, projects, and professional experience as a Frontend Developer. The entire project is built using a modern tech stack including React and Tailwind CSS, and it is fully responsive for all devices.

**Live Demo:** [your-portfolio-link.com](https://your-portfolio-link.com )

---

##  Features

-   **Fully Responsive Design:** Looks great on everything from mobile phones to widescreen desktops.
-   **6 Dynamic Components:** A clean and modular structure makes the codebase easy to manage and scale.
-   **Interactive UI:** Smooth scrolling, hover effects, and a mobile-friendly hamburger menu.
-   **Direct Contact Links:** Clickable links for Email and WhatsApp to make reaching out seamless.
-   **Project Showcase:** A dedicated section to display my work with direct links to GitHub repositories and live demos.
-   **Downloadable Resume:** A clear call-to-action for visitors to download my full CV.

---

##  Tech Stack

This project was built using the following technologies:

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A next-generation frontend tooling for a blazing fast development experience.
-   **Tailwind CSS:** A utility-first CSS framework for rapid, custom UI development.
-   **Devicon & Font Awesome:** For clean, professional icons for skills and social media links.
-   **Git & GitHub:** For version control and source code management.

---

##  Project Structure & Component Breakdown

The project is organized into logical components, each with a specific purpose. All reusable components are located in the `src/components/` directory.

### 1. `App.jsx` (The Core Conductor)

-   **Purpose:** This is the main component that assembles the entire application.
-   **Responsibilities:**
    -   Imports all other major components (`Header`, `Home`, `About`, etc.).
    -   Defines the overall layout and sequence of the sections.
    -   Manages global state or data that needs to be passed down to child components (like the `projectData` array).
    -   Includes the `overflow-x-hidden` class to prevent horizontal scrolling issues on mobile.

### 2. `Header.jsx` (Navigation)

-   **Purpose:** Provides consistent navigation throughout the site.
-   **Features:**
    -   A "sticky" header that stays at the top of the page on scroll (`sticky top-0 z-50`).
    -   A responsive hamburger menu for mobile devices, controlled by React's `useState` hook.
    -   Smooth-scrolling links that navigate to the corresponding sections of the single-page application.

### 3. `Home.jsx` (The Hero Section)

-   **Purpose:** The first thing a visitor sees. It's designed to make a strong first impression.
-   **Features:**
    -   A full-screen section (`h-screen`) that grabs the user's attention.
    -   A clear, professional title and a concise description of who I am and what I do.
    -   A primary "Call to Action" button that encourages visitors to view my work.

### 4. `About.jsx` (Personal Introduction)

-   **Purpose:** To give visitors a brief, personal introduction.
-   **Features:**
    -   A two-column layout on larger screens, featuring a profile picture and a descriptive text.
    -   The layout stacks vertically on mobile for better readability.
    -   The text is left-aligned for an optimal reading experience.

### 5. `Skills.jsx` (Technology Showcase)

-   **Purpose:** To provide a quick, visual overview of my technical abilities.
-   **Features:**
    -   Uses Devicon icons to visually represent each programming language or tool.
    -   A responsive grid that adjusts the number of columns based on screen size.
    -   Interactive cards with a subtle hover effect.

### 6. `Resume.jsx` (Professional Experience)

-   **Purpose:** To provide easy access to my detailed professional resume.
-   **Features:**
    -   A clean and simple section with a clear heading and description.
    -   A prominent "Download CV" button that allows visitors to download my resume PDF directly.
    -   The resume file is stored locally in the `/public` directory for reliable access.

### 7. `Projects.jsx` (The Portfolio Showcase)

-   **Purpose:** The most important section for showcasing my practical work.
-   **Features:**
    -   Displays projects in a clean, card-based grid layout.
    -   Each card includes the project title, description, and a list of technologies used.
    -   Direct, clickable icons linking to the **GitHub repository** and a **live demo** (if available).

### 8. `Contact.jsx` (Getting In Touch)

-   **Purpose:** To make it as easy as possible for visitors to contact me.
-   **Features:**
    -   A clickable "Send an Email" button that opens the user's default email client (`mailto:`).
    -   A clickable "Message on WhatsApp" button that opens a WhatsApp chat (`wa.me`).
    -   A fallback text displaying my email address for easy copying.

### 9. `Footer.jsx` (Closing Section)

-   **Purpose:** The footer for the website, containing copyright information and social links.
-   **Features:**
    -   Automatically updates the copyright year using `new Date().getFullYear()`.
    -   Includes clickable social media icons (LinkedIn, GitHub, etc.) that open in a new tab.
    -   Credits the technologies used to build the site.
