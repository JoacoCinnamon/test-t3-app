import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Etiquetando</title>
        <meta name="description" content="Generando etiquetas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-zinc-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
};

export default Home;
