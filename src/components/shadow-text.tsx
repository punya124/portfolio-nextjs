"use client";
import React, { useEffect, useState, useRef } from "react";

const InteractiveShadowText: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateShadow = () => {
        if (!textRef.current) return "0 0 5px rgba(0, 0, 0, 0.8)"; // Default shadow

        const rect = textRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = (-cursorPosition.x + centerX) / 50; // Divide to reduce intensity
        const offsetY = (-cursorPosition.y + centerY) / 50;

        return `${offsetX}px ${offsetY}px 5px rgba(127, 127, 127, 0.8)`;
    };

    return (
        <span
            ref={textRef}
            className="lg:text-[12rem] md:text-[6rem] md:text-foreground w-full tracking-widest absolute font-bold text-center lg:text-background"
            style={{
                filter: `drop-shadow(${calculateShadow()})`,
            }}
        >
            TECH STACK
        </span>
    );
};

export default InteractiveShadowText;
