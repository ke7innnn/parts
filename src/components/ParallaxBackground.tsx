"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ParallaxBackgroundProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number; // How much it moves relative to scroll. Positive = moves down, negative = moves up.
    opacity?: number;
}

export default function ParallaxBackground({
    src,
    alt,
    className = "",
    speed = 0.5,
    opacity = 10,
}: ParallaxBackgroundProps) {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setOffsetY(window.scrollY * speed);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial call to set correct position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
            <div
                className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
                style={{
                    transform: `translate3d(0, ${offsetY}px, 0)`,
                    opacity: opacity / 100,
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    unoptimized // Crucial for maintaining crisp transparent edges on PNGs without Next.js compression artifacts
                />
            </div>
        </div>
    );
}
