'use client';

import { useEffect, useRef } from 'react';

export default function GridBeamBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const beams: Beam[] = [];
        const gridSpacing = 50;

        class Beam {
            x: number;
            y: number;
            speed: number;
            length: number;
            color: string;
            horizontal: boolean;

            constructor() {
                this.horizontal = Math.random() > 0.5;
                if (this.horizontal) {
                    this.x = -100;
                    this.y = Math.floor(Math.random() * (height / gridSpacing)) * gridSpacing;
                    this.speed = Math.random() * 3 + 2;
                    this.length = Math.random() * 100 + 50;
                } else {
                    this.x = Math.floor(Math.random() * (width / gridSpacing)) * gridSpacing;
                    this.y = -100;
                    this.speed = Math.random() * 3 + 2;
                    this.length = Math.random() * 100 + 50;
                }
                this.color = Math.random() > 0.5 ? '#3b82f6' : '#a855f7'; // Blue or Purple
            }

            update() {
                if (this.horizontal) {
                    this.x += this.speed;
                } else {
                    this.y += this.speed;
                }
            }

            draw() {
                ctx!.beginPath();
                const gradient = ctx!.createLinearGradient(
                    this.horizontal ? this.x : this.x,
                    this.horizontal ? this.y : this.y,
                    this.horizontal ? this.x + this.length : this.x,
                    this.horizontal ? this.y : this.y + this.length
                );
                gradient.addColorStop(0, 'transparent');
                gradient.addColorStop(0.5, this.color);
                gradient.addColorStop(1, 'transparent');

                ctx!.strokeStyle = gradient;
                ctx!.lineWidth = 2;
                ctx!.moveTo(this.x, this.y);
                if (this.horizontal) {
                    ctx!.lineTo(this.x + this.length, this.y);
                } else {
                    ctx!.lineTo(this.x, this.y + this.length);
                }
                ctx!.stroke();
            }
        }

        const initBeams = () => {
            for (let i = 0; i < 15; i++) {
                beams.push(new Beam());
            }
        };

        const animate = () => {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            // Draw Grid
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 1;

            for (let x = 0; x <= width; x += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Update and Draw Beams
            if (Math.random() < 0.05) {
                beams.push(new Beam());
            }

            for (let i = beams.length - 1; i >= 0; i--) {
                beams[i].update();
                beams[i].draw();

                if (beams[i].x > width + 200 || beams[i].y > height + 200) {
                    beams.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        initBeams();
        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
