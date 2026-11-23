"use client";

import { motion } from "motion/react";

export interface ProyectoData {
  id: string;
  name: string;
  lenguajes: string[];
}

export default function ProyectoSection({ project }: { project: ProyectoData }) {
  return (
    <section
      id={`proyecto-${project.id}`}
      className="h-full w-full snap-start snap-always shrink-0 flex"
    >
      <motion.main
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col w-full h-full bg-fondo2 border-2 border-border rounded-rounded p-10 justify-center items-center gap-6"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-segundario text-sm uppercase tracking-wider font-semibold">
            Proyecto #{project.id}
          </span>
          <h1 className="text-4xl font-bold capitalize text-primario">
            {project.name}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-segundario text-sm">Lenguajes:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.lenguajes.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-fondo border border-border rounded-rounded2 text-sm text-primario font-mono uppercase"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </motion.main>
    </section>
  );
}
