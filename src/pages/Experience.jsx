import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaProjectDiagram,
  FaCheckCircle,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "CAPTIV",
      role: "Associate Software Developer",
      duration: "Nov 2024 - Present",
      location: "Chennai, India",
      project: "HRMS System + Ongoing Enterprise Projects",
      description:
        "Currently working on multiple enterprise projects including HRMS, banking systems (LMS, LOS, Accounts), telecom APIs, and supply chain platforms, focusing on scalable architecture and performance.",
      achievements: [
        "Developing HRMS modules for project and task management",
        "Actively contributing to banking systems (LMS, LOS, Accounts)",
        "Working on telecom API integrations and supply chain systems",
        "Designing scalable backend APIs across multiple domains",
        "Improving system performance through optimization techniques",
      ],
    },
    {
      company: "Cognitive Platform Solutions",
      role: "Junior Software Developer",
      duration: "Apr 2024 - Oct 2024",
      location: "India",
      project: "Xtenda Zambia - LMS, LOS, Accounts",
      description:
        "Worked on enterprise-level banking systems including Loan Management System (LMS), Loan Origination System (LOS), and Accounts modules, which are still part of ongoing development cycles.",
      achievements: [
        "Developed LMS & LOS modules handling complete loan lifecycle",
        "Built API-based integrations for remote banking services",
        "Implemented secure financial workflows and account logic",
        "Optimized database queries improving response time",
      ],
    },
    {
      company: "Cognitive Platform Solutions",
      role: "Trainee",
      duration: "Oct 2023 - Mar 2024",
      location: "Remote",
      project: "Zamtel Telecom & Digital Warehouse",
      description:
        "Worked on telecom API integrations and digital warehouse systems for inventory and supply chain management, contributing to systems that continue evolving.",
      achievements: [
        "Developed telecom API integrations for external systems",
        "Contributed to warehouse and inventory tracking modules",
        "Handled supply chain data processing workflows",
        "Supported backend development and debugging activities",
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
          Experience
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          My professional journey across FinTech, Telecom, and Enterprise Systems
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-blue-500/40 pl-6 space-y-14">

        {experiences.map((exp, index) => (
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

            {/* Role */}
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaBriefcase className="text-blue-400" />
              {exp.role}
            </h2>

            {/* Company */}
            <p className="text-blue-400 font-medium mt-1 flex items-center gap-2">
              <FaBuilding /> {exp.company}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {exp.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {exp.location}
              </span>
            </div>

            {/* Project */}
            <p className="mt-3 text-gray-300 flex items-center gap-2">
              <FaProjectDiagram className="text-blue-400" />
              <span className="font-semibold">Project:</span> {exp.project}
            </p>

            {/* Description */}
            <p className="text-gray-400 mt-2 leading-relaxed">
              {exp.description}
            </p>

            {/* Achievements */}
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Highlight */}
            <motion.div
              className="mt-4 text-sm text-blue-400 flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaRocket /> Impact-driven development
            </motion.div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
