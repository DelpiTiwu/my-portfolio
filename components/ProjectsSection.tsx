'use client';

import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Web Travel NTT",
        description: "A comprehensive travel platform for Nusa Tenggara Timur, featuring destination guides, booking systems, and interactive maps.",
        longDescription: "Developed a visually stunning travel website for NTT tourism. Utilizes Vue.js for a reactive user interface, showcasing the beauty of the region through immersive galleries and interactive elements.",
        image: "/api/placeholder/400/250",
        technologies: ["Vue.js", "Tailwind CSS", "Leaflet.js", "Vite"],
        category: "Frontend",
        year: "2024",
        status: "Live",
        liveUrl: "https://travel-nusa-tenggara-timur.vercel.app",
        githubUrl: "https://github.com/delpiero/travel-ntt",
        featured: true
    }
];

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A collection of my work showcasing modern web development practices,
                        innovative solutions, and attention to detail in every project.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span key={tech} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
