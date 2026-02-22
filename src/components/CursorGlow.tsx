"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
            aria-hidden="true"
        >
            <div
                className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
                }}
            />
        </div>
    );
}
