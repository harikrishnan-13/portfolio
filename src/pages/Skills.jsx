import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
  FaTools,
  FaChartBar,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiPython,
  SiNginx,
  SiFastapi,
  SiApachesuperset,
  SiBootstrap,
  
} from "react-icons/si";

import { AiFillApi } from "react-icons/ai";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Django REST", icon: <SiDjango /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "REST API", icon: <AiFillApi /> },
        { name: "SOAP", icon: <AiFillApi /> },
        { name: "Nginx", icon: <SiNginx /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "SQL Server", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools & Analytics",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Apache Superset", icon: <SiApachesuperset /> },
        { name: "Power BI", icon: <FaChartBar /> },
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
          Skills
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
          Technologies and tools I use to design, build, and scale modern applications
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-blue-500/40 pl-6 space-y-14">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            {/* Timeline Dot */}
            <motion.div
              className="absolute -left-9 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>

            {/* Category Title */}
            <h2 className="text-xl font-semibold flex items-center gap-3">
              <span className="text-blue-400 text-lg">{category.icon}</span>
              {category.title}
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="flex items-center gap-2 bg-gray-900/70 border border-gray-700 px-3 py-2 rounded-lg text-sm hover:border-blue-500 hover:bg-blue-600/20 transition"
                >
                  <span className="text-blue-400">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

      {/* Bottom Accent */}
      <motion.div
        className="mt-20 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-sm">Continuously learning and adapting to new technologies</p>
      </motion.div>
    </div>
  );
}
