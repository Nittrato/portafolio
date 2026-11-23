import { Home, Explorar, Perfil } from "@/app/sections";

export default function Page() {
  return (
    <main
      id="scroll-container"
      className="flex flex-col flex-1 overflow-y-auto  scroll-smooth no-scrollbar gap-screen"
    >
      <Home />
      <Explorar />
      <Perfil />
    </main>
  );
}
