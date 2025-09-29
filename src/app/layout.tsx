import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal da Vacinação",
  description: "Campanha Nacional de Vacinação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        
        <main style={{ minHeight: "calc(100vh - 200px)" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}