import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-prim text-slate-300">
      <div className="mx-auto max-w-6xl px-6 pb-7 pt-10">
        <div className="flex flex-wrap justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="size-7 rounded-lg bg-gradient-to-br from-white/80 to-sec" />FasciolaVision
            </div>
            <p className="mt-2.5 max-w-xs text-sm">Diagnóstico asistido por IA para fasciolisis. Herramienta de apoyo, no reemplaza el criterio profesional.</p>
          </div>
          <div className="flex gap-4 text-sm text-white">
            <Link href="/">Inicio</Link><Link href="/sabias">¿Sabías que?</Link>
            <Link href="/acerca">Acerca de</Link><Link href="/login">Ingresar</Link>
          </div>
        </div>
        <p className="mt-6 border-t border-white/15 pt-4 text-sm">© {new Date().getFullYear()} FasciolaVision. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
