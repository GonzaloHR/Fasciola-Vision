"use client";

import { FormEvent, useState } from "react";
import { Field, Message } from "./form-bits";

const types = [
  { v: "u", t: "Usuario", d: "Quiero probarla" },
  { v: "m", t: "Empresa mediana", d: "Equipo propio" },
  { v: "g", t: "Empresa grande", d: "Integración y API" },
];
const countries = ["Uruguay", "Argentina", "Brasil", "Chile", "Paraguay", "Otro"];

export default function RegisterForm() {
  const [type, setType] = useState("u");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const bad =
      !String(f.get("nombre") ?? "").trim() ||
      !/^\S+@\S+\.\S+$/.test(String(f.get("email") ?? "")) ||
      String(f.get("password") ?? "").length < 8 ||
      !f.get("terminos") ||
      (type !== "u" && !String(f.get("organizacion") ?? "").trim());
    if (bad) return setMsg({ ok: false, text: "Completá todos los campos, usá una contraseña de al menos 8 caracteres y aceptá los términos." });
    // TODO: reemplazar por server action / API que cree el usuario (Auth.js, Supabase, etc.)
    setMsg({ ok: true, text: "Prototipo sin servidor: no se creó ninguna cuenta ni se guardó ningún dato." });
    form.reset();
    setType("u");
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
        {types.map((o) => (
          <label key={o.v} className={`cursor-pointer rounded-xl border p-3 text-sm font-medium ${type === o.v ? "border-sec bg-sec/10" : "border-slate-300"}`}>
            <input type="radio" name="tipo" value={o.v} checked={type === o.v} onChange={() => setType(o.v)} className="sr-only" />
            {o.t}<small className="block font-normal text-mute">{o.d}</small>
          </label>
        ))}
      </div>
      <Field label="Nombre completo" id="nombre" type="text" autoComplete="name" required />
      {type !== "u" && <Field label="Empresa u organización" id="organizacion" type="text" autoComplete="organization" required />}
      <Field label="Correo electrónico" id="email" type="email" autoComplete="email" required />
      <div className="mt-4">
        <label htmlFor="pais" className="mb-1.5 block text-sm font-semibold">País</label>
        <select id="pais" name="pais" className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5">
          {countries.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <Field label="Contraseña" id="password" type="password" autoComplete="new-password" minLength={8} required />
      <label className="my-4 flex gap-2 text-sm"><input type="checkbox" name="terminos" /> Acepto los términos de uso y la política de privacidad.</label>
      <button className="w-full rounded-xl bg-prim py-2.5 font-semibold text-white transition hover:bg-sec">Crear cuenta</button>
      <Message state={msg} />
    </form>
  );
}
