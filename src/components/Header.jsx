import { Link, useLocation } from "react-router-dom";
import dbImage from "../assets/db.jpg";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg shadow-black/40"
          : "bg-gray-900/95"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <img
              src={dbImage}
              alt="Dinesh"
              className="relative w-10 h-10 object-cover rounded-full border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300"
            />
          </div>
          <span className="text-lg font-bold text-gray-200 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
            Dinesh<span className="text-yellow-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href, to }) => {
            const isActive = to && location.pathname === to;
            const linkClass = `relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md
              ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-gray-100"}
              group`;

            return to ? (
              <Link key={label} to={to} className={linkClass}>
                {label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px bg-yellow-400 transition-transform duration-300 origin-left
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            ) : (
              <a key={label} href={href} className={linkClass}>
                {label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            );
          })}

          <a
            href="/#contact"
            className="ml-3 px-4 py-1.5 text-sm font-semibold rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-200 shadow-md shadow-yellow-400/20"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
          aria-label="Open menu"
        >
          <TiThMenu size={26} />
        </button>
      </div>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
