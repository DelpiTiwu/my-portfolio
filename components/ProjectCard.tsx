'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-[200px] transition duration-300 group-hover:brightness-50"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Overlay muncul saat hover */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <Link
          href={link}
          target="_blank"
          className="text-white border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          👁️ Lihat Proyek
        </Link>
      </div>
    </motion.div>
  );
}
