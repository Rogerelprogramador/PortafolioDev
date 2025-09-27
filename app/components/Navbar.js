'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {  // Verifica que el elemento exista
        if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    // Solo en cliente (evita SSR errors)
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      // Cleanup: Remueve listener al desmontar
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);  // Array vacío: Ejecuta solo una vez al montar

  return (
    <header className="navbar">
      <h1 className="navbar-title">Roger Bilbao</h1>
      <nav>
        <Link href="/" className="nav-link">Inicio</Link>
        <Link href="/About" className="nav-link">Sobre mí</Link>
        <Link href="/projects" className="nav-link">Proyectos</Link>
        <Link href="/contact" className="nav-link">Contacto</Link>
      </nav>
    </header>
  );
}
