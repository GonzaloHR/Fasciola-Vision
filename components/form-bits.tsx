import type { InputHTMLAttributes } from "react";

export function Field({ label, id, ...props }: { label: string; id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input id={id} name={id} className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 outline-sec focus:outline-2" {...props} />
    </div>
  );
}

export function Message({ state }: { state: { ok: boolean; text: string } | null }) {
  if (!state) return <div role="status" aria-live="polite" />;
  return (
    <div role="status" aria-live="polite"
      className={`mt-4 rounded-xl px-3.5 py-3 text-sm ${state.ok ? "bg-sec/10 text-prim" : "bg-danger/10 text-danger"}`}>
      {state.text}
    </div>
  );
}
