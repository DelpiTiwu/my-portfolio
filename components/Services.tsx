'use client';

import { motion } from 'framer-motion';
import { Server, Database, Cloud, Lock, Zap, Globe } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
    {
        title: "API Development",
        description: "Designing RESTful & GraphQL APIs that are secure, documented, and easy to consume.",
        icon: Server,
        color: "text-blue-400"
    },
    {
        title: "Database Architecture",
        description: "Optimizing schema design, indexing strategies, and query performance for high-scale data.",
        icon: Database,
        color: "text-green-400"
    },
    {
        title: "Cloud Infrastructure",
        description: "Deploying and managing scalable applications on AWS, DigitalOcean, or Google Cloud.",
        icon: Cloud,
        color: "text-purple-400"
    },
    {
        title: "Security & Auth",
        description: "Implementing JWT, OAuth, and role-based access control to protect sensitive data.",
        icon: Lock,
        color: "text-red-400"
    },
    {
        title: "Performance Tuning",
        description: "Identifying bottlenecks and optimizing code for maximum speed and efficiency.",
        icon: Zap,
        color: "text-yellow-400"
    },
    {
        title: "Microservices",
        description: "Breaking down monolithic apps into maintainable, independent services.",
        icon: Globe,
        color: "text-cyan-400"
    }
];

export default function Services() {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Technical Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Specialized backend solutions tailored for scalability, security, and performance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <SpotlightCard className="h-full p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
                                <div className={`p-3 rounded-lg bg-gray-800/50 w-fit mb-6 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
