import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 text-white relative overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-5 sm:left-10"></div>
      <div className="pointer-events-none absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-5 sm:right-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hari Krishnan
            </span>
          </h1>

          {/* Typing */}
          <div className="mt-4 text-base sm:text-lg text-blue-400 font-medium">
            <TypeAnimation
              sequence={[
                "FinTech Engineer",
                2000,
                "API Specialist",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            Building scalable banking systems, APIs, and enterprise applications
            across FinTech, Telecom, and Supply Chain domains.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <motion.a
              href="/HarikrishnanB_2024_SVCET_Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume <FaArrowRight />
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-blue-500 flex items-center justify-center gap-2"
              >
                Contact Me <FaEnvelope />
              </Link>
            </motion.div>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-6 text-xl justify-center md:justify-start">
            <a
              href="https://github.com/harikrishnan-13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hari-krishnan-b-70b2951ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:harikrishnan13112002@gmail.com"
              className="hover:text-blue-400 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 text-center">
            {[
              { value: "2.5+", label: "Years Exp" },
              { value: "10+", label: "APIs Built" },
              { value: "4+", label: "Projects" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 p-4 rounded-lg border border-gray-800"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  {item.value}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 justify-center md:justify-start">
            {[
              "FinTech",
              "Banking APIs",
              "LOS / LMS",
              "Accounts",
              "Supply Chain",
              "HRMS",
              "Telecom",
              "Low Code",
              "SQL",
              "React",
              "Python"
            ].map((tag, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 hover:bg-blue-600/30 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-10 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm italic">
              "Delivered high-quality APIs and scalable backend systems on time."
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30"></div>

            <motion.img
              src={profile}
              alt="profile"
              className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-500 shadow-xl object-cover"
              whileHover={{ scale: 1.08 }}
            />

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-gray-700"
            >
              Available for Work 🚀
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/*
      <motion.div
        className="absolute bottom-2 sm:bottom-6 flex flex-col items-center text-gray-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown />
        <span className="text-xs mt-1">Scroll</span>
      </motion.div>
      */}
    </div>
  );
}