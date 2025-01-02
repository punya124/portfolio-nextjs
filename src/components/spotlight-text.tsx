"use client"
import React, { useState, useEffect } from "react";

const SpotlightText: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mousemove
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        // Add event listener for mouse movement
        window.addEventListener("mousemove", handleMouseMove);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Dynamic mask style based on cursor position
    const maskStyle = {
        maskImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 20%)`,
        WebkitMaskImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 25%)`,
    };

    return (
        <div className="relative h-screen w-full">
            {/* First div: "Create Novelty" */}
            <div className="absolute h-screen w-screen bg-background text-foreground">
                <div className="absolute top-24 left-12 text-[8rem] md:text-[10rem] font-extrabold tracking-widest">
                    CREATE
                </div>
                <div className="absolute bottom-24 right-12 text-[8rem] md:text-[10rem] font-extrabold tracking-widest text-right">
                    NOVELTY
                </div>
            </div>

            {/* Second div: "Break Conventions" with dynamic circular mask */}
            <div
                className="h-screen w-screen absolute bg-foreground text-background"
                style={maskStyle}
            >
                <div className="absolute top-24 left-12 text-[8rem] md:text-[10rem] font-extrabold tracking-widest">
                    BREAK
                </div>
                <div className="absolute bottom-24 right-12 text-[8rem] md:text-[10rem] font-extrabold tracking-widest text-right">
                    CONVENTIONS
                </div>
            </div>
        </div>
    );
};

export default SpotlightText;
