"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation: 0 to 100% over ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 400);
          return 100;
        }
        // Increment by 1 or 2 for a smooth, elegant loading feel
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center p-4 overflow-hidden select-none"
        >
          {/* Ambient Purple Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-7 text-center">
            {/* Logo Animated Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-14 w-60 sm:w-72"
            >
              <Image
                src="/assets/titanslab-logo.webp"
                alt="Titanslab Inc."
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500"
            >
              Technology & Digital Solutions
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-56 sm:w-72 h-1.5 rounded-full bg-slate-100 overflow-hidden relative border border-slate-200 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage & Loading Status */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-700">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Loading Experience ... {progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
