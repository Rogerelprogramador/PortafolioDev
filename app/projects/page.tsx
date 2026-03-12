"use client";

import { motion } from "framer-motion";

type Project = {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
};

const proyectos: Project[] = [
  {
    id: 1,
    titulo: "Portal BI Embebido Power BI",
    descripcion:
      "Desarrollo de portal Business Intelligence para embeber dashboards de Power BI utilizando tokens de Azure Embedded, permitiendo compartir analítica avanzada a múltiples usuarios usando una sola licencia Power BI Pro, optimizando costos de licenciamiento empresarial.",
    tecnologias: [
      "Power BI",
      "Azure",
      "Embedded Analytics",
      "Token Auth",
      "Business Intelligence",
    ],
  },

  {
    id: 2,
    titulo: "Sistema Web Resegol",
    descripcion:
      "Sistema web desarrollado en PHP para la gestión de reservas de canchas sintéticas con monitoreo en tiempo real y dashboards BI para analizar ocupación y rendimiento.",
    tecnologias: ["PHP", "MySQL", "BI"],
  },

  {
    id: 3,
    titulo: "Censo de EDF (Nacional)",
    descripcion:
      "Aplicación móvil basada en Google AppSheet y Apps Script para el censo nacional de EDF en puntos de venta, con analítica de datos y dashboards BI.",
    tecnologias: ["AppSheet", "Apps Script", "Cloud", "BI"],
  },

  {
    id: 4,
    titulo: "Reportes de Ventas Trade Marketing",
    descripcion:
      "Aplicación móvil para el reporte cuantificable de ventas en PDVs con analítica avanzada y dashboards BI para analizar tendencias comerciales.",
    tecnologias: ["AppSheet", "Apps Script", "Power BI"],
  },

  {
    id: 5,
    titulo: "Reposiciones y Censo de Clientes",
    descripcion:
      "Aplicación móvil para registrar reposiciones, visitas, asistencia y censo de clientes en PDVs con analítica integrada.",
    tecnologias: ["AppSheet", "Cloud", "Analytics"],
  },

  {
    id: 6,
    titulo: "Relevos de Precio",
    descripcion:
      "Aplicación móvil para el monitoreo de precios en PDVs con analítica de mercado y dashboards para análisis competitivo.",
    tecnologias: ["AppSheet", "Data Analytics", "BI"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos Destacados
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones tecnológicas enfocadas en Business Intelligence,
            automatización de procesos y desarrollo de plataformas de análisis
            de datos para entornos empresariales.
          </p>
        </motion.div>

        {/* GRID */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {proyectos.map((proj) => (
            <motion.div
              key={proj.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition hover:border-indigo-500/40 hover:shadow-xl"
            >
              {/* ICON */}

              <div className="mb-4 w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-6h13M9 7v10M3 17h6M3 7h6"
                  />
                </svg>
              </div>

              {/* TITLE */}

              <h2 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                {proj.titulo}
              </h2>

              {/* DESCRIPTION */}

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {proj.descripcion}
              </p>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-2">
                {proj.tecnologias.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
