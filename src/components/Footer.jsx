import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    icon: <FaGithub size={17} />,
    href: "https://github.com/budhathokidinesh",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={17} />,
    href: "https://linkedin.com/in/dineshbudhathoki",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={17} />,
    href: "https://x.com/dinesbudhathoki",
    label: "X",
  },
  { icon: <FaInstagram size={17} />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF size={17} />, href: "#", label: "Facebook" },
  {
    icon: <FaEnvelope size={17} />,
    href: "mailto:dineshbudhathoki.dev@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 text-white">
      <div className="container mx-auto max-w-5xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-extrabold text-white">
              Dinesh Budhathoki
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer specialising in MERN stack and AI-powered web
              applications.
            </p>
            <a
              href="mailto:dineshbudhathoki.dev@gmail.com"
              className="text-xs text-gray-500 hover:text-yellow-400 transition-colors duration-200 mt-1"
            >
              dineshbudhathoki.dev@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map(({ label, href, to }) => (
                <li key={label}>
                  {to ? (
                    <Link
                      to={to}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400/40 hover:bg-gray-700 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dinesh Budhathoki. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with <span className="text-yellow-400/70">React</span> ·
            Deployed on <span className="text-yellow-400/70">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
