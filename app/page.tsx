"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const tech = [
    "Next.js",
    "Power BI",
    "AppSheet",
    "Google Apps Script",
    "SQL",
    "Data Analytics",
  ];

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* FOTO */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-10 md:mt-16"
        >
          <div className="relative">
            {/* glow */}

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-2xl opacity-40 rounded-full"></div>

            {/* marco */}

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/ROGER.jpeg"
                alt="Roger Bilbao"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* badge */}

          <div className="inline-block mb-6 px-4 py-2 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
            Data • Automation • Business Intelligence
          </div>

          {/* titulo */}

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hola, soy
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              Roger Bilbao Quiroz
            </span>
          </h1>

          {/* subtitle */}

          <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-8">
            Ingeniero de Sistemas · Data Analyst · AppSheet & Apps Script Expert
            <br className="hidden md:block" />
            Project Manager · Agile Developer
          </p>

          {/* descripcion */}

          <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
            Ayudo a empresas a convertir datos en decisiones estratégicas
            mediante automatización de procesos, analítica avanzada y desarrollo
            de soluciones tecnológicas escalables.
          </p>

          {/* botones */}

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 hover:scale-105 transition"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition"
            >
              Contáctame
            </Link>
          </div>

          {/* tech stack */}

          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-400 transition"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
