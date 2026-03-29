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

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-gray-800 text-gray-400 mt-20 relative overflow-hidden">

      {/* 🔥 Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* 🔥 BRAND */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hari.dev
          </h2>

          <p className="mt-4 text-gray-500 leading-6 max-w-sm">
            FinTech Engineer building scalable APIs, banking systems,
            and enterprise-grade applications across global platforms.
          </p>

          <p className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-blue-400" />
            Chennai, India
          </p>
        </div>

        {/* 🔥 QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>

          {["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"].map(
            (link, i) => (
              <a
                key={i}
                href={`/${link.toLowerCase()}`}
                className="hover:text-blue-400 transition text-sm"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* 🔥 SOCIAL + CTA */}
        <div className="flex flex-col items-start md:items-end gap-6">

          {/* Social */}
          <div className="flex gap-5 text-2xl">
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
          <div className="text-right">
            <p className="text-sm text-gray-500">
              Open to opportunities & collaborations
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white shadow-lg hover:opacity-90"
            >
              Let’s Connect
            </motion.a>
          </div>

        </div>
      </div>

      {/* 🔥 Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto">

        <div className="flex items-center gap-2">
          © {new Date().getFullYear()} Hari Krishnan • Built with
          <FaReact className="text-blue-400 animate-spin-slow" />
          &
          <SiTailwindcss className="text-sky-400" />
        </div>

        {/* Scroll Top */}
        <motion.a
          href="#top"
          whileHover={{ scale: 1.2 }}
          className="mt-3 md:mt-0 flex items-center gap-1 hover:text-blue-400 transition"
        >
          <FaArrowUp />
          Top
        </motion.a>
      </div>
    </footer>
  );
}