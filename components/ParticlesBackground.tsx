'use client';

import { useRef, useEffect } from 'react';

interface ParticlesProps {
    particleColor?: string;
    particleCount?: number;
    particleSpread?: number;
    speed?: number;
    moveParticlesOnHover?: boolean;
    particleHoverFactor?: number;
    alphaParticles?: boolean;
    size?: number;
}

export default function ParticlesBackground({
    particleColor = '#ffffff',
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    moveParticlesOnHover = true,
    particleHoverFactor = 1,
    alphaParticles = true,
    size = 1,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<any[]>([]);
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvasSize.current.w = canvas.width;
            canvasSize.current.h = canvas.height;
            initParticles();
        };

        const initParticles = () => {
            particles.current = [];
            for (let i = 0; i < particleCount; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    size: Math.random() * size + 0.5,
                    alpha: alphaParticles ? Math.random() * 0.6 + 0.1 : 1,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((p) => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Mouse interaction
                if (moveParticlesOnHover) {
                    const dx = mouse.current.x - p.x;
                    const dy = mouse.current.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (100 - distance) / 100;
                        const directionX = forceDirectionX * force * particleHoverFactor;
                        const directionY = forceDirectionY * force * particleHoverFactor;
                        p.x -= directionX;
                        p.y -= directionY;
                    }
                }

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [particleColor, particleCount, speed, moveParticlesOnHover, particleHoverFactor, alphaParticles, size]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block"
        />
    );
}
