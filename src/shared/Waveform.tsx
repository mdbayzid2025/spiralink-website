"use client";

import { useEffect, useRef } from "react";

export default function VoiceWave({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Initial setup
    let animationFrameId: number;

    const resize = () => {
      // Make canvas sharper on high DPI displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = 70 * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = "70px";
    };

    resize();
    window.addEventListener("resize", resize);

    const barWidth = 4; // Slightly wider bars as per screenshot
    const gap = 4;
    let tick = 0;

    // Generate a static "shape" for the wave so it doesn't travel
    // We want a symmetric shape that looks like an audio waveform (high in middle, tapers edges)
    const generateStaticShape = (count: number) => {
      return Array.from({ length: count }, (_, i) => {
        // Normalized position from -1 to 1
        const x = (i - count / 2) / (count / 2);
        // Gaussian-ish curve for the main envelope
        const envelope = Math.exp(-2.5 * x * x);
        // Add some "noise" so it looks like specific frequencies, not just a smooth hill
        // Using sin waves at different frequencies to simulate "spectral data"
        const detail = Math.abs(
          Math.sin(i * 0.5) * 0.5 +
            Math.sin(i * 1.5) * 0.3 +
            Math.sin(i * 0.1) * 0.2,
        );

        return envelope * (0.4 + 0.6 * detail); // Mix envelope and detail
      });
    };

    const draw = () => {
      // Clear with transparency
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      // Need to re-fetch width/height in case of layout shifts, though resize listener handles main changes
      // Using internal width/height
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Simulating a "beat"
      // Main pulsating beat
      const beatRaw = Math.sin(tick * 0.1);
      // Make it punchy: only expand, don't invert
      const beat = 1 + Math.max(0, beatRaw * beatRaw * beatRaw) * 0.6; // * 0.6 is intensity

      const effectiveWidth = rect.width;
      const totalBarWidth = barWidth + gap;
      const barCount = Math.ceil(effectiveWidth / totalBarWidth);

      const centerY = 35; // Half of height 70

      // Regenerate shape logic on the fly or cache it?
      // If we want it "standing", the shape structure shouldn't move x-wise.
      // But we can recalculate scaling.

      for (let i = 0; i < barCount; i++) {
        const x = i * totalBarWidth;

        // Shape Logic
        // Normalize x from -1 to 1 relative to center
        const normX = (i - barCount / 2) / (barCount / 2);

        // Base envelope (Gaussian) - determines overall shape
        // Changed from -3 to -0.5 to make it much wider, keeping sides taller
        const envelope = Math.exp(-0.5 * normX * normX);

        // "Random" looking static spectral details based on index
        const noise = Math.abs(Math.sin(i * 0.8) + Math.sin(i * 1.7) * 0.5);

        // Combine envelope and noise
        // Added + 0.15 base to ensure it never gets too small at edges
        const baseHeight = (envelope + 0.15) * noise * 30;

        // Apply animation
        const shimmer = Math.sin(i * 0.2 + tick * 0.15) * 0.2;

        const currentHeight = Math.max(4, baseHeight * (beat + shimmer));

        // Draw symmetric bar
        ctx.fillStyle = "#44305e";

        // Roundcap effect can be simulated or just rect
        ctx.fillRect(x, centerY - currentHeight / 2, barWidth, currentHeight);
      }

      tick++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute left-0 w-full pointer-events-none ${className}`}
      style={{ height: 70 }}
    />
  );
}
