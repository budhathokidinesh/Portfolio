import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import fitaura from "../assets/fitaura.jpg";
import portfolio from "../assets/portfolio.jpg";
import dnsstore from "../assets/dnsstore.jpg";
import livechat from "../assets/livechat.jpg";
import realestate from "../assets/realestate.jpg";
import time from "../assets/time.jpg";

const projectData = [
  {
    title: "E-Commerce Website",
    description:
      "Full Stack MERN E-Commerce application with Stripe payments and AI integration.",
    image: fitaura,
    link: "https://fitaura.dineshbudhathoki.com",
    github: "https://github.com/budhathokidinesh/E-Commerce-Client-Front",
    tags: [
      "React",
      "Redux",
      "Shadcn",
      "Node.js",
      "MongoDB",
      "Stripe",
      "OpenAI",
    ],
    type: "Full Stack",
  },
  {
    title: "Fish and Chips",
    description:
      "Full Stack MERN Food ordering application with Stripe payment system.",
    image: fitaura,
    link: "https://ishikiya-front.vercel.app/",
    github: "https://github.com/budhathokidinesh/Ishikiya-front",
    tags: ["React", "Redux", "Shadcn", "Node.js", "MongoDB", "Stripe"],
    type: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind CSS and Gemini AI chatbot.",
    image: portfolio,
    link: "https://www.dineshbudhathoki.com",
    github: "https://github.com/budhathokidinesh?tab=repositories",
    tags: ["React", "Tailwind", "Gemini AI"],
    type: "Frontend",
  },
  {
    title: "DNS Store",
    description:
      "Full Stack MERN E-Commerce website with PayPal payment integration.",
    image: dnsstore,
    link: "https://dineshstore.netlify.app",
    github: "https://github.com/budhathokidinesh?tab=repositories",
    tags: ["React", "Redux", "Shadcn", "Node.js", "MongoDB", "PayPal"],
    type: "Full Stack",
  },
  {
    title: "Live Chat",
    description:
      "Real-time full stack chat application with Socket.IO integration.",
    image: livechat,
    link: "https://dns-livechat.netlify.app",
    github: "https://github.com/budhathokidinesh?tab=repositories",
    tags: ["React", "Shadcn", "Node.js", "Socket.IO"],
    type: "Full Stack",
  },
  {
    title: "Real Estate",
    description: "Full Stack real estate listing and search application.",
    image: realestate,
    link: "https://real-estate-fullstack-two.vercel.app",
    github: "https://github.com/budhathokidinesh?tab=repositories",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Auth0"],
    type: "Full Stack",
  },
  {
    title: "Time Management",
    description: "Blog app with full CRUD operations and JWT authentication.",
    image: time,
    link: "https://react-time-management-tawny.vercel.app",
    github: "https://github.com/budhathokidinesh?tab=repositories",
    tags: ["HTML", "CSS", "Bootstrap"],
    type: "Frontend",
  },
];

const typeColor = {
  "Full Stack": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Frontend: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-200"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
                {/* Type badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColor[project.type]}`}
                >
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1.5">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-yellow-400 text-gray-900 text-xs font-semibold hover:bg-yellow-300 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={11} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-transparent border border-gray-700 text-gray-300 text-xs font-semibold hover:border-gray-500 hover:text-white transition-all duration-200"
                  >
                    <FaGithub size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
