import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimal Template - Tabs App",
  description:
    "Template minimalista con Next.js, App Router, TypeScript y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-row h-screen p-screen gap-screen bg-fondo text-primario">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
