const proyectos = [
  {
    id: 1,
    titulo: "Dashboard de Ventas",
    descripcion: "Dashboard interactivo con Power BI y SQL Server.",
  },
  {
    id: 2,
    titulo: "Web de Citas Médicas",
    descripcion: "Sistema ASP.NET Core y React para agendar citas.",
  },
  {
    id: 3,
    titulo: "Modelo de Predicción",
    descripcion: "Machine Learning con Python y Scikit-learn.",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h1>Mis Proyectos</h1>
        <div className="project-grid">
          {proyectos.map((proj) => (
            <div key={proj.id} className="project-card">
              <h2>{proj.titulo}</h2>
              <p>{proj.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
