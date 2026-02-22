"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] z-[100] origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    );
}
