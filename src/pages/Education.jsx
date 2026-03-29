import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaStar,
  FaAward,
} from "react-icons/fa";

export default function Education() {
  const education = [
    {
      institution:
        "Sri Venkateshwaraa College of Engineering and Technology, Pondicherry",
      degree: "Bachelor of Technology (BTech) - Computer Science",
      duration: "Jan 2021 – Jun 2024",
      grade: "8.9 CGPA",
      highlights: [
        "Built strong foundation in Computer Science fundamentals",
        "Focused on backend development and database systems",
        "Worked on real-time academic and mini projects",
        "Developed problem-solving and system design skills",
      ],
    },
    {
      institution: "Sri Sarada Vidyalaya, Ulundurpet, Kallakurichi, Tamil Nadu",
      degree: "Higher Secondary (HSLC) - Computer Science",
      duration: "Mar 2019 – Mar 2020",
      grade: "84%",
      highlights: [
        "Achieved centum (100/100) in Computer Science",
        "Built strong programming fundamentals",
        "Developed early interest in software development",
      ],
    },
    {
      institution: "Sri Sarada Vidyalaya, Ulundurpet, Kallakurichi, Tamil Nadu",
      degree: "Secondary School (SSLC)",
      duration: "Mar 2017 – Mar 2018",
      grade: "87%",
      highlights: [
        "Maintained strong academic performance",
        "Developed analytical and logical thinking skills",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="pointer-events-none absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          My academic journey and foundation in technology
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-blue-500/40 pl-6 space-y-14">

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            {/* Animated Timeline Dot */}
            <motion.div
              className="absolute -left-9 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>

            {/* Degree */}
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaGraduationCap className="text-blue-400" />
              {edu.degree}
            </h2>

            {/* Institution */}
            <p className="text-blue-400 mt-1 flex items-center gap-2">
              <FaSchool />
              {edu.institution}
            </p>

            {/* Duration + Grade */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">
              <span className="flex items-center gap-1 text-yellow-400 font-medium">
                <FaCalendarAlt /> {edu.duration}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 font-medium">
                <FaStar /> {edu.grade}
              </span>
            </div>

            {/* Highlights */}
            <ul className="mt-4 space-y-2">
              {edu.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <FaAward className="text-purple-400 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Special Badge for Centum */}
            {edu.degree.includes("HSLC") && (
              <motion.div
                className="mt-4 inline-flex items-center gap-2 text-sm bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaAward /> Centum in Computer Science
              </motion.div>
            )}

          </motion.div>
        ))}

      </div>
    </div>
  );
}
