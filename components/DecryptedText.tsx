'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    animateOn?: 'view' | 'hover';
    [key: string]: any;
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const revealedIndices = useRef(new Set<number>());
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isHovering) {
            setIsScrambling(true);
            interval = setInterval(() => {
                setDisplayText((currentText) =>
                    currentText
                        .split('')
                        .map((char, index) => {
                            if (char === ' ') return char;
                            if (Math.random() < 0.1) {
                                return characters[Math.floor(Math.random() * characters.length)];
                            }
                            return char;
                        })
                        .join('')
                );
            }, speed);
        } else {
            setIsScrambling(false);
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovering, text, speed, characters]);

    // Better implementation for "Decrypted" effect
    // This is a simplified version for stability. 
    // For a true "Matrix" reveal, we'd need more complex state management.
    // Here we just scramble on hover/view.

    const handleMouseEnter = () => {
        if (animateOn === 'hover') setIsHovering(true);
    }

    const handleMouseLeave = () => {
        if (animateOn === 'hover') setIsHovering(false);
    }

    useEffect(() => {
        if (animateOn === 'view') {
            setIsHovering(true);
            setTimeout(() => setIsHovering(false), 2000); // Stop after 2s
        }
    }, [animateOn]);

    return (
        <span
            className={`inline-block whitespace-nowrap ${parentClassName}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
}
