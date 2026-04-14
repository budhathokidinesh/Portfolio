import { FaExternalLinkAlt, FaRegClock } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const blogData = [
  {
    title: "From Memory to Library: Understanding RAG in AI",
    snippet:
      "AI is evolving from just being a 'brain' to becoming a 'full body' with hands and feet — thanks to Retrieval-Augmented Generation (RAG). Traditional AI relies only on what it was trained on. RAG-powered AI can look up information in real time — searching documents, websites, or databases, and then generating accurate answers with sources.\n\nAt the core of this is vector embeddings — turning words into numbers that capture meaning. This allows AI to not just match keywords, but to truly understand context and similarity.\n\nThink of it like this: Traditional AI = a brain that remembers. RAG AI = a brain with a library card — it can go, find, and use the right knowledge.",
    link: "https://app.daily.dev/posts/from-memory-to-library-understanding-rag-in-ai-sxvavhxm2",
    tag: "AI / RAG",
    readTime: "3 min read",
  },
  {
    title: "Agentic AI: From Just a Brain to a Full-Body System",
    snippet:
      "Think of traditional AI as a super-smart brain in a jar — it can think, answer questions, and analyze data, but it can't do anything on its own. Agentic AI is the brain with a full body, complete with hands and feet. It can think, perceive what's happening, take action, and move toward a goal without constant supervision.\n\nThis shift from passive AI to active agents is transforming how we build software — from chatbots to autonomous workflows that can browse the web, write code, and execute tasks end to end.",
    link: "https://app.daily.dev/posts/agentic-ai-from-just-a-brain-to-a-full-body-system-nbut95oao",
    tag: "Agentic AI",
    readTime: "4 min read",
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Thoughts & Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Blogs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400">
                  <HiSparkles size={11} />
                  {blog.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaRegClock size={11} />
                  {blog.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug group-hover:text-yellow-400 transition-colors duration-200">
                {blog.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-gray-800" />

              {/* Snippet */}
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                {blog.snippet.split("\n\n")[0]}
              </p>

              {/* Footer */}
              <div className="mt-auto pt-2">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Read full article
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
