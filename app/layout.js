import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portafolio Roger Bilbao",
  description: "Portafolio personal moderno con CSS global",
   icons: {
    icon: '../Favicon.ico',  // Favicon principal (para tabs/bookmarks)
    shortcut: '/Favicon.ico',  // Alias para compatibilidad
    apple: '/apple-touch-icon.png',  // Para iOS (home screen)
    // Opcional: Para Android/PWA
    // android: '/android-chrome-192x192.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {/* Fondo Nebulosa Animado: Cubre toda la página (CSS lo anima) */}
        <div className="nebula-bg">
          <div className="nebula-layer"></div>
          <div className="nebula-layer"></div>
          <div className="nebula-layer"></div>
        </div>

        {/* Navbar: Se hidrata en cliente para scroll effects */}
        <Navbar />

        {/* Contenido principal de las páginas */}
        <main>{children}</main>

        {/* Footer estático */}
        <footer className="footer">
          © {new Date().getFullYear()} Roger Bilbao. Todos los derechos reservados.
        </footer>

        {/* Script para Efecto Halo de Luz con Cursor: Se ejecuta en cliente */}
        {/* Script para Efecto Halo de Luz con Cursor: Se ejecuta en cliente */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;
        const speed = 0.1;  // ← AJUSTE: Subido de 0.08 a 0.2 para follow más rápido (menos delay)

        function animate() {
          // Opción 1: Follow con trail suave (recomendado)
          glowX += (mouseX - glowX) * speed;
          glowY += (mouseY - glowY) * speed;
          glow.style.left = glowX + 'px';
          glow.style.top = glowY + 'px';

          // Opción 2: Follow INSTANTÁNEO (sin delay - descomenta si quieres)
          //glow.style.left = mouseX + 'px';
          //glow.style.top = mouseY + 'px';

          requestAnimationFrame(animate);
        }

        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          //console.log('Mouse:', mouseX, mouseY);  // ← Opcional: Debug en consola (remueve después)
        });

        animate();

        window.addEventListener('resize', () => {
          // Opcional: Recalcula posición
        });
      })();
    `,
  }}
/>

      </body>
    </html>
  );
}