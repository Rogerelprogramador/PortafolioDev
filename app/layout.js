import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Portafolio Roger Bilbao",
  description: "Portafolio personal moderno con CSS global"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="navbar">
          <h1 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#2563eb" }}>
            Roger Bilbao
          </h1>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/About">Sobre mí</Link>
            <Link href="/projects">Proyectos</Link>
            <Link href="/contact">Contacto</Link>
          </nav>
        </header>
        {children}
        <footer>
          © {new Date().getFullYear()} Roger Bilbao. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
