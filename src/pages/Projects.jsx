import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCheckCircle,
  FaUserCog,
  FaChartLine,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Zamtel DCP - Telecom System",
      domain: "Telecommunication",
      description:
        "Providing production support and backend handling for telecom services including recharge systems, dealer operations, and stock workflows.",
      highlights: [
        "Handled customer recharge & top-up operations",
        "Managed stock delivery and open stock issuance",
        "Provided dealer-level support and issue resolution",
        "Worked on real-time telecom service workflows",
        "Ensured system stability through continuous support",
      ],
    },
    {
      title: "Zamtel SCM - Digital Warehouse",
      domain: "Supply Chain",
      description:
        "Worked on digital warehouse system managing telecom inventory, stock movement, and supply chain workflows.",
      highlights: [
        "Developed and supported inventory tracking modules",
        "Handled stock movement and warehouse operations",
        "Managed supply chain data workflows",
        "Improved visibility of stock and asset tracking",
      ],
    },
    {
      title: "Xtenda Zambia - Banking System",
      domain: "FinTech (LMS, LOS, Accounts)",
      description:
        "Developed and supported enterprise banking modules including loan processing, account systems, and integrations.",
      highlights: [
        "Developed LMS & LOS modules handling full loan lifecycle",
        "Worked on accounts module with financial logic implementation",
        "Built multiple APIs for external system integrations",
        "Created reports for business and operational tracking",
        "Handled both development and production support activities",
      ],
    },
    {
      title: "HRMS System - Captiv",
      domain: "Enterprise HRMS",
      description:
        "Developing HRMS modules focused on task management, project tracking, and workforce operations.",
      highlights: [
        "Built task and project management modules",
        "Implemented resource allocation and assignment logic",
        "Developed time logging and timesheet systems",
        "Created multiple reports for tracking productivity",
        "Improved workflow efficiency through automation",
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
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real-world systems across Telecom, FinTech, Supply Chain & Enterprise domains
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >

            {/* Title */}
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaProjectDiagram className="text-blue-400" />
              {proj.title}
            </h2>

            {/* Domain */}
            <p className="text-blue-400 mt-1 flex items-center gap-2">
              <FaUserCog /> {proj.domain}
            </p>

            {/* Description */}
            <p className="text-gray-400 mt-3 leading-relaxed">
              {proj.description}
            </p>

            {/* Highlights */}
            <ul className="mt-5 space-y-2">
              {proj.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                >
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Impact Footer */}
            <motion.div
              className="mt-4 text-sm text-purple-400 flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaChartLine /> Real-world production impact
            </motion.div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
