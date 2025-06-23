'use client';

import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Solusi e-commerce full-stack dengan fitur canggih seperti manajemen inventaris real-time, pemrosesan pembayaran, dan dashboard admin.",
    longDescription: "Membangun platform e-commerce komprehensif dari awal menggunakan teknologi web modern. Fitur meliputi autentikasi pengguna, katalog produk, keranjang belanja, proses checkout, manajemen pesanan, dan integrasi pembayaran dengan Stripe.",
    image: "/e.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    year: "2024",
    status: "Live",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/delpiero/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time, fitur kolaborasi tim, dan pelacakan proyek tingkat lanjut.",
    longDescription: "Mengembangkan solusi manajemen tugas komprehensif untuk tim. Termasuk fungsi drag-and-drop, kolaborasi real-time, lampiran file, pelacakan waktu, dan pelaporan detail.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    category: "Full Stack",
    year: "2024",
    status: "Live",
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/delpiero/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard cuaca interaktif dengan prakiraan berbasis lokasi, visualisasi data historis, dan peringatan cuaca ekstrem.",
    longDescription: "Membuat aplikasi cuaca modern dengan visualisasi data yang menarik. Fitur meliputi cuaca saat ini, prakiraan 7 hari, peta interaktif, dan widget dashboard yang dapat disesuaikan.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    category: "Frontend",
    year: "2023",
    status: "Live",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/delpiero/weather",
    featured: false
  }
];

const categories = ["All", "Full Stack", "Frontend"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my work showcasing modern web development practices, 
            innovative solutions, and attention to detail in every project.
          </p>
        </motion.div>

        {/* You can continue with Featured Projects and Cards here with just 2-3 items */}

      </div>
    </div>
  );
}
