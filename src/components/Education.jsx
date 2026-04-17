import { useState } from "react";
import { FaGraduationCap, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

const educationData = [
  {
    degree: "Full Stack Development Bootcamp",
    institution: "Dented Code Academy",
    website: "https://dentedcode.com",
    year: "2024 – 2025",
    badge: "Latest",
    badgeColor: "text-green-400 border-green-400/30 bg-green-400/10",
    description:
      "Learned to develop responsive, interactive user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. Gained expertise in server-side development with Node.js and Express.js, including RESTful API design. Worked with MongoDB for database management and implemented CRUD operations. Built full-stack applications integrating front-end and back-end with authentication and state management. Deployed applications to cloud platforms (e.g., Vercel, AWS EC2) and configured SSL certificates and domains.",
  },
  {
    degree: "Master's in Information Technology Systems",
    institution: "Victorian Institute of Technology",
    website: "https://vit.edu.au",
    year: "2019 – 2021",
    badge: "Master's",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    description:
      "Focused on advanced IT concepts including software development, data management, cloud computing, and enterprise systems. Developed expertise in designing scalable applications, database administration, and IT project management. Completed research and hands-on projects that integrated business requirements with innovative technology solutions.",
  },
  {
    degree: "Master's in Science (Physics)",
    institution: "Tribhuban University",
    website: "https://tu.edu.np",
    year: "2015 – 2017",
    badge: "Master's",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    description:
      "Specialized in theoretical and applied physics with strong expertise in data analysis, research methodology, and problem-solving. Developed transferable skills in critical thinking, programming, and quantitative analysis relevant to technology and engineering fields.",
  },
];

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section
      id="education"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-14 px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border-2 border-yellow-400/40 group-hover:border-yellow-400 items-center justify-center transition-colors duration-300 z-10">
                  <FaGraduationCap className="text-yellow-400 text-sm" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-300">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200 mt-1"
                      >
                        {edu.institution}
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${edu.badgeColor}`}>
                        {edu.badge}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-800 mb-4" />

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {expandedIndex === index
                      ? edu.description
                      : `${edu.description.slice(0, 120)}...`}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {expandedIndex === index ? "Show less" : "Read more"}
                    <FaChevronDown
                      size={10}
                      className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
