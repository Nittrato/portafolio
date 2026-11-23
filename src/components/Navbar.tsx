"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export interface Tab {
  id: string;
  name: string;
  href: string;
}

export const TABS: Tab[] = [
  { id: "home", name: "Home", href: "#home" },
  { id: "explorar", name: "Explorar", href: "#explorar"},
  { id: "perfil", name: "Perfil", href: "#perfil"},
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const activeTabRef = useRef("home");

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  // Detectar la sección visible al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );

    TABS.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Navegar entre secciones con la rueda del ratón
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling || Math.abs(e.deltaY) < 20) return;

      const currentIndex = TABS.findIndex((t) => t.id === activeTabRef.current);
      if (currentIndex === -1) return;

      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < TABS.length) {
        e.preventDefault();
        isScrolling = true;

        const nextId = TABS[nextIndex].id;
        document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
        setActiveTab(nextId);

        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
  };

  return (
    <nav className="flex flex-col gap-5 p-5 bg-fondo2 rounded-rounded border-2 border-border shrink-0">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <a
            key={tab.id}
            href={tab.href}
            onClick={(e) => handleClick(e, tab.id)}
            className={`relative flex items-center gap-3 p-4 rounded-rounded2 w-50 transition-colors duration-200 cursor-pointer ${
              isActive
                ? "text-fondo2 font-semibold"
                : "text-segundario hover:text-primario hover:bg-primario/10"
            }`}
          >
            {/* Indicador activo con Motion */}
            {isActive && (
              <motion.div
                layoutId="active-nav-indicator"
                className="absolute inset-0 bg-primario rounded-rounded2"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            

            <p className="relative z-10 font-medium">{tab.name}</p>
          </a>
        );
      })}
    </nav>
  );
}
