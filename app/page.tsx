import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microscopía, visión por computadora y Fasciola",
  description:
    "Un proyecto de hackathon que explora un clip-on para microscopio y visión por computadora aplicada a Fasciola hepatica.",
};

const stages = [
  {
    number: "01",
    name: "Capturar",
    description:
      "Explorar un clip-on que ayude a registrar imágenes con un campo visual y una iluminación más consistentes.",
    label: "MICROSCOPIO",
  },
  {
    number: "02",
    name: "Detectar",
    description:
      "Investigar cómo localizar estructuras de interés dentro de una muestra, sin perder de vista lo que queda fuera.",
    label: "VISIÓN",
  },
  {
    number: "03",
    name: "Distinguir",
    description:
      "Explorar el reto de clasificar huevos parecidos y dejar la interpretación final en manos de una persona.",
    label: "CRITERIO HUMANO",
  },
];

const pitchNotes = [
  ["00:08", "El ciclo de infección y el hospedador intermediario."],
  ["00:22", "El tamaño orientativo de los huevos que menciona la propuesta."],
  ["00:43", "El reto de los métodos actuales y los organismos parecidos."],
  ["00:50", "La idea de un clip-on con objetivo ×4 e iluminación uniforme."],
  ["01:04", "El flujo conceptual: escaneo, detección y clasificación."],
];

function SpecimenField() {
  return (
    <div className="specimen-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="micro-label text-lime">CAMPO DE EXPLORACIÓN</p>
          <p className="mt-2 text-sm text-white/65">Microscopía · visión artificial</p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white/60">
          FIG. 001
        </span>
      </div>

      <svg
        className="mx-auto my-2 w-full max-w-[390px]"
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="field-title field-description"
      >
        <title id="field-title">Ilustración conceptual de un campo microscópico</title>
        <desc id="field-description">
          Una forma ovalada esquemática aparece dentro de un campo de observación con una escala y un retículo.
        </desc>
        <defs>
          <radialGradient id="fieldGlow">
            <stop offset="0" stopColor="#d7f0a3" stopOpacity=".17" />
            <stop offset="1" stopColor="#d7f0a3" stopOpacity="0" />
          </radialGradient>
          <pattern id="fieldGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#f4f3ea" strokeOpacity=".12" strokeWidth=".7" />
          </pattern>
        </defs>
        <circle cx="200" cy="200" r="177" fill="url(#fieldGlow)" />
        <circle cx="200" cy="200" r="158" fill="url(#fieldGrid)" stroke="#d7f0a3" strokeOpacity=".54" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#d7f0a3" strokeOpacity=".16" strokeDasharray="2 7" />
        <path d="M200 37v28m0 270v28M37 200h28m270 0h28" stroke="#d7f0a3" strokeOpacity=".65" />
        <path d="M174 174l-32-32m84 84 32 32m0-84 18-18m-120 120-18 18" stroke="#d7f0a3" strokeOpacity=".26" />
        <g transform="rotate(-19 203 201)">
          <ellipse cx="203" cy="201" rx="43" ry="62" fill="#e4955f" fillOpacity=".85" stroke="#f7c58d" strokeWidth="2" />
          <ellipse cx="203" cy="201" rx="34" ry="52" fill="none" stroke="#492f2a" strokeOpacity=".46" />
          <path d="M181 175c11-12 27-17 42-14" fill="none" stroke="#ffe0ae" strokeOpacity=".76" strokeWidth="3" strokeLinecap="round" />
          <circle cx="226" cy="218" r="5" fill="#5a4536" fillOpacity=".62" />
        </g>
        <path d="M238 156 293 113" stroke="#d7f0a3" strokeWidth="1.2" strokeDasharray="3 4" />
        <circle cx="238" cy="156" r="3" fill="#d7f0a3" />
        <rect x="272" y="88" width="83" height="30" rx="4" fill="#14231d" stroke="#d7f0a3" strokeOpacity=".35" />
        <text x="284" y="107" fill="#d7f0a3" fontSize="9" fontFamily="monospace" letterSpacing="1.1">
          OBJETO DE ESTUDIO
        </text>
      </svg>

      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <span className="micro-label text-white/40">ESQUEMA ILUSTRATIVO</span>
        <span className="flex items-center gap-2 font-mono text-[10px] text-white/55">
          <span className="size-1.5 rounded-full bg-lime" />
          NO ES UNA MUESTRA REAL
        </span>
      </div>
    </div>
  );
}

