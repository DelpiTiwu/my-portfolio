'use client';

import { motion } from 'framer-motion';
import {
    SiLaravel, SiPhp, SiNodedotjs, SiTypescript, SiPostgresql,
    SiMysql, SiDocker, SiRedis, SiAmazon, SiGit, SiNginx, SiLinux
} from 'react-icons/si';

const techStack = [
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Redis", icon: SiRedis, color: "text-red-600" },
    { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
];

export default function TechMarquee() {
    return (
        <div className="w-full py-10 bg-black/20 backdrop-blur-sm border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    className="flex gap-16 pr-16"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group min-w-[80px]">
                            <tech.icon className={`w-10 h-10 ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                            <span className="text-xs text-gray-500 font-medium">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
