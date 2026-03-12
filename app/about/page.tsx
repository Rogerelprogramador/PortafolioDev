"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Power BI",
    "AppSheet",
    "Google Apps Script",
    "SQL Server",
    "PostgreSQL",
    "Firebase",
    "Laravel",
    "Next.js",
    "NodeJS",
    "Microsoft Fabric",
    "DevOps",
    "Scrum",
    "Kanban",
    "GitHub",
  ];

  const experiences = [
    {
      title: "BPO CENTER",
      role: "Project Manager & Data Analyst",
      desc: "Gestión del sistema SMART PDV, desarrollo de dashboards Power BI y automatización de procesos con AppSheet y Apps Script.",
    },
    {
      title: "DIMA LTDA",
      role: "Consultor ERP",
      desc: "Desarrollo de reportes y personalizaciones en Microsoft Dynamics Business Central ERP utilizando AL y Report Builder.",
    },
    {
      title: "Competencias Tecnológicas",
      role: "Robótica & Ciencia",
      desc: "Participación y evaluación en competencias internacionales de robótica e innovación tecnológica.",
    },
  ];

  return (
    <section className="relative py-24 px-6 flex justify-center">
      <div className="max-w-6xl w-full space-y-24">
        {/* HERO PERSONAL */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            RB
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Roger Bilbao Quiroz
          </h1>

          <p className="text-indigo-400 font-semibold mb-6">
            DATA ANALYST • SOFTWARE DEVELOPER
          </p>

          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ingeniero de Sistemas especializado en Business Intelligence,
            automatización de procesos y desarrollo de soluciones tecnológicas
            orientadas a negocio. Transformo datos en información accionable
            para optimizar decisiones operativas y comerciales.
          </p>
        </motion.div>

        {/* INFORMACION PERSONAL */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-indigo-400">Contacto</h3>

            <p className="text-sm text-slate-300">📞 +591 73693355</p>
            <p className="text-sm text-slate-300">
              📧 Rogerbilbaoquiroz@gmail.com
            </p>
            <p className="text-sm text-slate-300">📍 Santa Cruz – Bolivia</p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-indigo-400">Idiomas</h3>

            <p className="text-sm text-slate-300">Español – Nativo</p>
            <p className="text-sm text-slate-300">Inglés – Técnico</p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-indigo-400">
              Red Profesional
            </h3>

            <p className="text-sm text-slate-300">
              LinkedIn: linkedin.com/in/rogerbilbaois
            </p>
          </div>
        </motion.div>

        {/* EXPERIENCIA */}

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experiencia Profesional
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                  {exp.title}
                </h3>

                <p className="text-sm text-slate-400 mb-2">{exp.role}</p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Tecnologías y Herramientas
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 text-sm rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-600/20 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
