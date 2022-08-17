import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Tailwind Starter</title>
        <meta name="description" content="Next Tailwind Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-800">
          Next Tailwind Starter
        </h1>
      </main>
    </div>
  );
};

export default Home;
