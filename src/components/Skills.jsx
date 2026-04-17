import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaRobot,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiBootstrap,
  SiStripe,
  SiDocker,
  SiMysql,
  SiClickup,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />,        name: "React",         color: "text-cyan-400",   bg: "bg-cyan-400/10",   border: "border-cyan-400/20",   category: "Frontend" },
  { icon: <SiJavascript />,   name: "JavaScript",    color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", category: "Frontend" },
  { icon: <FaHtml5 />,        name: "HTML5",         color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", category: "Frontend" },
  { icon: <FaCss3Alt />,      name: "CSS3",          color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20",   category: "Frontend" },
  { icon: <SiTailwindcss />,  name: "Tailwind CSS",  color: "text-cyan-500",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   category: "Frontend" },
  { icon: <SiRedux />,        name: "Redux",         color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", category: "Frontend" },
  { icon: <SiBootstrap />,    name: "Bootstrap",     color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", category: "Frontend" },
  { icon: <SiShadcnui />,     name: "shadcn/ui",     color: "text-gray-200",   bg: "bg-gray-200/10",   border: "border-gray-200/20",   category: "Frontend" },

  { icon: <FaNodeJs />,       name: "Node.js",       color: "text-green-500",  bg: "bg-green-500/10",  border: "border-green-500/20",  category: "Backend" },
  { icon: <SiExpress />,      name: "Express.js",    color: "text-gray-300",   bg: "bg-gray-300/10",   border: "border-gray-300/20",   category: "Backend" },
  { icon: <SiMongodb />,      name: "MongoDB",       color: "text-green-400",  bg: "bg-green-400/10",  border: "border-green-400/20",  category: "Backend" },
  { icon: <SiMysql />,        name: "MySQL",         color: "text-blue-300",   bg: "bg-blue-300/10",   border: "border-blue-300/20",   category: "Backend" },
  { icon: <FaPython />,       name: "Python",        color: "text-yellow-300", bg: "bg-yellow-300/10", border: "border-yellow-300/20", category: "Backend" },
  { icon: <FaShieldAlt />,    name: "JWT Auth",      color: "text-rose-400",   bg: "bg-rose-400/10",   border: "border-rose-400/20",   category: "Backend" },
  { icon: <FaEnvelope />,     name: "Nodemailer",    color: "text-teal-400",   bg: "bg-teal-400/10",   border: "border-teal-400/20",   category: "Backend" },

  { icon: <FaGitAlt />,       name: "Git & GitHub",  color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", category: "Tools" },
  { icon: <FaAws />,          name: "AWS",           color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", category: "Tools" },
  { icon: <SiDocker />,       name: "Docker",        color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20",   category: "Tools" },
  { icon: <SiStripe />,       name: "Stripe",        color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20", category: "Tools" },
  { icon: <SiClickup />,      name: "ClickUp",       color: "text-pink-400",   bg: "bg-pink-400/10",   border: "border-pink-400/20",   category: "Tools" },
  { icon: <FaRobot />,        name: "Agentic AI",    color: "text-cyan-300",   bg: "bg-cyan-300/10",   border: "border-cyan-300/20",   category: "Tools" },
];

const categories = ["Frontend", "Backend", "Tools"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-14 px-6 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Skills
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
                  {category}
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {skills
                  .filter((s) => s.category === category)
                  .map(({ icon, name, color, bg, border }) => (
                    <div
                      key={name}
                      className={`group flex flex-col items-center gap-2.5 p-4 rounded-xl border ${border} ${bg} hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default`}
                    >
                      <span className={`text-4xl ${color} transition-transform duration-200 group-hover:scale-110`}>
                        {icon}
                      </span>
                      <p className="text-gray-400 group-hover:text-gray-200 text-xs font-medium text-center transition-colors duration-200">
                        {name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
