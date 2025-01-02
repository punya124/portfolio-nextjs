"use client"
import { useState, useEffect } from 'react';

const LetterGrid = () => {
    const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

    // Define a set of random characters (letters, numbers, and symbols)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Function to generate a random character from the list
    const getRandomCharacter = () => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    };

    // Function to update the grid size based on window dimensions
    const updateGridSize = () => {
        const cols = Math.floor(window.innerWidth / 40); // 40px per cell
        const rows = Math.floor(window.innerHeight / 40); // 40px per cell
        setGridSize({ rows, cols });
    };

    // Update grid size on window resize
    useEffect(() => {
        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => {
            window.removeEventListener('resize', updateGridSize);
        };
    }, []);

    // Get the position of the hovered cell
    const handleMouseEnter = (row: number, col: number) => {
        setHoveredCell({ row, col });
    };

    const handleMouseLeave = () => {
        setHoveredCell(null);
    };

    useEffect(() => {
        console.log('Hovered Cell State:', hoveredCell); // Log hovered cell state
    }, [hoveredCell]);

    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
                gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                height: '100vh',
            }}
        >
            <div
                className="grid w-full h-full"
                style={{
                    gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                }}
            >
                {Array.from({ length: gridSize.rows }).map((_, rowIndex) =>
                    Array.from({ length: gridSize.cols }).map((_, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="relative w-full h-full flex justify-center items-center"
                            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span
                                className={`cursor-default transition-opacity duration-100 ease-out text-[#32CD32] ${hoveredCell?.row === rowIndex && hoveredCell?.col === colIndex
                                    ? 'opacity-75 transition-none'
                                    : 'opacity-5' //change to 0 to revert to trail effect
                                    }`}
                            >
                                {getRandomCharacter()} {/* Display a random character */}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LetterGrid;
