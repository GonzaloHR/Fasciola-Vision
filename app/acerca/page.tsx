import type { Metadata } from "next";
import { Card, PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Acerca de" };

const items = [
  ["El reto", "Los métodos parasitológicos requieren observación experta. Algunos huevos, como los de Fasciola y Paramphistomum, pueden parecerse."],
  ["La propuesta", "Explorar un clip-on para microscopio y un flujo de visión por computadora para capturar y estudiar imágenes de muestras."],
  ["El principio", "La automatización no debe confundirse con un diagnóstico. La revisión profesional y la validación científica son indispensables."],
];

export default function Acerca() {
  return (
    <>
      <PageHead title="Una idea para mirar de otra manera.">
        FasciolaVision es una propuesta de hackathon nacida en Uruguay. Explora el encuentro entre microscopía accesible, visión por computadora y parasitología.
      </PageHead>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10">
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {items.map(([t, d], index) => (
            <Card key={t} className="border-0 shadow-none">
              <span className="micro-label text-terracotta">0{index + 1} / PRINCIPIO</span>
              <h3 className="mt-7 text-xl font-medium tracking-tight text-ink">{t}</h3>
              <p className="mt-2 leading-6 text-mute">{d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-[.6fr_1.4fr]">
          <p className="micro-label text-terracotta">ESTADO / 2026</p>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink">Prototipo conceptual en desarrollo.</h2>
            <p className="mt-3 leading-7 text-mute">
              Este sitio presenta una idea, no un servicio clínico. No existe aquí un detector conectado, un clasificador funcional ni un proceso de validación.
              Los ejemplos visuales son esquemáticos y no deben utilizarse para tomar decisiones de salud animal o humana.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
