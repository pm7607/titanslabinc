"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Globe, Sparkles } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
}

export default function Hero3DCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string>("nextjs");

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // 3D parameters
    const SPHERE_RADIUS = 135;
    const NUM_LATITUDES = 8;
    const NUM_LONGITUDES = 12;
    const points: Point3D[] = [];

    // Generate sphere vertices
    for (let i = 0; i <= NUM_LATITUDES; i++) {
      const lat = (Math.PI / NUM_LATITUDES) * i - Math.PI / 2;
      const r = SPHERE_RADIUS * Math.cos(lat);
      const y = SPHERE_RADIUS * Math.sin(lat);

      const count = Math.max(1, Math.round(NUM_LONGITUDES * Math.cos(lat)));
      for (let j = 0; j < count; j++) {
        const lon = ((Math.PI * 2) / count) * j;
        const x = r * Math.cos(lon);
        const z = r * Math.sin(lon);

        // Palette: Purple primary, accent violet, and occasional cyan
        const isCyan = (i + j) % 7 === 0;
        const isViolet = (i + j) % 3 === 0;
        const color = isCyan ? "#38bdf8" : isViolet ? "#a855f7" : "#7c3aed";

        points.push({
          x,
          y,
          z,
          radius: isCyan ? 2.8 : 2.0,
          color,
        });
      }
    }

    // Outer orbital rings vertices
    const ORBIT_POINTS = 36;
    const orbitRing1: Point3D[] = [];
    const orbitRing2: Point3D[] = [];
    const RING_RADIUS = SPHERE_RADIUS * 1.35;

    for (let i = 0; i < ORBIT_POINTS; i++) {
      const angle = (Math.PI * 2 * i) / ORBIT_POINTS;
      orbitRing1.push({
        x: RING_RADIUS * Math.cos(angle),
        y: (RING_RADIUS * Math.sin(angle)) * 0.35,
        z: RING_RADIUS * Math.sin(angle),
        radius: 1.5,
        color: "#c084fc",
      });

      orbitRing2.push({
        x: (RING_RADIUS * Math.cos(angle)) * 0.4,
        y: RING_RADIUS * Math.sin(angle),
        z: RING_RADIUS * Math.cos(angle),
        radius: 1.5,
        color: "#60a5fa",
      });
    }

    // Rotation state
    let rotX = 0.2;
    let rotY = 0;
    let targetRotX = 0.2;
    let targetRotY = 0;
    let autoSpinY = 0.005;

    // Resize observer
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Mouse movement inside container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;

      targetRotY = nx * 1.4;
      targetRotX = -ny * 1.2;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.2;
      targetRotY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation (lerp)
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY + autoSpinY - rotY) * 0.05;
      autoSpinY += 0.006;

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 380;

      // Draw central soft radiant aura
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        SPHERE_RADIUS * 1.2
      );
      auraGradient.addColorStop(0, "rgba(124, 58, 237, 0.16)");
      auraGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.08)");
      auraGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, SPHERE_RADIUS * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Matrix transforms for rotation
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const project = (p: Point3D) => {
        // Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const scale = fov / (fov + z2);
        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        return { px, py, scale, z: z2 };
      };

      // Project all sphere points
      const projected = points.map((p) => ({
        ...p,
        ...project(p),
      }));

      // Sort by depth (Z-buffer painter's algorithm)
      projected.sort((a, b) => b.z - a.z);

      // 1. Draw connecting constellation lines
      ctx.lineWidth = 0.65;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 46) {
            const avgZ = (p1.z + p2.z) / 2;
            const alpha = Math.max(0.04, Math.min(0.35, 1 - dist / 46)) *
              ((avgZ + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.8 + 0.2);

            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // 2. Draw Orbital Rings
      const drawRing = (ring: Point3D[], strokeColor: string) => {
        const projRing = ring.map(project);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < projRing.length; i++) {
          const p = projRing[i];
          if (i === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        }
        ctx.closePath();
        ctx.stroke();

        // Little pulses on ring nodes
        projRing.forEach((p, idx) => {
          if (idx % 6 === 0) {
            const alpha = Math.max(0.2, (p.z + RING_RADIUS) / (RING_RADIUS * 2));
            ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.arc(p.px, p.py, 2.2 * p.scale, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      };

      drawRing(orbitRing1, "rgba(168, 85, 247, 0.25)");
      drawRing(orbitRing2, "rgba(56, 189, 248, 0.2)");

      // 3. Draw nodes
      projected.forEach((p) => {
        const depthAlpha = Math.max(0.18, Math.min(1, (p.z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.9 + 0.1));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = depthAlpha;

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius * p.scale, 0, Math.PI * 2);
        ctx.fill();

        // Halo on highlighted front points
        if (p.z > 40 && p.color === "#38bdf8") {
          ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.px, p.py, (p.radius + 3) * p.scale, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none"
    >
      {/* 3D Depth Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10"
      />

      {/* Center Holographic Core Indicator */}
      <div className="absolute z-20 pointer-events-none text-center transform -translate-y-1">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 rounded-full border border-purple-400/40 bg-white/70 backdrop-blur-md shadow-lg shadow-purple-600/15 flex items-center justify-center mx-auto"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center shadow-inner">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
        </motion.div>
        <span className="inline-block mt-2 text-[10px] font-mono font-bold tracking-widest text-purple-700 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-purple-200/80 shadow-xs uppercase">
          TITANSLAB 3D CORE
        </span>
      </div>

      {/* Floating 3D Satellite Badge 1: Top Right (Architecture) */}
      <motion.div
        animate={{
          y: [-4, 6, -4],
          x: [0, 3, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 right-2 sm:right-6 z-20"
      >
        <div
          onClick={() => setActiveBadge("nextjs")}
          className={`p-3 rounded-2xl bg-white/90 backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer group flex items-center gap-3 ${
            activeBadge === "nextjs"
              ? "border-purple-500 ring-2 ring-purple-400/20 shadow-purple-500/15"
              : "border-slate-200/90 hover:border-purple-300"
          }`}
        >
          <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 leading-tight">Next.js & React 19</div>
            <div className="text-[9px] text-emerald-600 font-semibold font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              60 FPS GPU Sync
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Satellite Badge 2: Bottom Left (Security & QR) */}
      <motion.div
        animate={{
          y: [5, -5, 5],
          x: [0, -2, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 left-0 sm:left-4 z-20"
      >
        <div
          onClick={() => setActiveBadge("security")}
          className={`p-3 rounded-2xl bg-white/90 backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer group flex items-center gap-3 ${
            activeBadge === "security"
              ? "border-purple-500 ring-2 ring-purple-400/20 shadow-purple-500/15"
              : "border-slate-200/90 hover:border-purple-300"
          }`}
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 leading-tight">Security QR Engine</div>
            <div className="text-[9px] text-indigo-600 font-semibold font-mono">0.1s Scan Verification</div>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Satellite Badge 3: Bottom Right (Cloud & Infra) */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          x: [0, 4, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-6 -right-2 sm:right-2 z-20"
      >
        <div
          onClick={() => setActiveBadge("cloud")}
          className={`p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer group flex items-center gap-2.5 ${
            activeBadge === "cloud"
              ? "border-purple-500 ring-2 ring-purple-400/20 shadow-purple-500/15"
              : "border-slate-200/90 hover:border-purple-300"
          }`}
        >
          <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 leading-tight">Global CDN & Cloud</div>
            <div className="text-[9px] text-slate-500 font-medium">99.9% High Availability</div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Cursor Hint */}
      <div
        className={`absolute bottom-0 text-[10px] font-mono text-slate-600 bg-slate-100/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 transition-opacity duration-300 pointer-events-none z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ✨ Move cursor to rotate 3D sphere
      </div>
    </div>
  );
}

