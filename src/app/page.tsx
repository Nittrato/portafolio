import { Home, Doc, Contacto, ProyectoSection } from "@/app/sections";
import { proyecto } from "@/lib/data";

export default function Page() {
  return (
    <main
      id="scroll-container"
      className="flex flex-col flex-1 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      <Home />

      {proyecto.map((item) => (
        <ProyectoSection key={item.id} project={item} />
      ))}
      <Doc />
      <Contacto />
    </main>
  );
}
