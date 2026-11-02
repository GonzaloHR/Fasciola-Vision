import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "FasciolaVision · Del microscopio al pixel", template: "%s · FasciolaVision" },
  description: "Una propuesta de hackathon sobre microscopía, visión por computadora y Fasciola hepatica. Prototipo conceptual; no ofrece diagnósticos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
