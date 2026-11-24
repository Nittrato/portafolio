"use client";

import { motion } from "motion/react";
import {Sticker} from "iconsax-reactjs"

export default function Home() {
  return (
    <section
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
                <h4 className="text-h4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  illum optio autem debitis amet expe
                </h4>
                <a href="#" className="bg-fondo rounded-full p-1 flex gap-1">
                  <h3 className="bg-primario flex-1 text-h3 text-center py-3 text-fondo rounded-full">
                    IR A GITHUB
                  </h3>

                  <span className="bg-primario rounded-full p-1.5 w-12 h-12">
                    <img src="/github.svg" />
                  </span>
                </a>
              </div>
            </div>

            {/* github historial */}
            <div className="bg-fondo2 p-screen flex w-56 h-56">
              <h3>github history</h3>
            </div>

            {/* Titulo */}
            <div className="w-4xl">
              <div className="flex flex-row items-center w-fit gap-2 bg-color/10 border border-color rounded-full py-2 px-4">
                <span className="w-1.5 h-1.5 rounded-2xl bg-color"></span>
                <p className="text-color text-base">Este sitio aun esta en desarrollo temprano</p>
              </div>
              <h1 className="text-titulo font-semibold font-flex my-5 leading-none">Software sin capas de mas<span className="text-color">*</span></h1>
            </div>
          </section>

          
          <section className="flex flex-col justify-between items-end">
            <div className="bg-primario rounded-full py-4 px-6 w-fit text-fondo flex items-center gap-3">
              <Sticker size="24" variant="Bold"/>
              <h4 className="text-h4">Imagen de la propiedad de <a href="#" className="text-blue-500 cursor-pointer hover:underline">@yohunru</a></h4>
            </div>
            <div className="bg-fondo2 backdrop-blur-xl p-screen2 flex flex-col gap-6 w-140 border-2 border-border rounded-rounded2">
              <h3 className="text-h3">Lenguajes</h3>
              <div className="flex flex-wrap gap-2">
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">react</h4></a>
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">next js</h4></a>
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">typescript</h4></a>
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">react native</h4></a>
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">sqlite</h4></a>
                <a className="px-7 py-2.5 border-2 border-primario rounded-full"><h4 className="text-h4 uppercase">tailwind css</h4></a>
              </div>
              <h4 className="text-h4">React <span className="text-segundario">- es un framework para dispositivos multiplataforma en un framework para dispositivos multimedia</span></h4>
            </div>
          </section>
        </main>
      </motion.main>
    </section>
  );
}
