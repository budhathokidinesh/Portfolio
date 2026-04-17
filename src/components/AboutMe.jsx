import dbImage from "../assets/db.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "6+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

const tags = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Agentic AI",
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black py-14 px-6 overflow-hidden"
    >
      {/* Background accent blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5">
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-400 via-cyan-400 to-yellow-400 opacity-70 blur-sm animate-spin [animation-duration:6s]" />
            <img
              src={dbImage}
              alt="Dinesh Budhathoki"
              className="relative w-44 h-44 md:w-56 md:h-56 object-cover rounded-full border-4 border-gray-900"
            />
            {/* Available badge */}
            <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-gray-900 border border-gray-700 text-xs text-green-400 font-medium px-2.5 py-1 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available
            </span>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              {
                icon: <FaGithub size={18} />,
                href: "https://github.com/budhathokidinesh",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin size={18} />,
                href: "https://linkedin.com/in/dineshbudhathoki",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope size={18} />,
                href: "mailto:dineshbudhathoki.dev@gmail.com",
                label: "Email",
              },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-yellow-400 hover:bg-gray-700 border border-gray-700 hover:border-yellow-400/50 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Dinesh Budhathoki
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            A passionate{" "}
            <span className="text-gray-200 font-medium">
              Full Stack Developer
            </span>{" "}
            who loves building modern, scalable, and user-friendly web
            applications with{" "}
            <span className="text-gray-200 font-medium">AI integration</span>.
            My goal is to craft digital experiences that are both functional and
            beautiful.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 mb-7">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-yellow-400">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-7">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:border-yellow-400/60 hover:text-yellow-400 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/Dinesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-yellow-400 text-gray-900 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg shadow-yellow-400/20"
            >
              Download CV
            </a>
            <a
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-transparent border border-gray-600 text-gray-300 text-sm font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
