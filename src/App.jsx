import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaFigma,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPhp,
  SiMysql,
  SiDjango,
  SiGooglecolab,
} from "react-icons/si";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "/Users/rand/my-portfolio/ContactForm.jsx";

// Smooth scroll
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const projects = [
  // {
  //   title: "EXPO Dash",
  //   description: "Short description of project 1",
  //   link: "#",
  // },
  // {
  //   title: "Study platform",
  //   description: "Short description of project 2",
  //   link: "#",
  // },
  // {
  //   title: "Art Supply",
  //   description: "Short description of project 3",
  //   link: "#",
  // },
  // {
  //   title: "OptiRoute",
  //   description: "Short description of project 3",
  //   link: "#",
  // },
  // {
  //   title: "To-Do-App",
  //   description: "Short description of project 3",
  //   link: "#",
  // },
  {
    title: "OptiRoute",
    video: "/videos/sarnd.mp4", // <-- Add short preview video
    description:
      "Built and deployed from scratch using Next.js and Tailwind CSS. Strict requirements met for content and layout.",
    github: "https://github.com/randJehad21/OptiRoute",
  },
];

const skills = [
  { name: "Project Management", icon: FaMicrosoft },
  { name: "Web Development", icon: FaHtml5 },
  { name: "CSS/JS", icon: FaCss3Alt },
  { name: "PHP", icon: SiPhp },
  { name: "SQL", icon: SiMysql },
  { name: "Django", icon: SiDjango },
  { name: "Application Development", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Java", icon: FaJava },
  { name: "Cloud Computing", icon: FaAws },
  { name: "Firebase", icon: SiFirebase },
  { name: "UI/UX Design", icon: FaFigma },
  { name: "AI & ML", icon: FaPython },
  { name: "Google Colab", icon: SiGooglecolab },
  { name: "Problem Solving", icon: FaStar },
  { name: "Team Collaboration", icon: FaStar },
  { name: "Adaptable & Leadership", icon: FaStar },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a192f]">
      <div className="min-h-screen w-full bg-white text-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white transition-colors duration-500">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-xl font-bold text-indigo-400">
              Rand AbuMoustafa
            </h1>
            <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
              {["About", "Skills", "Projects", "Contact"].map((section) => (
                <li
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="cursor-pointer hover:text-indigo-400 transition"
                >
                  {section}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
            >
              {darkMode ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdDarkMode size={20} />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}

        <motion.section
          id="about"
          className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Profile Card */}
          <motion.div
            className="md:w-1/2 flex flex-col items-center md:items-start space-y-6"
            variants={fadeInUp}
          >
            <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
              {/* <div className="relative w-64 h-64 rounded-full border-4 border-indigo-500 p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow">
            <img
              src="https://via.placeholder.com/300"
              alt="Rand"
              className="w-full h-full rounded-full object-cover border-4 border-gray-900"
            />
          </div> */}
              <div className="text-center md:text-left space-y-2">
                <h1 className="text-5xl font-bold leading-tight">
                  Hi, I am Rand AbuMoustaf
                </h1>
                <p className="text-lg font-medium text-indigo-300">
                  Software Engineer |{" "}
                  <span className="text-indigo-400">Web & App Developer</span>
                </p>
                <p className="text-gray-400">📍 Riyadh, Saudi Arabia</p>
              </div>

              {/* Contact Buttons */}
              <div className="flex space-x-4">
                <a
                  href="mailto:randabumustafa@gmail.com"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                >
                  <FaEnvelope /> Email
                </a>
                <a
                  href="https://github.com/randJehad21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rand-abumoustafa-472491242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1yDBJg1UYzvzowuaJqgvnEcSPHhQMW4ay?usp=share_link"
                  target="_blank"
                  className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                >
                  <FaFileAlt /> CV
                </a>
              </div>
            </div>
          </motion.div>
          {/* About Section with Counters */}
          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I am passionate about building modern web and mobile applications
              that combine great design and efficient code. With expertise in
              software architecture, problem-solving, and cloud technologies, I
              enjoy delivering impactful solutions that bridge user needs and
              technology.
            </p>

            {/* Counters */}
            {/* <div className="flex justify-center md:justify-start gap-8 mt-8">
            <div>
              <p className="text-4xl font-bold text-indigo-400">+3</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-400">+13</p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-400">+30</p>
              <p className="text-gray-400">Clients</p>
            </div>
          </div> */}
          </div>
        </motion.section>

        {/* Placeholder Sections */}
        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center px-6"
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <skill.icon size={40} className="text-indigo-400 mb-2" />
                <p className="text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section id="experience" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Experience Section</h2>
      </section> */}


        {/* as card  */}
        {/* <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section> */}

        {/* as video */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center px-6"
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                {/* Video Preview */}
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className="rounded-lg w-full h-56 object-cover mb-4"
                />

                {/* Title + GitHub Link */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-indigo-400">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-500 text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            ))}
          </div>

          {/* View More on GitHub */}
          <div className="mt-8">
            <a
              href="https://github.com/randJehad21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
            >
              View More Projects on GitHub →
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center px-4"
        >
          <h2 className="text-3xl font-bold mb-6">Let's have chat :)</h2>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="w-full py-6 px-8 bg-black/40 text-gray-400 border-t border-gray-700 flex items-center justify-between">
          <span>© 2025 Rand AbuMoustafa.</span>
          <div className="flex space-x-4">
            <a
              href="https://github.com/randJehad21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaGithub className="text-xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/rand-abumoustafa-472491242"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaLinkedin className="text-xl text-white" />

            </a>

            <a
              href="mailto:randabumustafa@gmail.com"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaEnvelope className="text-xl text-white" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
