import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white/65">
      <div className="mx-auto max-w-7xl px-6 pb-7 pt-10 sm:px-10">
        <div className="flex flex-wrap justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-base font-semibold text-paper">
              <span className="grid size-8 place-items-center border border-white/35 font-mono text-[11px] text-lime">FV</span>
              FasciolaVision
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6">
              Una propuesta de hackathon sobre microscopía, visión por computadora y parasitología. Aún en etapa conceptual; no ofrece diagnósticos.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper">
            <Link href="/#concepto" className="hover:text-lime">La idea</Link>
            <Link href="/sabias" className="hover:text-lime">Contexto</Link>
            <Link href="/#pitch" className="hover:text-lime">Pitch</Link>
            <Link href="/acerca" className="hover:text-lime">Proyecto</Link>
          </div>
        </div>
        <p className="mt-6 border-t border-white/15 pt-4 font-mono text-[10px] tracking-wider">
          © {new Date().getFullYear()} FASCIOLAVISION · PROTOTIPO DE HACKATHON · URUGUAY
        </p>
      </div>
    </footer>
  );
}
