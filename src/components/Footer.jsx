import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReact,
  FaArrowUp
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-gray-800 text-gray-400 mt-16 sm:mt-20 relative overflow-hidden">

      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

        {/* BRAND */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hari.dev
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-500 leading-6 max-w-sm">
            FinTech Engineer building scalable APIs, banking systems,
            and enterprise-grade applications across global platforms.
          </p>

          <p className="flex items-center gap-2 mt-3 sm:mt-4 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-blue-400" />
            Chennai, India
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3">
          <h3 className="text-white font-semibold mb-1 sm:mb-2">Quick Links</h3>

          {["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"].map(
            (link, i) => (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className="hover:text-blue-400 transition text-sm"
              >
                {link}
              </Link>
            )
          )}
        </div>

        {/* SOCIAL + CTA */}
        <div className="flex flex-col items-center md:items-end gap-5 sm:gap-6">

          {/* Social */}
          <div className="flex gap-5 text-xl sm:text-2xl">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/harikrishnan-13",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/hari-krishnan-b-70b2951ab/",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:harikrishnan13112002@gmail.com",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="hover:text-blue-400 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              Open to opportunities & collaborations
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="inline-block mt-2 sm:mt-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white shadow-lg hover:opacity-90"
              >
                Let’s Connect
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 sm:py-5 text-xs sm:text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3 px-4 sm:px-6 max-w-6xl mx-auto text-center md:text-left">

        <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
          © {new Date().getFullYear()} Hari Krishnan • Built with
          <FaReact className="text-blue-400 animate-spin-slow" />
          &
          <SiTailwindcss className="text-sky-400" />
        </div>

        {/* Scroll Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.2 }}
          className="flex items-center gap-1 hover:text-blue-400 transition"
        >
          <FaArrowUp />
          Top
        </motion.button>
      </div>
    </footer>
  );
}