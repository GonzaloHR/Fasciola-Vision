"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sabias", label: "¿Sabías que?" },
  { href: "/acerca", label: "Acerca de" },
  { href: "/login", label: "Ingresar" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-prim">
          <span className="size-7 rounded-lg bg-gradient-to-br from-prim to-sec" />
          FasciolaVision
        </Link>
        <button className="rounded-lg border border-line px-3 py-2 md:hidden" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-1 border-b border-line bg-white px-6 py-3 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-[15px] hover:bg-bg hover:text-prim ${path === l.href ? "bg-bg text-prim" : ""}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/registro" onClick={() => setOpen(false)}
            className="rounded-xl bg-prim px-4 py-2 text-center text-[15px] font-semibold text-white transition hover:bg-sec">
            Probar gratis
          </Link>
        </nav>
      </div>
    </header>
  );
}
