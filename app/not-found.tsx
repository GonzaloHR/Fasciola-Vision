import { ButtonLink } from "@/components/ui";

export const metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <div className="px-6 py-24 text-center">
      <p className="text-8xl font-bold leading-none tracking-tighter text-prim sm:text-[10rem]">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-prim">No encontramos esta página</h1>
      <p className="mx-auto mb-7 mt-3 max-w-md text-lg text-mute">La dirección que buscás no existe o fue movida.</p>
      <ButtonLink href="/" primary>Volver al inicio</ButtonLink>
    </div>
  );
}
