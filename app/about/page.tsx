'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Coffee, 
  MapPin, 
  Calendar,
  Award,
  Users,
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "Framer Motion", level: 80, color: "from-purple-400 to-purple-600" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
      { name: "AWS", level: 65, color: "from-yellow-500 to-yellow-700" },
      { name: "Figma", level: 85, color: "from-pink-400 to-pink-600" },
      { name: "Vercel", level: 90, color: "from-gray-400 to-gray-600" }
    ]
  }
];

const stats = [
  { label: "Tahun Pengalaman", value: "2+", icon: Calendar },
  { label: "Proyek Selesai", value: "19+", icon: Code },
  { label: "Klien Puas", value: "12+", icon: Users },
  { label: "Sertifikasi", value: "6", icon: Award }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-8">
            <motion.div
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="prof.jpg" 
                alt="Alexandro Del Piero"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Alexandro Del Piero
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">Denpasar, Bali, Indonesia</span>
          </div>
          
          <p className="text-xl text-blue-400 font-medium mb-6">
            Junior Frontend Developer & UI/UX Enthusiast
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="mailto:alexandro@example.com"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-gray-800/50"
            >
              <Mail className="w-5 h-5" />
              Kontak Saya
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/alexandro" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/alexandro" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            {[{ id: "about", label: "Tentang Saya" }, { id: "skills", label: "Skill" }].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "about" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">Tentang Saya</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Saya adalah seorang Frontend Developer yang antusias dengan pengalaman lebih dari 2 tahun dalam menciptakan aplikasi web modern, responsif, dan ramah pengguna.
                    Perjalanan saya dimulai dari rasa penasaran tentang cara kerja website dan berkembang menjadi passion yang mendalam untuk menciptakan pengalaman digital yang luar biasa.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Saya fokus pada ekosistem React, terutama dengan Next.js, TypeScript, dan framework CSS modern. Saya percaya pada pentingnya menulis kode yang bersih, mudah dipelihara, dan mengikuti best practice untuk menghasilkan solusi berkualitas tinggi.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Saat tidak sedang ngoding, saya senang mengeksplorasi teknologi baru, berkontribusi ke proyek open-source, atau menikmati keindahan pantai di Bali.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-blue-400" />
                      Hal yang Saya Sukai
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <Code className="w-4 h-4 text-blue-400" />
                        Membangun UI interaktif
                      </li>
                      <li className="flex items-center gap-3">
                        <Palette className="w-4 h-4 text-blue-400" />
                        Mendesain tampilan yang presisi
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-blue-400" />
                        Kolaborasi tim yang hebat
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Fakta Singkat</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between">
                        <span>Lokasi:</span>
                        <span className="text-blue-400">Denpasar, Bali</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pengalaman:</span>
                        <span className="text-blue-400">2+ Tahun</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ketersediaan:</span>
                        <span className="text-green-400">Siap Bekerja</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Kemampuan & Teknologi</h2>
              <div className="space-y-12">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-6">{skillGroup.category}</h3>
                    <div className="space-y-6">
                      {skillGroup.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (groupIndex * 0.1) + (techIndex * 0.05), duration: 0.5 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-medium">{tech.name}</span>
                            <span className="text-gray-400 text-sm">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ delay: (groupIndex * 0.2) + (techIndex * 0.1), duration: 1, ease: "easeOut" }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Mari Bekerja Sama
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Saya selalu terbuka untuk peluang baru dan proyek yang menarik. Jika Anda memiliki ide atau ingin berdiskusi, silakan hubungi saya.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
          >
            Mulai Percakapan
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
