import { Link } from "react-router-dom";
import dbImage from "../assets/db.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={dbImage}
              alt="Dinesh"
              className="w-10 h-10 object-cover rounded-full border-2 "
            />
          </Link>

          <Link
            to="/"
            className="text-xl font-bold text-gray-300 tracking-wide hover:text-yellow-400 transition"
          >
            Dinesh
          </Link>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-5 text-sm text-gray-300 font-medium">
          <li>
            <a href="/#about" className="hover:text-yellow-400 cursor-pointer">
              About Me
            </a>
          </li>
          <li>
            <a href="/#skills" className="hover:text-yellow-400 cursor-pointer">
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#education"
              className="hover:text-yellow-400 cursor-pointer"
            >
              Education
            </a>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-yellow-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-yellow-400 cursor-pointer">
              Blogs
            </Link>
          </li>
          <li>
            <a
              href="/#contact"
              className="hover:text-yellow-400 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu (optional for future) */}
        <div className="md:hidden">
          {/* Add a hamburger menu icon here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
