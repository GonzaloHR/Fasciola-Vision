import type { Metadata } from "next";
import { Card, PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "¿Sabías que?" };

const facts = [
  ["Un parásito del hígado", "Fasciola hepatica es un trematodo que vive en los conductos biliares y el hígado de rumiantes como vacas y ovejas, y también puede infectar a las personas."],
  ["Necesita un caracol", "Su ciclo de vida incluye caracoles de agua dulce como hospedador intermediario, por eso se asocia a zonas húmedas y pasturas inundables."],
  ["Se contagia comiendo", "La infección ocurre al ingerir formas infectivas, llamadas metacercarias, adheridas a plantas o presentes en el agua."],
  ["Los huevos tardan en aparecer", "Pasan varias semanas desde la infección hasta que se detectan huevos en materia fecal, así que un resultado negativo temprano no descarta la enfermedad."],
  ["Tiene un imitador", "Los huevos de Paramphistomum se parecen a los de Fasciola al microscopio, y distinguirlos es uno de los desafíos clave para un modelo de visión."],
  ["Es una enfermedad desatendida", "La Organización Mundial de la Salud la incluye entre las enfermedades tropicales desatendidas por su impacto en salud humana y animal."],
];

export default function Sabias() {
  return (
    <>
      <PageHead title="¿Sabías que?">Datos breves sobre la fasciolisis y el parásito que la causa.</PageHead>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {facts.map(([t, d], i) => (
          <Card key={t} className="flex gap-4">
            <span className="text-3xl font-bold leading-none text-acc">{String(i + 1).padStart(2, "0")}</span>
            <div><h3 className="text-lg font-semibold text-prim">{t}</h3><p className="mt-1.5 text-mute">{d}</p></div>
          </Card>
        ))}
      </div>
    </>
  );
}
