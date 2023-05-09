import { type NextPage } from "next";
import Head from "next/head";

const SobreNosotros: NextPage = () => {
  return (
    <>
      <Head>
        <title>Etiquetando - Sobre Nosotros</title>
        <meta name="description" content="Generando etiquetas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
};

export default SobreNosotros;
