import { motion } from "framer-motion";
import {
  FaReact,
  FaDatabase,
  FaServer,
  FaCode,
  FaBolt,
  FaUser,
  FaRocket,
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaCogs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiDjango,
} from "react-icons/si";

export default function About() {
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
          About Me
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Passionate FinTech Engineer focused on building scalable, high-performance systems
        </p>
      </motion.div>

      {/* Hero Card */}
      <motion.div
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-blue-500/10 transition relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-start gap-4">
          <FaUser className="text-blue-400 text-2xl mt-1" />
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Hari Krishnan</span>, a <span className="text-blue-400">FinTech Engineer</span> with 2.5+ years of experience building enterprise-grade applications.
          </p>
        </div>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Experienced across domains including <span className="text-blue-400">Banking (LMS, LOS, Accounts)</span>, <span className="text-blue-400">Telecommunication</span>, <span className="text-blue-400">Supply Chain</span>, and <span className="text-blue-400">HRMS</span> systems.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Specialized in backend development, API integrations, and database optimization while delivering clean and modern frontend experiences using React.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          {["FinTech Specialist", "API Expert", "Backend Developer", "System Design"].map((tag, i) => (
            <span key={i} className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Experience Highlights */}
      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
        {[
          { icon: <FaRocket />, title: "Performance", desc: "Built and optimized scalable backend systems" },
          { icon: <FaBriefcase />, title: "Enterprise", desc: "Hands-on experience with real-world enterprise solutions" },
          { icon: <FaCogs />, title: "Engineering", desc: "Strong system design and architecture skills" },
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 transition">
            <div className="text-blue-400 text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
        {[
          { icon: <FaChartLine />, title: "Growth", desc: "Improved system performance and scalability" },
          { icon: <FaLightbulb />, title: "Innovation", desc: "Designed efficient solutions for complex problems" },
          { icon: <FaBolt />, title: "Speed", desc: "Delivered high-performance APIs with low latency" },
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 border border-gray-800 p-6 rounded-xl text-center hover:border-purple-500 transition">
            <div className="text-purple-400 text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 transition">
          <FaReact className="text-4xl text-blue-400 mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Frontend</h2>
          <p className="text-gray-400 text-sm leading-relaxed">React.js, Tailwind CSS, modern UI development</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 transition">
          <FaServer className="text-4xl text-blue-400 mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Backend</h2>
          <p className="text-gray-400 text-sm leading-relaxed">Django, FastAPI, scalable API development</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 transition">
          <FaDatabase className="text-4xl text-blue-400 mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Database</h2>
          <p className="text-gray-400 text-sm leading-relaxed">PostgreSQL, MySQL, performance optimization</p>
        </motion.div>
      </div>

      {/* Core Expertise */}
      <div className="mt-16 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Core Expertise</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: <FaCode />, text: "Banking Systems (LMS, LOS, Accounts)" },
            { icon: <FaBolt />, text: "API Development & Integration" },
            { icon: <SiJavascript />, text: "Modern JavaScript (ES6+)" },
            { icon: <SiMongodb />, text: "NoSQL & Relational Databases" },
            { icon: <SiMysql />, text: "SQL Optimization & Query Design" },
            { icon: <SiDjango />, text: "Enterprise Backend Systems" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex items-center gap-3 bg-white/5 border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition">
              <span className="text-blue-400 text-lg">{item.icon}</span>
              <span className="text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <motion.div
        className="mt-20 text-center max-w-3xl mx-auto text-gray-400 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="leading-relaxed">
          Focused on building reliable, scalable, and impactful software solutions that solve real-world business problems.
        </p>
      </motion.div>
    </div>
  );
}