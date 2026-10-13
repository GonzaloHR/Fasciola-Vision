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
    <div className={`rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_24px_rgba(30,58,95,.05)] ${className}`}>
      {children}
    </div>
  );
}

export function PageHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-2 pt-14">
      <h1 className="text-3xl font-bold tracking-tight text-prim sm:text-5xl">{title}</h1>
      {children && <p className="mt-3 max-w-2xl text-mute">{children}</p>}
    </div>
  );
}
