'use client';

import { motion } from 'framer-motion';
import {
    SiLaravel, SiPhp, SiNodedotjs, SiTypescript, SiPostgresql,
    SiMysql, SiDocker, SiRedis, SiAmazon, SiGit, SiNginx, SiLinux,
    SiGraphql, SiMongodb, SiExpress
} from 'react-icons/si';

const InnerOrbitSkills = [
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
];

const MiddleOrbitSkills = [
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Redis", icon: SiRedis, color: "text-red-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
];

const OuterOrbitSkills = [
    { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
];

export default function SkillsOrbit() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">

            {/* Central Core */}
            <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                <span className="text-xl font-bold text-white">Backend</span>
                <span className="text-sm text-blue-300">Core</span>
            </div>

            {/* Inner Orbit */}
            <motion.div
                className="absolute z-10 w-[250px] h-[250px] rounded-full border border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {InnerOrbitSkills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            transform: `rotate(${index * (360 / InnerOrbitSkills.length)}deg) translateY(-125px) rotate(-${index * (360 / InnerOrbitSkills.length)}deg)`
                        }}
                    >
                        <motion.div
                            className="group relative flex items-center justify-center w-12 h-12 bg-gray-900/80 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                        >
                            <skill.icon className={`w-6 h-6 ${skill.color}`} />
                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                                {skill.name}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* Middle Orbit */}
            <motion.div
                className="absolute z-10 w-[400px] h-[400px] rounded-full border border-blue-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {MiddleOrbitSkills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            transform: `rotate(${index * (360 / MiddleOrbitSkills.length)}deg) translateY(-200px) rotate(-${index * (360 / MiddleOrbitSkills.length)}deg)`
                        }}
                    >
                        <motion.div
                            className="group relative flex items-center justify-center w-14 h-14 bg-gray-900/80 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                        >
                            <skill.icon className={`w-7 h-7 ${skill.color}`} />
                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                                {skill.name}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* Outer Orbit */}
            <motion.div
                className="absolute z-10 w-[550px] h-[550px] rounded-full border border-blue-500/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {OuterOrbitSkills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            transform: `rotate(${index * (360 / OuterOrbitSkills.length)}deg) translateY(-275px) rotate(-${index * (360 / OuterOrbitSkills.length)}deg)`
                        }}
                    >
                        <motion.div
                            className="group relative flex items-center justify-center w-16 h-16 bg-gray-900/80 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                        >
                            <skill.icon className={`w-8 h-8 ${skill.color}`} />
                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                                {skill.name}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

        </div>
    );
}
