import { ButtonLink, Card } from "@/components/ui";

const steps = [
  ["Creá tu cuenta", "Elegí si ingresás como usuario individual o en nombre de una empresa."],
  ["Analizá tus muestras", "Nuestros modelos identifican huevos de Fasciola hepatica y los distinguen de confusores comunes."],
  ["Revisá y registrá", "Cada resultado queda con nivel de confianza e historial para que un profesional lo verifique."],
];
const plans = [
  ["Usuario individual", "Probá la plataforma con una cuenta personal, ideal para veterinarios, estudiantes e investigadores."],
  ["Empresa mediana", "Equipos con varios usuarios, historial compartido y exportación de resultados."],
  ["Empresa grande", "Integración por API, gestión de roles y acompañamiento para validación institucional."],
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-bg px-6 pb-16 pt-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-sec/10 px-3 py-1 text-sm font-semibold text-sec">Diagnóstico asistido por IA</span>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-prim sm:text-6xl">
          Detección temprana de fasciolisis con computer vision
        </h1>
        <p className="mx-auto mb-7 mt-4 max-w-xl text-lg text-mute">
          Una plataforma para laboratorios, empresas del sector agropecuario y profesionales que necesitan resultados rápidos, trazables y reproducibles.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/registro" primary>Crear cuenta</ButtonLink>
          <ButtonLink href="/acerca">Conocer el proyecto</ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-prim">Cómo funciona</h2>
        <p className="mb-6 mt-2 text-mute">Tres pasos, sin instalar nada.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <Card key={t}>
              <div className="mb-3 grid size-9 place-items-center rounded-full bg-prim font-bold text-white">{i + 1}</div>
              <h3 className="text-lg font-semibold text-prim">{t}</h3>
              <p className="mt-1.5 text-mute">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight text-prim">Pensado para cada escala</h2>
          <p className="mb-6 mt-2 text-mute">Un mismo motor, distintas formas de acceso.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map(([t, d]) => (
              <Card key={t}><h3 className="text-lg font-semibold text-prim">{t}</h3><p className="mt-1.5 text-mute">{d}</p></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-xl border border-l-4 border-line border-l-sec bg-white p-5 text-[15px] text-mute">
          <b className="text-prim">Herramienta de apoyo.</b> Los resultados no reemplazan el diagnóstico del laboratorio ni del veterinario responsable.
        </div>
      </section>
    </>
  );
}
