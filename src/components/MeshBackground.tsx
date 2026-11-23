"use client";

import { motion } from "motion/react";

export function MeshBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 — arriba derecha */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          top: -300,
          right: 100,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, #42583c 0%, transparent 100%)",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Blob 2 — abajo izquierda */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          bottom: -100,
          left: -100,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, #42583c 0%, transparent 100%)",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
