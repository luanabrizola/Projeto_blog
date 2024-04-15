import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog da Lulu",
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
      <body className={inter.className}>
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
      </body>
    </>
  );
}
