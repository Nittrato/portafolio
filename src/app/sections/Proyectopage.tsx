"use client";

import { motion } from "motion/react";
import { proyecto } from "@/lib/data";
import { ExportSquare, ExternalDrive } from "iconsax-reactjs"

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
                <main className="flex flex-col flex-1 gap-6">
                    {/* titulo del proyecto */}
                    <h3 className="text-fondo text-h3 w-fit font-semibold bg-primario py-2 px-6 rounded-full">
                        {project.id} / {proyecto.length}
                    </h3>
                    <h1 className="text-h1 font-bold text-primario font-flex capitalize">
                        {project.name}
                    </h1>

                    {/* componentes */}
                    <main className="flex flex-col gap-screen flex-1">

                        {/* section 1 - arriba */}
                        <div className="flex flex-row gap-screen flex-1">
                            {/* lenguajes */}
                            <section className="bg-card border-2 border-border rounded-rounded p-7 w-3/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Lenguajes usados</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div></div>
                            </section>

                            {/* historial de github */}
                            <section className="bg-card border-2 border-border rounded-rounded p-7 w-2/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Historial de Github</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div></div>
                            </section>

                        </div>

                        {/* section 2 - abajo */}
                        <div className="flex flex-row gap-screen flex-1">
                            {/* estilos */}
                            <section className="bg-card border-2 border-border rounded-rounded p-7 w-2/5 flex-1">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Estilos usados</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div></div>
                            </section>

                            {/* datos tecnicos */}
                            <section className="bg-card border-2 border-border rounded-rounded p-7 w-3/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Datos tecnicos</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div></div>
                            </section>
                        </div>
                    </main>
                </main>

                {/* el emulador de android */}
                <main className="flex flex-col items-center gap-screen p-screen2 rounded-rounded border-2 border-border bg-card">
                    <section className="flex flex-row justify-between w-full ">
                        <div className="flex flex-row gap-3 p-1 bg-card border-2 border-border rounded-rounded">
                            <button className="bg-color rounded-rounded py-2 px-4 text-fondo">
                                <h4 className="text-h4">17 pro</h4>
                            </button>
                            <button className=" rounded-rounded py-2 px-4">
                                <h4 className="text-h4">Android</h4>
                            </button>
                            <button className=" rounded-rounded py-2 px-4">
                                <h4 className="text-h4">Web</h4>
                            </button>
                        </div>
                        <button className="boton">
                            <ExportSquare size="18" color="#ffffff" />
                        </button>
                    </section>
                    <section className="bg-fondo border-2 border-border rounded-rounded2 w-lg h-lvh">

                    </section>
                </main>
            </motion.main>
        </main>
    );
}
