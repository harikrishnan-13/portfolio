import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="pointer-events-none absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-10"></div>

      <motion.div
        className="relative z-10 text-center max-w-xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6 text-blue-400 text-5xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaExclamationTriangle />
        </motion.div>

        {/* 404 Text */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:opacity-90"
            >
              <FaHome />
              Go Home
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:border-blue-500"
          >
            <FaArrowLeft />
            Go Back
          </motion.button>

        </div>

        {/* Subtle Footer Text */}
        <p className="mt-10 text-sm text-gray-500">
          Lost? Let’s get you back on track
        </p>
      </motion.div>
    </div>
  );
}