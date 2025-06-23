'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <Image
        src="/robot.png"
        alt="robot"
        width={40}
        height={40}
        className="drop-shadow-xl brightness-125 saturate-150"
      />
    </div>
  );
}
