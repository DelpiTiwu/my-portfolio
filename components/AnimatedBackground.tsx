'use client';

import { useRef, useEffect, useState } from 'react';

interface SquaresProps {
    direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
    speed?: number;
    borderColor?: string;
    squareColor?: string;
    hoverFillColor?: string;
}

export default function AnimatedBackground({
    direction = 'diagonal',
    speed = 0.5,
    borderColor = '#333',
    squareColor = '#1a1a1a',
    hoverFillColor = '#222',
}: SquaresProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(0);
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / 40) + 1;
            numSquaresY.current = Math.ceil(canvas.height / 40) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const draw = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = Math.floor(gridOffset.current.x / 40);
            const startY = Math.floor(gridOffset.current.y / 40);

            for (let x = startX; x < startX + numSquaresX.current; x++) {
                for (let y = startY; y < startY + numSquaresY.current; y++) {
                    const squareX = x * 40 - gridOffset.current.x;
                    const squareY = y * 40 - gridOffset.current.y;

                    if (
                        hoveredSquare &&
                        Math.floor((x * 40) / 40) === hoveredSquare.x &&
                        Math.floor((y * 40) / 40) === hoveredSquare.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, 40, 40);
                    } else {
                        ctx.fillStyle = squareColor;
                        ctx.fillRect(squareX, squareY, 40, 40);
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(squareX, squareY, 40, 40);
                }
            }

            const moveAmount = speed;
            if (direction === 'diagonal') {
                gridOffset.current.x = (gridOffset.current.x + moveAmount) % 40;
                gridOffset.current.y = (gridOffset.current.y + moveAmount) % 40;
            } else if (direction === 'up') {
                gridOffset.current.y = (gridOffset.current.y + moveAmount) % 40;
            } else if (direction === 'down') {
                gridOffset.current.y = (gridOffset.current.y - moveAmount) % 40;
            } else if (direction === 'left') {
                gridOffset.current.x = (gridOffset.current.x + moveAmount) % 40;
            } else if (direction === 'right') {
                gridOffset.current.x = (gridOffset.current.x - moveAmount) % 40;
            }

            requestRef.current = requestAnimationFrame(draw);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const startX = Math.floor(gridOffset.current.x / 40);
            const startY = Math.floor(gridOffset.current.y / 40);

            const hoveredX = Math.floor((mouseX + gridOffset.current.x) / 40);
            const hoveredY = Math.floor((mouseY + gridOffset.current.y) / 40);

            setHoveredSquare({ x: hoveredX, y: hoveredY });
        };

        const handleMouseLeave = () => {
            setHoveredSquare(null);
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        requestRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareColor]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full border-none block"
        />
    );
}
