import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen  bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-6">
      <div className=" px-4 text-center space-y-6 w-full">
        <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-6 items-start">
          {/* Logo / Store Name */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-100 mb-3">
              Dinesh Budhathoki
            </h2>
            <p className="text-sm text-gray-400">
              Full Stack Developer specialised with MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-md text-gray-300">
              <li>
                <Link to="/blogs" className="hover:text-yellow-400">
                  Blogs
                </Link>
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Skills</li>
              <li>
                <Link to="/projects" className="hover:text-yellow-400">
                  Projects
                </Link>
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4 mb-6 justify-center">
              <FaFacebookF className="size-10 hover:text-yellow-400 cursor-pointer" />
              <FaInstagram className="size-10 hover:text-yellow-400 cursor-pointer" />

              <a
                href="https://x.com/dinesbudhathoki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="size-10 hover:text-yellow-400 cursor-pointer" />
              </a>
              <a
                href="https://linkedin.com/in/dineshbudhathoki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin className="size-10 hover:text-yellow-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <aside className="text-sm text-gray-300">
          © {new Date().getFullYear()} Dinesh Budhathoki. All rights reserved.
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
