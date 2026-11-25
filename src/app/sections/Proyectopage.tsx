"use client";

import { motion } from "motion/react";
import { proyecto } from "@/lib/data";
import { ExportSquare, ExternalDrive } from "iconsax-reactjs"

export interface LenguajeItem {
    name: string;
    porcentaje?: number;
    color?: string;
}

export interface ProyectoData {
    id: string;
    name: string;
    lenguajes: LenguajeItem[];
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
                            <section className="bg-card border-2 flex flex-col gap-screen border-border rounded-rounded p-7 w-3/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Lenguajes usados</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-2 flex-1">
                                    {(() => {
                                        // Calcular suma de porcentajes de los lenguajes que sí lo tienen especificado
                                        const totalDefinido = project.lenguajes
                                            .filter((l) => l.name.toLowerCase() !== "otros")
                                            .reduce((acc, curr) => acc + (curr.porcentaje || 0), 0);
                                        const resto = Math.max(0, 100 - totalDefinido);

                                        return project.lenguajes.map((lenguaje) => {
                                            const isOtros = lenguaje.name.toLowerCase() === "otros";
                                            const porcentaje = isOtros ? resto : (lenguaje.porcentaje || 0);
                                            const color = isOtros ? "#777777" : (lenguaje.color || "#ffffff");

                                            if (isOtros) {
                                                return (
                                                    <div
                                                        key={lenguaje.name}
                                                        style={{
                                                            flex: `${porcentaje} 1 0%`,
                                                            minWidth: 0,
                                                            borderColor: color,
                                                        }}
                                                        className="flex flex-col justify-center items-center rounded-rounded2 border-2 bg-card"
                                                    >
                                                        <h4
                                                            style={{ color }}
                                                            className="text-h3 -rotate-90 capitalize"
                                                        >
                                                            {lenguaje.name}
                                                        </h4>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div
                                                    key={lenguaje.name}
                                                    style={{
                                                        flex: `${porcentaje} 1 0%`,
                                                        minWidth: 0,
                                                        borderColor: color,
                                                        background: `${color}30`
                                                    }}
                                                    className="flex flex-col justify-between p-6 rounded-rounded2 border-2 overflow-hidden"
                                                >
                                                    <h2
                                                        style={{ color }}
                                                        className="text-3xl font-semibold"
                                                    >
                                                        {porcentaje}%
                                                    </h2>
                                                    <h4 className="text-h3 capitalize" style={{
                                                        color: color
                                                    }}>
                                                        {lenguaje.name}
                                                    </h4>
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </section>

                            {/* historial de github */}
                            <section className="bg-card border-2 flex flex-col gap-screen border-border rounded-rounded p-7 w-2/5">
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
                            <section className="bg-card border-2 flex flex-col gap-screen border-border rounded-rounded p-7 w-2/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Estilos usados</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div className="bg-fondo rounded-rounded2 p-screen2 border-2 border-border flex flex-col">
                                    <h1 className="text-[3rem] font-bold capitalize">Aa BbCc </h1>
                                    <div className="w-52 bg-segundario h-0.5 mb-4" />
                                    <h4 className="text-segundario text-h4 capitalize">Titulos - Inter - 12rem</h4>
                                    <h4 className="text-segundario text-h4 capitalize">Cuerpo - Jetbrains - 2rem, 3rem, 4rem</h4>
                                </div>
                                <div className="flex flex-row gap-screen flex-1">
                                    <div className="bg-color border-2 border-border rounded-rounded2 flex-1 flex justify-center items-center">
                                        <h4 className="text-fondo">#54654</h4>
                                    </div>

                                    <div className="bg-color border-2 border-border rounded-rounded2 flex-1 flex justify-center items-center">
                                        <h4 className="text-fondo">#54654</h4>
                                    </div>

                                    <div className="bg-color border-2 border-border rounded-rounded2 flex-1 flex justify-center items-center">
                                        <h4 className="text-fondo">#54654</h4>
                                    </div>
                                </div>
                            </section>

                            {/* datos tecnicos */}
                            <section className="bg-card border-2 flex flex-col gap-screen border-border rounded-rounded p-7 w-3/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-h3">Datos tecnicos</h3>
                                    <button className="boton">
                                        <ExportSquare size="18" color="#ffffff" />
                                    </button>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="bg-card border-2 flex-1 border-border rounded-rounded2 p-6 gap-screen flex flex-col">
                                        <h4 className="text-h4 text-segundario">Uso de memoria</h4>
                                        <h2 className="text-5xl font-bold">60<span className="text-color text-h2"> MB</span></h2>
                                    </div>
                                    <div className="bg-card border-2 flex-1 border-border rounded-rounded2 p-6 gap-screen flex flex-col">
                                        <h4 className="text-h4 text-segundario">Uso de memoria</h4>
                                        <h2 className="text-5xl font-bold">60<span className="text-color text-h2"> MB</span></h2>
                                    </div>
                                    <div className="bg-card border-2 flex-1 border-border rounded-rounded2 p-6 gap-screen flex flex-col">
                                        <h4 className="text-h4 text-segundario">Uso de memoria</h4>
                                        <h2 className="text-5xl font-bold">60<span className="text-color text-h2"> MB</span></h2>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 my-2">
                                    <h3 className="text-color text-h3">Ver. 1.0.0 <span className="text-primario">- Situacion</span></h3>
                                    <h4 className="text-h4 text-segundario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi esse unde corporis, reiciendis necessitatibus quisquam illo temporibus. Rerum excepturi quia cumque a reiciendis reprehenderit ipsa facilis magni esse tempore.</h4>
                                </div>
                            </section>
                        </div>
                    </main>
                </main>

                {/* el emulador de android */}
                <main className="flex flex-col items-center gap-screen p-screen2 rounded-rounded border-2 border-border bg-card">
                    <section className="flex flex-row justify-between w-full items-center ">
                        <div className="flex flex-row p-1 bg-card border-2 border-border rounded-rounded">
                            <button className="bg-color rounded-rounded py-2.5 px-4 text-fondo flex flex-row items-center gap-2">
                                <ExternalDrive size="18" color="#222222" />
                                <h4 className="text-h4 text-fondo">17 pro</h4>
                            </button>
                            <button className="py-2.5 px-4 text-fondo flex flex-row items-center gap-2">
                                <ExternalDrive size="18" color="#ffffff" />
                                <h4 className="text-h4 text-primario">Android</h4>
                            </button>
                            <button className="py-2.5 px-4 text-fondo flex flex-row items-center gap-2">
                                <ExternalDrive size="18" color="#ffffff" />
                                <h4 className="text-h4 text-primario">web</h4>
                            </button>
                        </div>
                        <button className="boton h-fit">
                            <ExportSquare size="18" color="#ffffff" />
                        </button>
                    </section>
                    <section className="bg-fondo border-2 border-border rounded-rounded flex-1 p-screen">
                        <div className="bg-[#333333] w-md h-full rounded-rounded2">

                        </div>
                    </section>
                </main>
            </motion.main>
        </main>
    );
}
