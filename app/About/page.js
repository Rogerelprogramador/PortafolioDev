'use client'
import { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about");
    aboutSection.style.opacity = 0;
    setTimeout(() => {
      aboutSection.style.transition = "opacity 1.5s ease-in-out";
      aboutSection.style.opacity = 1;
    }, 100);
  }, []);

  return (
    <section className="about">
      <h1>Sobre mí</h1>
      <p>
        Soy <strong>Ingeniero de Sistemas</strong> en formación, apasionado por la tecnología, el liderazgo y la creación de soluciones basadas en datos para la toma de decisiones inteligentes. Me especializo en desarrollo web, análisis de datos y gestión de proyectos con metodologías ágiles.
      </p>
      <h2>Experiencia Destacada</h2>
      <ul>
        <li>Project Manager y desarrollador ágil en BPO CENTER, liderando soluciones tecnológicas con Appsheet y Google Apps Script.</li>
        <li>Consultor y desarrollador en Ms. Dynamics Business Central ERP, creando reportes personalizados y flujos funcionales.</li>
        <li>Participante y evaluador en competencias internacionales de robótica y ciencia, demostrando compromiso con la innovación.</li>
      </ul>
      <h2>Habilidades Clave</h2>
      <p>
        Trabajo en equipo, liderazgo, resiliencia, análisis de datos, programación en JavaScript, C#, PHP, manejo de bases de datos (SQL Server, Oracle, Firebase), y experiencia en metodologías ágiles como Scrum y Kanban.
      </p>
    </section>
  );
}
