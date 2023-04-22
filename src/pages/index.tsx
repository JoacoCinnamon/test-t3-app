import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

//import Link from "next/link";
//import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Etiquetando</title>
        <meta name="description" content="Generando etiquetas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#bcbbbe] to-[#9fa4f9]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {!user.isSignedIn && <SignInButton mode="modal" />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
      </main>
    </>
  );
};

export default Home;
