
import "./globals.css";

export const metadata = {
  title: "Rosalvo Alves | Portfólio",
  description:
    "Currículo e Projetos Rosalvo Alves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
