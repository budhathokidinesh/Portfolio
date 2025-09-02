import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
        },
        (error) => {
          alert("Failed to Send ❌ " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6"
    >
      <div className="container mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-10">
          I’m always open to discussing new projects, opportunities, or
          collaborations. Feel free to reach out through email, linkedin or send
          me message directly. Thanks
        </p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <a
            href="mailto:physmarika@gmail.com"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
          >
            <FaEnvelope /> physmarika@gmail.com
          </a>

          <a
            href="www.linkedin.com/in/dineshbudhathoki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/budhathokidinesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-xl shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            className=" text-black px-6 py-3 rounded-full font-medium bg-yellow-500 hover:bg-green-400 transition hover:cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
