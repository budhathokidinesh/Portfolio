import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-700/50 z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700/50">
          <span className="text-gray-200 font-semibold text-sm tracking-widest uppercase">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-yellow-400 transition-colors"
            aria-label="Close menu"
          >
            <RxCross2 size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-4 pt-4 gap-1">
          {navLinks.map(({ label, href, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={onClose}
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-all duration-200 font-medium"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="absolute bottom-8 left-4 right-4">
          <a
            href="/#contact"
            onClick={onClose}
            className="block w-full text-center py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg shadow-yellow-400/20"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
