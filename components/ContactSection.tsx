'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const contactOptions = [
    {
        id: 'whatsapp',
        title: 'WhatsApp',
        value: '+62 822-1135-8190',
        icon: FaWhatsapp,
        color: 'text-green-500',
        bgHover: 'group-hover:bg-green-500/10',
        borderHover: 'group-hover:border-green-500/50',
        link: 'https://wa.me/6282211358190',
        action: 'Chat Now'
    },
    {
        id: 'email',
        title: 'Email',
        value: 'alexandrodelpiero306@gmail.com',
        icon: FaEnvelope,
        color: 'text-blue-400',
        bgHover: 'group-hover:bg-blue-400/10',
        borderHover: 'group-hover:border-blue-400/50',
        link: 'mailto:alexandrodelpiero306@gmail.com',
        action: 'Send Email'
    },
    {
        id: 'instagram',
        title: 'Instagram',
        value: '@delpi_tiwu',
        icon: FaInstagram,
        color: 'text-pink-500',
        bgHover: 'group-hover:bg-pink-500/10',
        borderHover: 'group-hover:border-pink-500/50',
        link: 'https://www.instagram.com/delpi_tiwu',
        action: 'Follow Me'
    }
];

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I am always open to discussing new projects, creative ideas, or collaboration opportunities.
                        Feel free to reach out via the platforms below.
                    </p>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactOptions.map((contact, index) => (
                        <motion.a
                            key={contact.id}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative p-8 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${contact.borderHover}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={`absolute inset-0 rounded-2xl transition-colors duration-300 ${contact.bgHover}`}></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`p-4 rounded-full bg-gray-900/50 mb-6 ${contact.color}`}>
                                    <contact.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 break-all">{contact.value}</p>

                                <div className={`flex items-center gap-2 text-sm font-medium ${contact.color}`}>
                                    {contact.action}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Additional Info / Footer */}
                <motion.div
                    className="text-center border-t border-gray-800 pt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span>Denpasar, Bali, Indonesia</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>alexandrodelpiero306@gmail.com</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
