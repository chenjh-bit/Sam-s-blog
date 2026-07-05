"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const SIZE = 320;

export function CursorGlow() {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 300, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 35, mass: 0.5 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[65] hidden rounded-full mix-blend-screen [@media(pointer:fine)]:block"
      style={{
        x: springX,
        y: springY,
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(closest-side, rgba(34,211,238,0.28), rgba(37,99,235,0.14) 45%, transparent 70%)",
      }}
    />
  );
}
