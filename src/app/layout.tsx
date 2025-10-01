import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#7c3aed", // Cor sólida uniforme
          color: "white",
        }}
      >
        {/* Navbar aparece em todas as páginas */}
        <Navbar />

        {/* Conteúdo principal */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer único */}
        <Footer />
      </body>
    </html>
  );
}
