"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Field, Message } from "./form-bits";

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "");
    const pass = String(f.get("password") ?? "");
    if (!/^\S+@\S+\.\S+$/.test(email) || pass.length < 8)
      return setMsg({ ok: false, text: "Revisá el correo y usá una contraseña de al menos 8 caracteres." });
    // TODO: reemplazar por signIn() de Auth.js o supabase.auth.signInWithPassword()
    setMsg({ ok: true, text: "Prototipo sin servidor: el formulario funciona pero no hay autenticación real todavía." });
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <Field label="Correo electrónico" id="email" type="email" autoComplete="email" required />
      <Field label="Contraseña" id="password" type={show ? "text" : "password"} autoComplete="current-password" minLength={8} required />
      <div className="my-4 flex items-center justify-between text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /> Mostrar contraseña</label>
        <Link href="/login" className="text-sec" onClick={(e) => { e.preventDefault(); setMsg({ ok: true, text: "Recuperación de contraseña disponible cuando se conecte el backend." }); }}>¿Olvidaste tu contraseña?</Link>
      </div>
      <button className="w-full rounded-xl bg-prim py-2.5 font-semibold text-white transition hover:bg-sec">Ingresar</button>
      <Message state={msg} />
    </form>
  );
}
