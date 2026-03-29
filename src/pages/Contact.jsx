import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaRocket,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0omu3u",
        "template_pdc3rtb",
        form.current,
        "KRaPlshTIecBV1oyg"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <div className="min-h-screen px-6 py-12 text-white relative overflow-hidden">

      <Toaster position="top-right" />

      {/* 🔥 Background Glow */}
      <div className="pointer-events-none absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="pointer-events-none absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* 🔥 Header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h1>

        <p className="text-gray-400 mt-3 flex items-center justify-center gap-2">
          Let’s build something amazing together
          <FaRocket className="text-blue-400" />
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                harikrishnan13112002@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                Chennai, India
              </p>

            </div>
          </div>

          {/* Social */}
          <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Connect With Me
            </h2>

            <div className="flex gap-6 text-2xl">

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
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Input Style Shared */}
            {[
              {
                icon: <FaUser />,
                name: "user_name",
                type: "text",
                placeholder: "Your Name"
              },
              {
                icon: <FaEnvelope />,
                name: "user_email",
                type: "email",
                placeholder: "Your Email"
              }
            ].map((field, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-900 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500"
              >
                <span className="text-gray-400">{field.icon}</span>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-3 bg-transparent text-white placeholder-gray-500 focus:outline-none autofill:bg-gray-900"
                  required
                />
              </div>
            ))}

            {/* Message */}
            <div className="flex bg-gray-900 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaCommentDots className="text-gray-400 mt-3" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg shadow-lg hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}