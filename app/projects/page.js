import './Projects.css';

const proyectos = [
  
  {
    id: 2,
    titulo: "Sistema Web Resegol",
    descripcion: "Sistema web robusto desarrollado en PHP para la gestión eficiente de reservas de canchas sintéticas, incluyendo funcionalidades de seguimiento en tiempo real, con analítica integrada y tableros BI para monitorear ocupación y rendimiento."
  },
  {
    id: 3,
    titulo: "Censo de EDF (Nacional)",
    descripcion: "Aplicación móvil con infraestructura en la nube utilizando Google Appsheet y Appscript, diseñada para el censo preciso de EDF en puntos de venta (PDVs), incorporando analítica de datos y tableros BI para generar insights accionables."
  },
  {
    id: 4,
    titulo: "Reportes de Ventas Trade Marketing",
    descripcion: "Aplicación móvil con infraestructura en la nube mediante Google Appsheet y Appscript, enfocada en el reporte cuantificable y detallado de ventas en PDVs, con analítica avanzada y tableros BI para el análisis de tendencias y desempeño."
  },
  {
    id: 5,
    titulo: "Reposiciones, y Censo Clientes en PDV",
    descripcion: "Aplicación móvil con infraestructura en la nube usando Google Appsheet y Appscript, para el reporte cuantificable de reposiciones efectivas, asistencias, visitas, censo de clientes y layouts en PDVs, enriquecida con analítica y tableros BI para optimizar operaciones."
  },
  {
    id: 6,
    titulo: "Relevos de Precio",
    descripcion: "Aplicación móvil con infraestructura en la nube mediante Google Appsheet y Appscript, dedicada al relevamiento y reporte cuantificable de precios de productos en PDVs, incluyendo analítica de mercado y tableros BI para monitorear variaciones, proyecciones y estrategias competitivas."
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <link rel="icon" href="/favicon.ico" /> 
      <div className="container">
        <h1>Mis Proyectos</h1>
        <div className="project-grid">
          {proyectos.map((proj) => (
            <div key={proj.id} className="project-card card">
              <h2>{proj.titulo}</h2>
              <p>{proj.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
