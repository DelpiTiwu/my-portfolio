'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import GridBeamBackground from '@/components/GridBeamBackground';
import TypewriterText from '@/components/TypewriterText';
import DecryptedText from '@/components/DecryptedText';
import SpotlightCard from '@/components/SpotlightCard';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import ApiPlayground from '@/components/ApiPlayground';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black text-white overflow-hidden">

      {/* Interactive Grid Beam Background */}
      <GridBeamBackground />

      {/* Overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      <div className="relative z-10">

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
              Available for Freelance & Remote Work
            </div>

            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-4">
              <TypewriterText text="Hello, I'm" delay={500} />
            </h2>

            <div className="mb-6">
              <DecryptedText
                text="Makarius Delpiero"
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                animateOn="view"
                revealDirection="center"
              />
            </div>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Backend Developer specializing in building robust <span className="text-blue-400">APIs</span>,
              scalable <span className="text-purple-400">Microservices</span>, and secure
              <span className="text-pink-400"> Database Architectures</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#projects">
                <SpotlightCard className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                  View My Work <ArrowRight className="w-4 h-4" />
                </SpotlightCard>
              </a>
              <a href="#contact" className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 bg-black/50 backdrop-blur-sm">
                Contact Me
              </a>
            </div>

            <div className="flex justify-center gap-6 text-gray-400">
              <a href="https://github.com/DelpiTiwu" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/makarius-delpiero-4bb705349/" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:alexandrodelpiero306@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Marquee */}
        <TechMarquee />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Interactive API Playground */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive API Playground</h2>
              <p className="text-gray-400">Test my backend skills live. Send requests to mock endpoints.</p>
            </div>
            <ApiPlayground />
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-900 bg-black/80 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} DelpiTiwu. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </footer>

      </div>
    </main>
  );
}