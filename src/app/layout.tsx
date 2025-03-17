import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased box-border w-screen min-h-screen flex flex-col`}
      >
        <header className="border-b-1 w-full flex justify-between items-center p-2">
          <h1>João Vitor Winter</h1>
          <nav>
            <ul className="flex gap-4 flex-wrap">
              <Link className="hover:border-b-black transition-all border-b-1 border-b-transparent" href="/"><li>HOME</li></Link>
              <Link className="hover:border-b-black transition-all border-b-1 border-b-transparent" href="/sobre"><li>SOBRE</li></Link>
              <Link className="hover:border-b-black transition-all border-b-1 border-b-transparent" href="/habilidades"><li>HABILIDADES</li></Link>
              <Link className="hover:border-b-black transition-all border-b-1 border-b-transparent" href="/projetos"><li>PROJETOS</li></Link>
              <Link className="hover:border-b-black transition-all border-b-1 border-b-transparent" href="/contato"><li>CONTATO</li></Link>
            </ul>
            </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
