"use client";

import { useEffect, useRef } from "react";

export default function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animation = 0;
    let particles: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }[] = [];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.35 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#D4AF37";
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (!reducedMotion) {
          p.y -= p.speed;
          p.x += Math.sin(frame * 0.01 + p.y) * 0.1;

          if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
          }
        }
      }

      ctx.shadowBlur = 0;
      frame++;

      if (!reducedMotion) {
        animation = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
