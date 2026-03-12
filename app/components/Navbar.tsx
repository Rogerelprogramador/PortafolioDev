"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}

        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold">
            RB
          </div>

          <span className="font-semibold text-slate-200">Roger Bilbao</span>
        </Link>

        {/* DESKTOP MENU */}

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative transition
${active ? "text-indigo-400" : "text-slate-300 hover:text-indigo-400"}`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-sm hover:bg-indigo-700 transition"
          >
            Contactar
          </Link>
        </div>

        {/* MOBILE BUTTON */}

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
