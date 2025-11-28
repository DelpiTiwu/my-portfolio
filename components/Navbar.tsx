'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '#home', icon: Home },
  { name: 'About', path: '#about', icon: User },
  { name: 'Projects', path: '#projects', icon: Briefcase },
  { name: 'Contact', path: '#contact', icon: Mail },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/5 shadow-lg shadow-purple-500/10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full group-hover:rotate-180 transition-transform duration-500">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide group-hover:text-blue-400 transition-colors">
            DelpiTiwu
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button (Simple placeholder for now, or hidden if not requested explicitly, but good to have) */}
        <div className="md:hidden text-gray-400">
          {/* You might want to add a mobile menu here later */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
