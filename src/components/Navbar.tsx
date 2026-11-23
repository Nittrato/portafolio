"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { proyecto } from "@/lib/data";

// IDs en el orden de scroll real de la página: home → proyectos → doc → contacto
const SECTION_IDS = [
  "home",
  ...proyecto.map((p) => `proyecto-${p.id}`),
  "doc",
  "contacto",
];

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const activeIdRef = useRef("home");

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  // Detectar sección visible con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0.5 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Rueda del ratón → siguiente/anterior sección
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling || Math.abs(e.deltaY) < 20) return;

      const currentIndex = SECTION_IDS.indexOf(activeIdRef.current);
      if (currentIndex === -1) return;

      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < SECTION_IDS.length) {
        e.preventDefault();
        isScrolling = true;
        const nextId = SECTION_IDS[nextIndex];
        document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
        setActiveId(nextId);
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav className="flex flex-col items-center justify-between p-screen bg-fondo2 rounded-full border-2 border-border shrink-0 overflow-hidden">
      {/* Logo */}
      <div className="w-18 h-18 bg-primario rounded-full flex items-center justify-center shrink-0">
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
      </div>

      {/* Tabs centrales */}
      <div className="flex flex-col items-center h-full justify-between py-8">
        {/* Tab: Inicio */}
        <NavTextTab
          label="Inicio"
          isActive={activeId === "home"}
          onClick={() => scrollTo("home")}
        />

        {/* Grupo de proyectos — dots (único grupo con animación) */}
        <div className="flex flex-col items-center gap-3 px-2 py-3 justify-center bg-card rounded-full">
          {proyecto.map((p) => {
            const isActive = `proyecto-${p.id}` === activeId;
            return (
              <button
                key={p.id}
                title={p.name}
                onClick={() => scrollTo(`proyecto-${p.id}`)}
                className="flex items-center justify-center cursor-pointer"
              >
                <motion.span
                  layoutId={`project-dot-${p.id}`}
                  initial={{ scale: 0.2 }}
                  animate={{ scale: isActive ? 1 : 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className={`w-5 h-5 rounded-lg block ${
                    isActive ? "bg-primario" : "bg-segundario"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-8">
          {/* Tab: Docs */}
          <NavTextTab
            label="Docs"
            isActive={activeId === "doc"}
            onClick={() => scrollTo("doc")}
          />

          {/* Tab: Contacto */}
          <NavTextTab
            label="Contacto"
            isActive={activeId === "contacto"}
            onClick={() => scrollTo("contacto")}
          />
        </div>
      </div>

      {/* Avatar */}
      <div className="w-18 h-18 rounded-full overflow-hidden shrink-0 border-2 border-border">
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
}

// Tab de texto vertical — solo cambia el color del texto al estar activo
function NavTextTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer group"
      style={{ writingMode: "vertical-rl" }}
    >
      <p
        className={`text-h3 font-semibold uppercase tracking-widest transition-colors duration-200 ${
          isActive ? "text-color" : "text-segundario group-hover:text-primario"
        }`}
      >
        {label}
      </p>
    </button>
  );
}
