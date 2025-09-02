import fitaura from "../assets/fitaura.jpg";
import portfolio from "../assets/portfolio.jpg";
import dnsstore from "../assets/dnsstore.jpg";
import livechat from "../assets/livechat.jpg";
import realestate from "../assets/realestate.jpg";
import time from "../assets/time.jpg";
//image error is fixed
const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      description:
        "Full Stack MERN E-Commerce applicatin with Stripe payments. And AI integration.",
      image: fitaura,
      link: "https://fitaura.dineshbudhathoki.com",
      github: "https://github.com/budhathokidinesh?tab=repositories",
      frontend: "React, Tailwind, Redux, Shadcn",
      backend: "Node.js, Express, MongoDB, Stripe, JWT, Nodemailer, OpenAI",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      image: portfolio,
      link: "https://www.dineshbudhathoki.com",
      github: "https://github.com/budhathokidinesh?tab=repositories",
      frontend: "React, Tailwind, OpenAI",
    },
    {
      title: "DNS store",
      description:
        "Full Stack MERN E-Commerce website with PayPal integration.",
      image: dnsstore,
      link: "https://dineshstore.netlify.app",
      github: "https://github.com/budhathokidinesh?tab=repositories",
      frontend: "React, Tailwind, Redux, Shadcn",
      backend: "Node.js, Express, MOngoose, MongoDB, PayPal",
    },
    {
      title: "Live Chat",
      description:
        "Full Stack Live Chat application with Socket.IO integration",
      image: livechat,
      link: "https://dns-livechat.netlify.app",
      github: "https://github.com/budhathokidinesh?tab=repositories",
      frontend: "React, Tailwind, Shadcn, Daisy",
      backend: "Node.js, Express, Socket.IO",
    },
    {
      title: "Real Estate",
      description: "Full Stack Real Estate application ",
      image: realestate,
      link: "https://real-estate-fullstack-two.vercel.app",
      github: "https://github.com/yourusername/fitaura",
      frontend: "React, Tailwind, Redux",
      backend: "Node.js, Express, MongoDB, AuthO",
    },
    {
      title: "Time Management",
      description:
        "Full stack blog app with CRUD operations and JWT authentication.",
      image: time,
      link: "https://react-time-management-tawny.vercel.app",
      github: "https://github.com/budhathokidinesh?tab=repositories",
      frontend: "HTML, CSS, Bootstrap",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Stacks */}
                <div className="mb-4 text-sm text-gray-400">
                  <p>
                    <span className="text-yellow-400">Frontend:</span>{" "}
                    {project.frontend}
                  </p>
                  <p>
                    <span className="text-yellow-400">
                      {project.backend ? "Backend:" : ""}
                    </span>{" "}
                    {project.backend}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-400 text-black rounded-full font-medium hover:bg-green-800 transition text-center"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-yellow-400 rounded-full font-medium hover:bg-gray-600 transition"
                  >
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
