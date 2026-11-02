import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  const base = "inline-block rounded-xl border px-5 py-2.5 font-semibold transition";
  const style = primary
    ? "border-prim bg-prim text-white hover:border-sec hover:bg-sec"
    : "border-line bg-white text-prim hover:border-sec";
  return <Link href={href} className={`${base} ${style}`}>{children}</Link>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(23,35,29,.04),0_8px_24px_rgba(23,35,29,.04)] ${className}`}>
      {children}
    </div>
  );
}

export function PageHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-2 pt-14 sm:px-10">
      <p className="micro-label mb-4 text-terracotta">FASCIOLAVISION / CUADERNO DE CAMPO</p>
      <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-.05em] text-ink sm:text-6xl">{title}</h1>
      {children && <p className="mt-5 max-w-2xl text-base leading-7 text-mute">{children}</p>}
    </div>
  );
}
