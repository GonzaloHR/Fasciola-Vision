import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui";
import RegisterForm from "@/components/register-form";

export const metadata: Metadata = { title: "Crear cuenta" };

export default function Registro() {
  return (
    <div className="mx-auto max-w-xl px-6 py-12">
      <Card>
        <h1 className="text-2xl font-bold tracking-tight text-prim">Crear cuenta</h1>
        <p className="text-mute">Elegí cómo vas a usar la plataforma.</p>
        <RegisterForm />
        <p className="mt-5 text-center text-sm text-mute">¿Ya tenés cuenta? <Link href="/login" className="text-sec">Ingresá</Link></p>
      </Card>
    </div>
  );
}
