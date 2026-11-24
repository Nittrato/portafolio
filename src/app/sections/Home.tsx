"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sticker } from "iconsax-reactjs"
import { GithubHistoryComponent } from "@/components/GithubHistoryComponent";
import { skill } from "@/lib/data";

export default function Home() {
    const [hoveredSkill, setHoveredSkill] = useState<(typeof skill)[number] | null>(null);
    const activeSkill = hoveredSkill || skill[0];

    return (
        <main
            id="home"
            className="flex w-full h-full border-2
 border-border rounded-rounded snap-start snap-always shrink-0 overflow-hidden"
        >
            <motion.main
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-1 flex"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(30, 30, 30, 1) 0%, rgba(30, 30, 30, 0.8) 15%,rgba(30, 30, 30, 0.5) 30%, transparent 50%), url('/wall.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <main className="flex flex-row justify-between p-screen2 flex-1">
                    <section className="flex flex-col justify-between">
                        {/* card de presentacion */}
                        <div className="bg-primario/10 backdrop-blur-xl w-lg rounded-rounded2 p-screen border-2 gap-screen border-border flex flex-row">
                            <img
                                src="/avatar.jpg"
                                className="w-48 h-48 rounded-[2.2rem] border-2 border-border"
                            />
                            <div className="flex flex-col justify-between">
                                <h3 className="text-h3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                                    illum optio autem debitis amet expe
                                </h3>
                                <button onClick={() => window.open("https://unsplash.com/es/@sumaidsingh")} className="anim bg-fondo rounded-full p-1 flex gap-1 border border-fondo">
                                    <h3 className="bg-primario flex-1 text-h3 text-center py-3 text-fondo rounded-full">
                                        IR A GITHUB
                                    </h3>

                                    <span className="bg-primario rounded-full p-1.5 w-12 h-12">
                                        <img src="/github.svg" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* github historial */}
                        <GithubHistoryComponent />

                        {/* Titulo */}
                        <div className="w-4xl">
                            <div className="flex flex-row items-center w-fit gap-2 bg-color/10 border border-color rounded-full py-2 px-4">
                                <span className="w-1.5 h-1.5 rounded-2xl bg-color animate-pulse"></span>
                                <p className="text-color text-base">Este sitio aun esta en desarrollo temprano</p>
                            </div>
                            <h1 className="text-titulo font-semibold font-flex my-5 leading-none">Software sin capas de mas<span className="text-color">*</span></h1>
                        </div>
                    </section>


                    <section className="flex flex-col justify-between items-end">

                        {/* propiedad de imagen */}
                        <button onClick={() => window.open("https://unsplash.com/es/@sumaidsingh")} className="anim bg-primario rounded-full py-4 px-6 w-fit text-fondo flex items-center gap-3">
                            <Sticker size="24" variant="Bold" />
                            <h4 className="text-h4">Imagen de la propiedad de <span className="text-blue-500 cursor-pointer hover:underline">@sumaidsingh</span></h4>
                        </button>

                        {/* card de skills */}
                        <div className="bg-fondo2 backdrop-blur-xl p-screen2 flex flex-col gap-6 w-140 border-2 border-border rounded-rounded2">
                            <h3 className="text-h3 uppercase">Skills</h3>
                            <section className=" flex flex-wrap gap-2">
                                {skill.map(item => (
                                    <button
                                        className="px-7 py-2.5 border-2 rounded-full cursor-pointer hover:bg-primario hover:text-fondo"
                                        key={item.id}
                                        onMouseEnter={() => setHoveredSkill(item)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <h3 className="text-h3 uppercase">{item.name}</h3>
                                    </button>
                                ))}
                            </section>

                            <h3 className="text-h3">
                                {activeSkill ? (
                                    <>
                                        <span className="uppercase">{activeSkill.name}</span>
                                        <span className="text-segundario"> - {activeSkill.definicion}</span>
                                    </>
                                ) : null}
                            </h3>
                        </div>
                    </section>
                </main>
            </motion.main>
        </main>
    );
}
