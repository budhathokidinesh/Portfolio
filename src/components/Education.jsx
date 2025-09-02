import { useState } from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Development Bootcamp",
      institution: "Dented Code Academy",
      website: "https://dentedcode.com",
      year: "2024 - 2025",
      description:
        "Learned to develop responsive, interactive user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. Gained expertise in server-side development with Node.js and Express.js, including RESTful API design. Worked with MongoDB for database management and implemented CRUD operations. Built full-stack applications integrating front-end and back-end with authentication and state management. Deployed applications to cloud platforms (e.g., Vercel, AWS EC2) and configured SSL certificates and domains. Completed hands-on projects simulating real-world development scenarios to demonstrate full-stack capabilities.",
    },
    {
      degree: "Master's in Information Technology Systems",
      institution: "Victorian Institute of Technology",
      website: "https://vit.edu.au",
      year: "2019 - 2021",
      description:
        "Focused on advanced IT concepts including software development, data management, cloud computing, and enterprise systems. Developed expertise in designing scalable applications, database administration, and IT project management. Completed research and hands-on projects that integrated business requirements with innovative technology solutions.",
    },
    {
      degree: "Masters in Science (Physics)",
      institution: "Tribhuban University",
      website: "https://tu.edu.np",
      year: "2015 - 2017",
      description:
        "Specialized in theoretical and applied physics with strong expertise in data analysis, research methodology, and problem-solving. Developed transferable skills in critical thinking, programming, and quantitative analysis relevant to technology and engineering fields.",
    },
  ];

  // Track which card is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 text-center mb-12">
          My Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl text-yellow-400 font-semibold mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-300 font-medium">
                {" "}
                {edu.website && (
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    {edu.institution}
                  </a>
                )}
              </p>

              <p className="text-gray-400 text-sm mb-3">{edu.year}</p>

              <p className="text-gray-300 mb-2">
                {expandedIndex === index
                  ? edu.description
                  : `${edu.description.slice(0, 80)}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-yellow-400 text-sm font-medium hover:underline hover:cursor-pointer"
              >
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
