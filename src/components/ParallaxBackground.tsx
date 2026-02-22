"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxBackgroundProps {
    src: string;
    alt: string;
    /** 0-100 opacity. Default 15 */
    opacity?: number;
    /** Parallax speed — fraction of section scroll. Default 0.15 */
    speed?: number;
    /** Optional extra className on the wrapper */
    className?: string;
}

/**
 * A full-bleed section background that stretches edge-to-edge (left to right,
 * top to bottom) and scrolls at a slightly different speed than the page for
 * a lightweight parallax feel.
 *
 * Uses `object-cover` so it always fills the section regardless of image ratio.
 * The `mix-blend-multiply` trick makes white/light backgrounds appear transparent.
 */
export default function ParallaxBackground({
    src,
    alt,
    opacity = 15,
    speed = 0.15,
    className = "",
}: ParallaxBackgroundProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        let raf: number | null = null;

        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                if (wrapperRef.current) {
                    const rect = wrapperRef.current.getBoundingClientRect();
                    // How far the section has scrolled relative to the viewport centre
                    setOffsetY((rect.top + rect.height / 2 - window.innerHeight / 2) * speed);
                }
                raf = null;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // set initial position

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, [speed]);

    return (
        <div
            ref={wrapperRef}
            aria-hidden="true"
            className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
        >
            <div
                className="absolute inset-0"
                style={{
                    opacity: opacity / 100,
                    // Extend 10% above/below to give parallax room to move without exposing gaps
                    top: "-10%",
                    bottom: "-10%",
                    left: 0,
                    right: 0,
                    transform: `translate3d(0, ${offsetY}px, 0)`,
                    willChange: "transform",
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover mix-blend-multiply"
                    sizes="100vw"
                    unoptimized
                />
            </div>
        </div>
    );
}
