import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Portafolio Roger Bilbao",
  description: "Portafolio personal de Roger Bilbao",
  icons: {
    icon: "/Favicon.ico",
    shortcut: "/Favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased">
        {/* Fondo estilo glow */}

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>

          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-40 right-0 animate-pulse"></div>

          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse"></div>
        </div>

        <Navbar />

        <main className="pt-24 px-6 max-w-7xl mx-auto">{children}</main>

        <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Roger Bilbao. Todos los derechos
          reservados.
        </footer>
      </body>
    </html>
  );
}
