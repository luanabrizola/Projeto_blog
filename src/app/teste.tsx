import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog da Lulu",
  description: "Descrição do seu blog aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <h1>Blog da Lulu</h1>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/sobreMim">Sobre Mim</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Blog Pessoal de Luana</p>
      </footer>
    </>
  );
}
