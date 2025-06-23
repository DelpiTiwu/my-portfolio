'use client';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Professional Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-blue-400 text-lg font-medium mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Delpiero
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Frontend Developer
          </h2>
        </motion.div>

        {/* Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Antusias dalam menciptakan aplikasi web modern, responsif, dan berkinerja tinggi.
          Spesialis dalam ekosistem React dengan keahlian di Next.js, TypeScript, dan Tailwind CSS.
        </motion.p>

        {/* Professional CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            View My Work
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 text-gray-300 hover:text-white text-lg font-medium hover:bg-gray-800/50"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/delpiero"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/delpiero"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:delpiero@email.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
          >
            <Download className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}