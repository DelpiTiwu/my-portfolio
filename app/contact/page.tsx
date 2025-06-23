'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <motion.div
      className="max-w-xl mx-auto py-16 px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6">📬 Hubungi Saya</h1>
      <p className="text-gray-300 mb-8">Klik ikon di bawah untuk menghubungi saya langsung:</p>

      <div className="flex justify-center gap-8 text-3xl">
        <a
          href="https://www.instagram.com/delpiero_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:alexandro@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
}
