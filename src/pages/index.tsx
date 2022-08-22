// import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import computa from '../../public/computa.jpg'
// import { trpc } from "../utils/trpc";



const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  // let [age, setAge] = useState('')

  // setInterval(() => {
	// 	let time = (new Date().getTime() - new Date(1206835200000).getTime()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
  //   age = time.toString().substring(0, 11);
	// }, 50);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fullflex">
        <Image className="image" src={computa} alt="computer image" width={300} height={300} />

        <h1 className="title">Patato</h1>
        <h1 className="age">I&apos;m 14 years old</h1>
      </div>
    </>
  );
};

export default Home;