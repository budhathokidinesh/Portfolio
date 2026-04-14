import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "dineshbudhathoki.dev@gmail.com",
    href: "mailto:dineshbudhathoki.dev@gmail.com",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/dineshbudhathoki",
    href: "https://linkedin.com/in/dineshbudhathoki",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/budhathokidinesh",
    href: "https://github.com/budhathokidinesh",
  },
];

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            I'm always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out — I'll get back to you soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Contact Info</h3>
              <p className="text-gray-500 text-sm">Reach me directly via any of these channels.</p>
            </div>

            <div className="flex flex-col gap-4">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-yellow-400/40 group transition-all duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-gray-900 transition-all duration-200">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                    <p className="text-gray-300 text-sm group-hover:text-yellow-400 transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
            <h3 className="text-white font-semibold text-lg mb-5">Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center py-2 rounded-lg bg-green-400/10 border border-green-400/20">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-rose-400 text-sm text-center py-2 rounded-lg bg-rose-400/10 border border-rose-400/20">
                  Failed to send. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold text-sm hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-yellow-400/20"
              >
                <FaPaperPlane size={14} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
