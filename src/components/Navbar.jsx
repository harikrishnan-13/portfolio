import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaFileDownload
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // 🔥 Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // 🔥 Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaTools /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      className="bg-black/40 backdrop-blur-xl text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800 relative"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      {/* 🔥 Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      {/* 🔥 Logo */}
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Hari.dev
      </Link>

      {/* 🔥 Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">

        {navItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path);

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full transition ${
                isActive
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-gray-400 hover:text-blue-400 hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}

        {/* 🔥 Resume Button */}
        <a
          href="/HarikrishnanB_2024_SVCET_Resume.pdf"
          download
          className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm flex items-center gap-2 hover:opacity-90 transition"
        >
          <FaFileDownload />
          Resume
        </a>
      </div>

      {/* 🔥 Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center gap-6 py-8 md:hidden border-t border-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Resume in Mobile */}
            <a
              href="/HarikrishnanB_2024_SVCET_Resume.pdf"
              download
              className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center gap-2"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}