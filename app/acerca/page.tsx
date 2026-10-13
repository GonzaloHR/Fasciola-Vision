import type { Metadata } from "next";
import { Card, PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Acerca de" };

const items = [
  ["Misión", "Hacer más rápido, accesible y reproducible el diagnóstico de fasciolisis, apoyando el criterio de los profesionales."],
  ["Enfoque", "Modelos entrenados con muestras anotadas por especialistas y validados contra los métodos de referencia del laboratorio."],
  ["Transparencia", "Cada resultado muestra su nivel de confianza y puede ser revisado por una persona antes de tomar decisiones."],
];

export default function Acerca() {
  return (
    <>
      <PageHead title="Acerca de">FasciolaVision es un proyecto que aplica visión por computadora al diagnóstico parasitológico veterinario, desde Uruguay.</PageHead>
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(([t, d]) => <Card key={t}><h3 className="text-lg font-semibold text-prim">{t}</h3><p className="mt-1.5 text-mute">{d}</p></Card>)}
        </div>
        <div className="mt-6 rounded-xl border border-l-4 border-line border-l-sec bg-white p-5 text-[15px] text-mute">
          <b className="text-prim">Estado del proyecto:</b> prototipo en desarrollo. Aún no está validado clínicamente ni certificado como producto de diagnóstico.
        </div>
      </div>
    </>
  );
}
