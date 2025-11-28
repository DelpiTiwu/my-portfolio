'use client';

import { motion } from 'framer-motion';
import {
    Code,
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
import SkillsOrbit from '@/components/SkillsOrbit';

const skills = [
    {
        category: "Backend & API",
        technologies: [
            { name: "Laravel", level: 80, color: "from-blue-400 to-blue-600" },
            { name: "Node.js", level: 79, color: "from-gray-400 to-gray-600" },
            { name: "MySql", level: 89, color: "from-blue-500 to-blue-700" },
            { name: "Postgresql", level: 76, color: "from-cyan-400 to-cyan-600" },
        ]
    },
    {
        category: "Tools & Others",
        technologies: [
            { name: "Html & CSS", level: 90, color: "from-orange-400 to-orange-600" },
            { name: "Java Script", level: 70, color: "from-blue-500 to-blue-700" },
        ]
    }
];

const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Done", value: "4+", icon: Code },
    { label: "Happy Clients", value: "6+", icon: Users },
    { label: "Certifications", value: "0", icon: Award }
];

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative inline-block mb-8">
                        <motion.div
                            className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/25"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="2.jpg"
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

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Denpasar, Bali, Indonesia</span>
                    </div>

                    <p className="text-xl text-blue-400 font-medium mb-6">
                        Junior Backend Developer & API Specialist
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
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/DelpiTiwu" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/makarius-delpiero-4bb705349/" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                        {[{ id: "about", label: "About Me" }, { id: "skills", label: "Skills" }].map((tab) => (
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
                                    <p className="text-gray-300 leading-relaxed">
                                        I am an enthusiastic Backend Developer with over 2 years of experience in building APIs, scalable backend systems, and modern service integrations.
                                        My journey began with curiosity about how data is processed behind the scenes and evolved into a passion for creating efficient and reliable backend solutions.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        I focus on backend development, particularly with Node.js, Express, TypeScript, and modern API integrations. I believe in the importance of writing efficient, scalable code and following best practices to deliver high-quality, reliable backend solutions.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, or enjoying the beauty of Bali's mountains.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <Coffee className="w-5 h-5 text-blue-400" />
                                            Things I Love
                                        </h3>
                                        <ul className="space-y-3 text-gray-300">
                                            <li className="flex items-center gap-3">
                                                <Code className="w-4 h-4 text-blue-400" />
                                                Building efficient backend systems
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Code className="w-4 h-4 text-blue-400" />
                                                Developing reliable backend architectures
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                Great team collaboration
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                                        <div className="space-y-3 text-gray-300">
                                            <div className="flex justify-between">
                                                <span>Location:</span>
                                                <span className="text-blue-400">Denpasar, Bali</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Experience:</span>
                                                <span className="text-blue-400">2+ Years</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Availability:</span>
                                                <span className="text-green-400">Available for Work</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "skills" && (
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-center items-center min-h-[600px]">
                                <SkillsOrbit />
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
