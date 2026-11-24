"use client";

import { motion } from "motion/react";

export default function Contacto() {
  return (
    <main
      id="contacto"
      className="h-full w-full snap-start snap-always shrink-0 flex"
    >
      <motion.main
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex w-full h-full bg-fondo2 border-2 border-border rounded-rounded"
      >
        <div className="m-auto">
          <h1 className="text-3xl">Contacto page</h1>
        </div>
      </motion.main>
    </main>
  );
}
