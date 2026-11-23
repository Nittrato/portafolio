import { Home, Explorar, Perfil } from "@/app/sections";

export default function Page() {
  return (
    <main
      id="scroll-container"
      className="flex flex-col flex-1 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar gap-screen"
    >
      <Home />
      <Explorar />
      <Perfil />
    </main>
  );
}
