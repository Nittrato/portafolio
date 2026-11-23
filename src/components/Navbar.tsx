"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Home2, Discover, Profile, type Icon } from "iconsax-reactjs";

interface Tab {
  name: string;
  href: string;
  icon: Icon;
}

const TABS: Tab[] = [
  { name: "Home", href: "/home", icon: Home2 },
  { name: "Explorar", href: "/explorar", icon: Discover },
  { name: "Perfil", href: "/perfil", icon: Profile },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-5 p-5 bg-fondo2 rounded-rounded border-2 border-border">
      {TABS.map((tab) => {
        const isActive =
          pathname === tab.href ||
          (tab.href === "/home" && (pathname === "/" || pathname === ""));

        const IconComponent = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative flex items-center gap-3 p-4 rounded-rounded2 w-50 transition-colors duration-200 ${
              isActive
                ? "text-fondo2 font-semibold"
                : "text-segundario hover:text-primario hover:bg-primario/10"
            }`}
          >
            {/* Fondo activo deslizante */}
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

            {/* Contenido con z-10 para que quede por encima del fondo blanco */}
            <span className="relative z-10 flex items-center justify-center">
              <IconComponent
                size={24}
                variant={isActive ? "Bold" : "Linear"}
              />
            </span>

            <p className="relative z-10 font-medium">{tab.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
