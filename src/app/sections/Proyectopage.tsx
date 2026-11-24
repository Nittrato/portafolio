"use client";

import { motion } from "motion/react";
import { span } from "motion/react-m";

export interface ProyectoData {
    id: string;
    name: string;
    lenguajes: string[];
    porcentaje: number[];
}

/* este el la pagina [id] de los proyectos, es un tamplate que las paginas siguen */
export default function ProyectoSection({ project }: { project: ProyectoData }) {
    return (
        <main
            id={`proyecto-${project.id}`}
            className="h-full w-full snap-start snap-always shrink-0 flex"
        >
            <motion.main
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-row gap-screen flex-1"
            >
                <main className=" items-center gap-3 bg-card border-2 border-border rounded-rounded flex-1">
                    <span className="text-segundario text-sm uppercase tracking-wider font-semibold">
                        Proyecto #{project.id}
                    </span>
                    <h1 className="text-4xl font-bold capitalize text-primario">
                        {project.name}
                    </h1>
                </main>

                <main className="flex flex-col items-center gap-2 bg-card border-2 border-border rounded-rounded flex-1">
                    <p className="text-segundario text-sm">Lenguajes:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                    </div>
                </main>
            </motion.main>
        </main>
    );
}
