import { useState } from "react";
import { FaBriefcase, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

const experienceData = [
  {
    role: "Full Stack Developer — Intern",
    company: "Next Zen Talent",
    website: "https://www.linkedin.com/company/nextzentalent",
    period: "March 2025 — Present",
    badge: "Current",
    badgeColor: "text-green-400 border-green-400/30 bg-green-400/10",
    points: [
      "Working as a Full Stack Developer building and maintaining web applications.",
    ],
  },
  {
    role: "Full Stack Developer — Trainee",
    company: "Dented Code Academy",
    website: "https://dentedcode.com/",
    period: "Sept 2024 — March 2025",
    badge: "Traineeship",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    points: [
      "Served as Scrum Master, facilitating sprint planning, daily stand-ups, sprint reviews, and retrospectives to ensure structured Agile delivery.",
      "Led cross-functional teams as Tech Lead and QA Lead, driving collaboration and achieving 95% sprint goal completion rate.",
      "Removed development blockers and improved team velocity by implementing structured backlog grooming and clear task ownership.",
      "Coordinated GitHub workflows and CI/CD pipelines to streamline deployments to AWS cloud environments.",
      "Implemented automated testing and deployment pipelines using AWS and Docker, contributing to 99.9% system uptime.",
      "Integrated third-party services (Stripe payment gateway, AI chatbot) to enhance system functionality and improve user engagement.",
      "Promoted continuous improvement culture by facilitating retrospectives and driving process enhancements.",
    ],
  },
];

const PREVIEW_COUNT = 2;

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-14 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

          <div className="flex flex-col gap-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex gap-6 group" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border-2 border-yellow-400/40 group-hover:border-yellow-400 items-center justify-center transition-colors duration-300 z-10">
                  <FaBriefcase className="text-yellow-400 text-sm" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-300">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg leading-snug">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200 mt-1"
                      >
                        {exp.company}
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gray-800 mb-4" />

                  {/* Points */}
                  <ul className="flex flex-col gap-2">
                    {(expandedIndex === index ? exp.points : exp.points.slice(0, PREVIEW_COUNT)).map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400/60 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.points.length > PREVIEW_COUNT && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setExpandedIndex(expandedIndex === index ? null : index); }}
                      className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                    >
                      {expandedIndex === index ? "Show less" : `Show ${exp.points.length - PREVIEW_COUNT} more`}
                      <FaChevronDown
                        size={10}
                        className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
