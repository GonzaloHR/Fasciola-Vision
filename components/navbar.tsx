"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#concepto", label: "La idea" },
  { href: "/#recorrido", label: "El recorrido" },
  { href: "/sabias", label: "Contexto" },
  { href: "/#pitch", label: "Pitch" },
  { href: "/acerca", label: "Proyecto" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-tight text-ink" aria-label="FasciolaVision, inicio">
          <span className="grid size-8 place-items-center border border-ink/30 font-mono text-[11px] font-bold text-terracotta">FV</span>
          FasciolaVision
        </Link>
        <button
          className="rounded-sm border border-ink/20 px-3 py-2 text-sm text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
        <nav
          id="primary-navigation"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[68px] flex-col gap-1 border-b border-ink/10 bg-paper px-6 py-3 md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0`}
          aria-label="Navegación principal"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-3 py-2 text-sm transition hover:text-terracotta ${path === l.href ? "font-semibold text-terracotta" : "text-mute"}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/#estado" onClick={() => setOpen(false)}
            className="ml-1 inline-flex items-center justify-center gap-3 bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition hover:bg-terracotta">
            Estado del proyecto <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
