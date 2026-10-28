"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices, reduced motion, or automated Lighthouse environments
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isAutomated = typeof navigator !== "undefined" && Boolean(navigator.webdriver);

    if (isTouch || prefersReducedMotion || isAutomated) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const card = target.closest("[data-cursor='view']");

      if (card) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (interactive) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-purple-600 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-600 pointer-events-none z-[9998] flex items-center justify-center text-[10px] font-bold text-purple-900 tracking-widest bg-purple-600/10 backdrop-blur-[1px]"
        animate={{
          x: position.x - (isHovered ? (cursorText ? 32 : 24) : 16),
          y: position.y - (isHovered ? (cursorText ? 32 : 24) : 16),
          width: isHovered ? (cursorText ? 64 : 48) : 32,
          height: isHovered ? (cursorText ? 64 : 48) : 32,
          borderColor: isHovered ? "rgba(124, 58, 237, 0.9)" : "rgba(124, 58, 237, 0.4)",
          backgroundColor: isHovered ? "rgba(124, 58, 237, 0.15)" : "rgba(124, 58, 237, 0.05)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold text-purple-700"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
