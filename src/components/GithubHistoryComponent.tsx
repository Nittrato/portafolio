import { githubHistory } from "@/lib/data";

export function GithubHistoryComponent() {
    return (
        <div className="relative w-fit">
            {/* Contenedor scrolleable */}
            <div
                data-scrollable
                onWheel={(e) => e.stopPropagation()}
                className="max-h-80 p-3 flex flex-col overscroll-contain overflow-y-auto scrollbar-none scroll-smooth"
            >
                {githubHistory.map((history, index) => {
                    const isFirst = index === 0;
                    const isLast = index === githubHistory.length - 1;

                    return (
                        <div className="flex flex-row gap-screen" key={history.id}>
                            {/* Columna de la línea de tiempo */}
                            <div className="flex flex-col items-center">
                                {/* Nodo / Círculo */}
                                {isFirst ? (
                                    <span className="w-3.5 h-3.5 rounded-full bg-color shadow-[0_0_10px_rgba(143,255,98,0.6)] my-1.5" />
                                ) : (
                                    <span className="w-3.5 h-3.5 rounded-full border-2 border-segundario/50 bg-transparent my-1.5" />
                                )}

                                {/* Línea conectora hacia el siguiente */}
                                {!isLast && (
                                    <span className="w-[1.5px] flex-1 min-h-12 bg-segundario/50" />
                                )}
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-col pb-5">
                                <h4 className="text-h4 font-medium text-primario leading-tight">
                                    {history.tiempo} <span className="text-segundario">-</span> {history.titulo}
                                </h4>
                                <p className="text-base text-segundario mt-1 leading-snug">
                                    {history.commit}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Gradiente para desvanecer hacia el fondo abajo - fijo sobre el scroll */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#1f1f1f] to-transparent" />
        </div>
    );
}
