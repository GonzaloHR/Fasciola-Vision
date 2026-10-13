import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui";
import LoginForm from "@/components/login-form";

export const metadata: Metadata = { title: "Ingresar" };

export default function Login() {
  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <Card>
        <h1 className="text-2xl font-bold tracking-tight text-prim">Ingresar</h1>
        <p className="text-mute">Accedé a tu cuenta personal o de empresa.</p>
        <LoginForm />
        <p className="mt-5 text-center text-sm text-mute">¿No tenés cuenta? <Link href="/registro" className="text-sec">Registrate</Link></p>
      </Card>
    </div>
  );
}
