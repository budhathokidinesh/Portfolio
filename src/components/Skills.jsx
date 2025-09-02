import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 to-black py-16 px-6"
    >
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Skill Item */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaReact className="text-cyan-400 text-5xl mb-3" />
            <p className="text-white font-medium">React</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <SiJavascript className="text-yellow-400 text-5xl mb-3" />
            <p className="text-white font-medium">JavaScript</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaNodeJs className="text-green-500 text-5xl mb-3" />
            <p className="text-white font-medium">Node.js</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <SiExpress className="text-gray-400 text-5xl mb-3" />
            <p className="text-white font-medium">Express.js</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <SiMongodb className="text-green-400 text-5xl mb-3" />
            <p className="text-white font-medium">MongoDB</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <SiRedux className="text-blue-400 text-5xl mb-3" />
            <p className="text-white font-medium">Redux</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <SiTailwindcss className="text-cyan-500 text-5xl mb-3" />
            <p className="text-white font-medium">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaGitAlt className="text-orange-500 text-5xl mb-3" />
            <p className="text-white font-medium">Git & GitHub</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaHtml5 className="text-orange-400 text-5xl mb-3" />
            <p className="text-white font-medium">HTML5</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaCss3Alt className="text-blue-500 text-5xl mb-3" />
            <p className="text-white font-medium">CSS3</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition">
            <FaAws className="text-blue-500 text-5xl mb-3" />
            <p className="text-white font-medium">AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
