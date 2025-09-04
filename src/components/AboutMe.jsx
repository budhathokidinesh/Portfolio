import { useState } from "react";
import dbImage from "../assets/db.jpg";
import ChatBot from "./ChatBot";

const AboutMe = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="about"
      className="bg-gradient-to-b  from-gray-900 via-gray-800 to-black py-16 px-6"
    >
      <div className="container flex flex-col md:flex-row items-center gap-25 justify-center-safe">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-300 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-yellow-400 font-semibold">
              Dinesh Budhathoki
            </span>
            , a passionate{" "}
            <span className="text-yellow-400 "> Full Stack Developer</span>{" "}
            specialised in the{" "}
            <span className="font-semibold text-center ">MERN stack</span>. I
            love building modern, scalable, and user-friendly web applications
            with AI integration. My goal is to craft digital experiences that
            are both functional and beautiful.
          </p>

          {/* Highlighted Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "TailwindCSS",
              "Agentic AI",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm shadow hover:bg-yellow-400 hover:text-black transition hover:cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            {/* Hire Me button */}
            <a
              href="/Dinesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm shadow hover:bg-yellow-500 transition hover:cursor-pointer"
            >
              Hire Me
            </a>

            {/* Chat With Me button */}
            <button
              className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm shadow hover:bg-cyan-500 transition hover:cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Chat With Me
            </button>
          </div>
        </div>
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={dbImage}
            alt="Dinesh Budhathoki"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full"
          />
        </div>
      </div>
      <ChatBot isOpen={open} onOpenChange={setOpen} />
    </section>
  );
};

export default AboutMe;
