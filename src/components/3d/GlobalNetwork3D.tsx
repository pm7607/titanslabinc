"use client";

import { useEffect, useRef } from "react";
import { Globe } from "lucide-react";

interface GlobePoint {
  x: number;
  y: number;
  z: number;
  label?: string;
  isHub?: boolean;
}

export default function GlobalNetwork3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const GLOBE_RADIUS = 120;
    const points: GlobePoint[] = [];

    // Key Hubs [lat, lon, label]
    const HUBS = [
      { lat: 22.3, lon: 70.8, label: "Rajkot (HQ)" },
      { lat: 44.16, lon: -77.38, label: "Canada (Clients)" },
      { lat: 10.82, lon: 106.63, label: "Vietnam (Trade)" },
      { lat: 37.77, lon: -122.41, label: "USA (Enterprise)" },
      { lat: 51.5, lon: -0.12, label: "UK / Europe" },
    ];

    // Generate Globe Surface Particles
    const DOTS_COUNT = 240;
    for (let i = 0; i < DOTS_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / DOTS_COUNT);
      const theta = Math.sqrt(DOTS_COUNT * Math.PI) * phi;

      points.push({
        x: GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi),
        y: GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi),
        z: GLOBE_RADIUS * Math.cos(phi),
      });
    }

    // Convert Hubs to 3D Cartesian
    const hubPoints: GlobePoint[] = HUBS.map((hub) => {
      const phi = (90 - hub.lat) * (Math.PI / 180);
      const theta = (hub.lon + 180) * (Math.PI / 180);
      return {
        x: -(GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta)),
        z: GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta),
        y: GLOBE_RADIUS * Math.cos(phi),
        label: hub.label,
        isHub: true,
      };
    });

    let rotY = 0;
    let rotX = 0.25;
    let targetRotY = 0;
    let targetRotX = 0.25;

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
    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;

      targetRotY = nx * 1.5;
      targetRotX = -ny * 1.2;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY += 0.006 + (targetRotY - rotY) * 0.04;
      rotX += (targetRotX - rotX) * 0.04;

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 350;

      // Radiant Aura
      const aura = ctx.createRadialGradient(
        centerX,
        centerY,
        GLOBE_RADIUS * 0.2,
        centerX,
        centerY,
        GLOBE_RADIUS * 1.3
      );
      aura.addColorStop(0, "rgba(124, 58, 237, 0.15)");
      aura.addColorStop(0.7, "rgba(168, 85, 247, 0.04)");
      aura.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(centerX, centerY, GLOBE_RADIUS * 1.3, 0, Math.PI * 2);
      ctx.fill();

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const project = (p: GlobePoint) => {
        // Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2);
        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        return { px, py, scale, z: z2, label: p.label, isHub: p.isHub };
      };

      // Project surface points
      const projected = points.map(project);
      const projectedHubs = hubPoints.map(project);

      // Draw faint connections between nearby surface dots
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 3) {
        const p1 = projected[i];
        if (p1.z < -20) continue; // Skip back face

        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const p2 = projected[j];
          if (p2.z < -20) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 32) {
            const alpha = Math.max(0.03, (1 - dist / 32) * 0.2);
            ctx.strokeStyle = `rgba(147, 51, 234, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw surface dots
      projected.forEach((p) => {
        const depthAlpha = Math.max(0.12, (p.z + GLOBE_RADIUS) / (GLOBE_RADIUS * 2));
        ctx.fillStyle = p.z > 0 ? "#7c3aed" : "#cbd5e1";
        ctx.globalAlpha = depthAlpha * 0.75;

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.z > 0 ? 1.8 * p.scale : 1.2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Arc lines connecting Rajkot HQ to other hubs
      const rajkot = projectedHubs[0];
      if (rajkot) {
        ctx.lineWidth = 1.2;
        projectedHubs.slice(1).forEach((hub) => {
          if (rajkot.z > -40 || hub.z > -40) {
            const midX = (rajkot.px + hub.px) / 2;
            const midY = (rajkot.py + hub.py) / 2 - 28; // Arc curvature

            const grad = ctx.createLinearGradient(rajkot.px, rajkot.py, hub.px, hub.py);
            grad.addColorStop(0, "rgba(124, 58, 237, 0.6)");
            grad.addColorStop(1, "rgba(56, 189, 248, 0.6)");

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(rajkot.px, rajkot.py);
            ctx.quadraticCurveTo(midX, midY, hub.px, hub.py);
            ctx.stroke();
          }
        });
      }

      // Draw Glowing Hubs with Labels
      projectedHubs.forEach((hub) => {
        if (hub.z > -40) {
          const isHQ = hub.label?.includes("HQ");

          // Outer pulsing ring
          ctx.strokeStyle = isHQ ? "#a855f7" : "#38bdf8";
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = Math.max(0.3, (hub.z + GLOBE_RADIUS) / (GLOBE_RADIUS * 2));
          ctx.beginPath();
          ctx.arc(hub.px, hub.py, (isHQ ? 5 : 4) * hub.scale, 0, Math.PI * 2);
          ctx.stroke();

          // Center solid dot
          ctx.fillStyle = isHQ ? "#7c3aed" : "#0284c7";
          ctx.beginPath();
          ctx.arc(hub.px, hub.py, (isHQ ? 3 : 2.2) * hub.scale, 0, Math.PI * 2);
          ctx.fill();

          // Hub Tag text if on the front hemisphere
          if (hub.z > 10 && hub.label) {
            ctx.font = "bold 9px ui-monospace, SFMono-Regular, monospace";
            ctx.fillStyle = isHQ ? "#6d28d9" : "#0369a1";
            ctx.fillText(hub.label, hub.px + 7, hub.py + 3);
          }
        }
      });

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />

      {/* Floating Status Badge */}
      <div className="absolute bottom-2 z-20 pointer-events-none text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-[10px] font-mono font-bold text-purple-800 shadow-md">
          <Globe className="w-3.5 h-3.5 text-purple-600 animate-spin" />
          <span>Interactive 3D Global Delivery Network</span>
        </span>
      </div>
    </div>
  );
}
