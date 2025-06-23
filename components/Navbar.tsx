'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white w-full flex justify-center gap-6 py-4 sticky top-0 z-50 shadow-md">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>

      <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
  );
};

export default Navbar;