function ConceptSpecimen() {
  return (
    <div className="relative overflow-hidden rounded-sm border border-ink/15 bg-[#e7e5d9] p-5 sm:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(21,32,24,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(21,32,24,.055)_1px,transparent_1px)] bg-size-[28px_28px]" />
      <div className="relative flex items-center justify-between">
        <span className="micro-label text-mute">PLACA CONCEPTUAL / 002</span>
        <span className="font-mono text-[10px] tracking-widest text-mute">NO CLÍNICA</span>
      </div>
      <div className="relative grid min-h-[260px] place-items-center sm:min-h-[320px]">
        <svg
          className="w-full max-w-[380px]"
          viewBox="0 0 380 280"
          role="img"
          aria-labelledby="egg-title egg-description"
        >
          <title id="egg-title">Representación esquemática de una forma ovalada</title>
          <desc id="egg-description">
            Ilustración de concepto con un contorno ovalado y líneas de referencia; no representa una fotografía microscópica.
          </desc>
          <ellipse cx="190" cy="141" rx="82" ry="105" fill="#c47d50" fillOpacity=".72" stroke="#8f5036" strokeWidth="2" />
          <ellipse cx="190" cy="141" rx="71" ry="94" fill="none" stroke="#f5d4a9" strokeOpacity=".65" strokeWidth="2" />
          <path d="M143 84c15-20 39-32 64-32" fill="none" stroke="#fff1d4" strokeLinecap="round" strokeWidth="4" />
          <path d="M78 40v202m-5-202h10m-10 202h10M302 40v202m-5-202h10m-10 202h10" stroke="#324239" strokeWidth="1" />
          <path d="M88 64H137m105 155h49" stroke="#324239" strokeDasharray="3 4" />
          <circle cx="137" cy="64" r="3" fill="#de7150" />
          <circle cx="242" cy="219" r="3" fill="#de7150" />
          <text x="17" y="147" fill="#324239" fontSize="9" fontFamily="monospace" transform="rotate(-90 17 147)">
            MORFOLOGÍA · ESQUEMA
          </text>
        </svg>
      </div>
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-4">
        <span className="font-mono text-[10px] tracking-[0.14em] text-mute">SIN FOTOGRAFÍA / SIN MODELO</span>
        <span className="rounded-full border border-ink/20 px-3 py-1 text-[11px] text-ink">
          Visualización conceptual
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-shell relative overflow-hidden bg-ink text-paper">
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-16 sm:px-10 lg:min-h-[650px] lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:py-20">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 border border-white/15 px-3 py-2">
              <span className="size-2 rounded-full bg-lime" />
              <span className="micro-label text-white/75">HACKATHON · PROTOTIPO EN DESARROLLO</span>
            </div>
            <p className="micro-label mb-4 text-lime">UN NUEVO CAMPO DE VISIÓN</p>
            <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[.88] tracking-[-.075em]">
              Del
              <br />
              microscopio
              <br />
              al <span className="font-serif font-normal italic text-lime">pixel.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Exploramos un clip-on para microscopio y visión por computadora como nuevas herramientas para estudiar{" "}
              <i>Fasciola hepatica</i> y sus imitadores.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#pitch" className="button-lime">
                Ver el pitch <span aria-hidden="true">↗</span>
              </a>
              <a href="#concepto" className="button-ghost">
                Explorar la idea <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="mt-8 font-mono text-[10px] tracking-[0.15em] text-white/40">
              UNA PROPUESTA DESDE URUGUAY · 2026
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="absolute -left-6 top-8 hidden h-16 w-16 border-l border-t border-lime/60 sm:block" aria-hidden="true" />
            <div className="absolute -bottom-5 -right-4 hidden h-16 w-16 border-b border-r border-lime/60 sm:block" aria-hidden="true" />
            <SpecimenField />
            <p className="mt-3 text-right font-mono text-[10px] tracking-wider text-white/40">
              ILUSTRACIÓN CONCEPTUAL · NO DIAGNÓSTICA
            </p>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-2 px-6 py-4 font-mono text-[10px] tracking-[0.15em] text-white/45 sm:px-10">
            <span className="text-lime">IDEA EN MOVIMIENTO</span>
            <span>CAPTURAR</span>
            <span aria-hidden="true">/</span>
            <span>DETECTAR</span>
            <span aria-hidden="true">/</span>
            <span>DISTINGUIR</span>
            <span aria-hidden="true">/</span>
            <span>REVISAR</span>
          </div>
        </div>
      </section>

      <section id="concepto" className="scroll-mt-24 bg-paper px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="micro-label text-terracotta">01 / EL DISPOSITIVO</p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-mute">
              Un microscopio convencional. Un teléfono. Una forma distinta de conectarlos.
            </p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-.055em] text-ink sm:text-6xl">
              Que una idea de laboratorio también pueda <em className="font-serif font-normal">mirar de cerca.</em>
            </h2>
            <div className="mt-8 grid gap-8 border-t border-line pt-6 sm:grid-cols-2">
              <p className="max-w-lg text-base leading-7 text-mute">
                El pitch explora un accesorio acoplable al microscopio, un objetivo ×4 y una fuente de luz uniforme para registrar muestras.
                Es el punto de partida de la propuesta, no un producto disponible.
              </p>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-terracotta/10 font-mono text-sm text-terracotta">!</span>
                <p className="text-sm leading-6 text-mute">
                  La pieza se presenta como concepto para hackathon. Su diseño, rendimiento y compatibilidad aún deben comprobarse en un laboratorio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recorrido" className="scroll-mt-24 bg-[#e9e9dc] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <p className="micro-label text-terracotta">02 / EL RECORRIDO</p>
            <div>
              <h2 className="max-w-3xl text-4xl font-medium leading-[1.03] tracking-[-.05em] text-ink sm:text-6xl">
                Una imagen. Tres preguntas. <em className="font-serif font-normal">Una persona al final.</em>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-mute">
                Así imaginamos la secuencia de trabajo. Cada etapa es una hipótesis que necesita investigación y validación.
              </p>
            </div>
          </div>
          <div className="grid border-y border-ink/20 md:grid-cols-3 md:divide-x md:divide-ink/20">
            {stages.map((stage) => (
              <article key={stage.number} className="group py-7 md:px-7 md:py-8 first:md:pl-0 last:md:pr-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-terracotta">{stage.number} / 03</span>
                  <span className="micro-label text-mute">{stage.label}</span>
                </div>
                <h3 className="mt-11 text-3xl font-medium tracking-[-.04em] text-ink">{stage.name}</h3>
                <p className="mt-3 min-h-20 max-w-sm text-sm leading-6 text-mute">{stage.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-mute">
            <span className="size-1.5 rounded-full bg-terracotta" />
            Flujo propuesto; todavía no está conectado a un detector ni a un clasificador funcional.
          </p>
        </div>
      </section>

      <section id="distincion" className="scroll-mt-24 bg-paper px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="micro-label text-terracotta">03 / EL RETO CIENTÍFICO</p>
            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.055em] text-ink sm:text-6xl">
              No basta con encontrar. Hay que <em className="font-serif font-normal">distinguir.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-mute">
              El pitch señala un desafío concreto: algunos huevos de <i>Fasciola</i> pueden parecerse a los de{" "}
              <i>Paramphistomum</i>. Explorar esas diferencias requiere imágenes adecuadas, datos confiables y revisión experta.
            </p>
            <div className="mt-7 border-l-2 border-terracotta pl-4">
              <p className="text-sm font-semibold text-ink">La IA no reemplaza a quien conoce la muestra.</p>
              <p className="mt-1 text-sm leading-6 text-mute">
                Si alguna vez se desarrolla un modelo, sus límites e incertidumbre también deben formar parte del resultado.
              </p>
            </div>
          </div>
          <div>
            <ConceptSpecimen />
            <p className="mt-3 text-xs leading-5 text-mute">
              Forma dibujada solo para explicar la idea. No es una fotografía microscópica, una predicción ni un resultado de <i>FasciolaVision</i>.
            </p>
          </div>
        </div>
      </section>

      <section id="pitch" className="scroll-mt-24 bg-ink px-6 py-20 text-paper sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-white/15 pb-6">
            <div>
              <p className="micro-label text-lime">04 / LA IDEA EN 01:25</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-.05em] sm:text-6xl">
                Mirá el <em className="font-serif font-normal text-lime">pitch.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Una presentación conceptual del desafío, el clip-on y el flujo de análisis imaginado. El video no muestra un sistema clínico en funcionamiento.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
            <div className="mx-auto w-full max-w-[330px]">
              <div className="video-frame">
                <video
                  aria-label="Video de presentación del concepto FasciolaVision"
                  className="aspect-[720/1560] w-full bg-[#111713] object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster="/fasciola-pitch-poster.svg"
                  width="720"
                  height="1560"
                >
                  <source src="/fasciola-hackathon.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">PRESENTACIÓN DEL PROYECTO · 01:25</p>
            </div>

            <div>
              <p className="micro-label text-white/45">RECORRIDO DEL VIDEO</p>
              <ol className="mt-4 divide-y divide-white/10">
                {pitchNotes.map(([time, note]) => (
                  <li key={time} className="grid grid-cols-[65px_1fr] gap-3 py-4">
                    <span className="font-mono text-xs text-lime">{time}</span>
                    <span className="text-sm leading-6 text-white/75">{note}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 max-w-xl border border-white/15 p-4 text-xs leading-5 text-white/55">
                El material explica la idea. Las imágenes animadas son ilustrativas; no corresponden a una muestra analizada ni validan el desempeño de un modelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="estado" className="scroll-mt-24 bg-lime px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="micro-label text-ink/65">05 / ESTADO DEL PROYECTO</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-.04em] text-ink sm:text-4xl">
              La idea está en desarrollo. La ciencia va primero.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-t border-ink/25 pt-4">
              <h3 className="font-semibold text-ink">Qué es hoy</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Un concepto de hackathon para explorar microscopía accesible y visión por computadora aplicada a parasitología.
              </p>
            </div>
            <div className="border-t border-ink/25 pt-4">
              <h3 className="font-semibold text-ink">Qué todavía no es</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                No analiza imágenes, no genera diagnósticos y no está validado clínica ni técnicamente.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-ink/25 pt-5">
          <Link href="/acerca" className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-ink/40 underline-offset-4">
            Conocé el proyecto y sus límites <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
