import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-3/2 w-1/2 bg-gray-700 z-50 shadow-lg transform transition-transform duration-300 rounded-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-yellow-400"
          >
            <RxCross2 size={28} />
          </button>
        </div>

        {/* Menu links */}
        <nav className="flex flex-col px-6 space-y-6 text-gray-300 font-medium text-center">
          <h4 className=" text-2xl text-green-500">Welcome🙏</h4>
          <hr />
          <a href="/#about" onClick={onClose} className="hover:text-yellow-400">
            About Me
          </a>
          <a
            href="/#skills"
            onClick={onClose}
            className="hover:text-yellow-400"
          >
            Skills
          </a>
          <a
            href="/#education"
            onClick={onClose}
            className="hover:text-yellow-400"
          >
            Education
          </a>
          <Link
            to="/projects"
            onClick={onClose}
            className="hover:text-yellow-400"
          >
            Projects
          </Link>
          <Link to="/blogs" onClick={onClose} className="hover:text-yellow-400">
            Blogs
          </Link>
          <a
            href="/#contact"
            onClick={onClose}
            className="hover:text-yellow-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
