'use client';

import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

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
    description: "Full-stack e-commerce solution with advanced features like real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce platform from scratch using modern web technologies. Features include user authentication, product catalog, shopping cart, checkout process, order management, and Stripe payment integration.",
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
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    longDescription: "Developed a comprehensive task management solution for teams. Includes drag-and-drop functionality, real-time collaboration, file attachments, time tracking, and detailed reporting.",
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
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and extreme weather alerts.",
    longDescription: "Created a modern weather application with engaging data visualization. Features include current weather, 7-day forecast, interactive maps, and customizable dashboard widgets.",
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
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground
          particleColor="#3b82f6"
          particleCount={80}
          speed={0.2}
          size={1.2}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

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
