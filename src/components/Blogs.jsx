import { useState } from "react";

const Blogs = () => {
  const blogData = [
    {
      title: "From Memory to Library: Understanding RAG in AI",
      snippet: `AI is evolving from just being a "brain" to becoming a "full body" with hands and feet — thanks to Retrieval-Augmented Generation (RAG).
- Traditional AI relies only on what it was trained on.
- RAG-powered AI, on the other hand, can look up information in real time — searching documents, websites, or databases, and then generating accurate answers with sources.

At the core of this is something called vector embeddings — turning words into numbers that capture meaning. This allows AI to not just match keywords, but to truly understand context and similarity.

Think of it like this:
Traditional AI = a brain that remembers.
RAG AI = a brain with a library card — it can go, find, and use the right knowledge.`,
      link: "https://app.daily.dev/posts/from-memory-to-library-understanding-rag-in-ai-sxvavhxm2",
    },
    {
      title: "Agentic AI: From Just a Brain to a Full-Body System",
      snippet: `Traditional AI vs. Agentic AI — A Simple Analogy
Think of traditional AI as a super-smart brain in a jar. What it can do?
- It can think.
- It can answer your questions.
- It can analyze data.
But… it can’t do anything on its own.

Now imagine Agentic AI — the brain with a full body, complete with hands and feet.
- It can think.
- It can perceive what’s happening.
- It can take action.
- It can move toward a goal without constant supervision.`,
      link: "https://app.daily.dev/posts/agentic-ai-from-just-a-brain-to-a-full-body-system-nbut95oao",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          My Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {blogData.map((blog, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition flex flex-col h-auto"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-300 mb-4 whitespace-pre-line">
                  {isExpanded
                    ? blog.snippet
                    : blog.snippet.substring(0, 150) + "..."}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-yellow-400 text-sm font-medium hover:underline hover:cursor-pointer"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-green-700 text-black rounded-full font-medium hover:bg-green-400 transition mb-1 mx-8 text-center"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
