import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import computa from '../../public/computa.jpg'
import Cards from '../components/Cards'


const Home: NextPage = () => {
  // eslint-disable-next-line prefer-const
  let [age, setAge] = useState('')

  setInterval(() => {
		const time = (new Date().getTime() - new Date(1206835200000).getTime()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    setAge(age = time.toString().substring(0, 11))
	}, 100);
  return (
    <>
      <Head>
        <title>patato</title>
        <meta name="description" content="Patato's personal portfolio website made with NextJS & TailwindCSS" />
        <link rel="icon" href="/potatocolor.png" />
      </Head>

      <div className="fullflex">
        <Image className="image" src={computa} alt="computer image" width={300} height={300} />
        <h1 className="title mt-2">Patato</h1>
        <h1 className="mb-4 poppins text-orange-900 text-3xl select-none">I&apos;m {age} years old</h1>
        
        < Cards />
      </div>

      <div>
        <a className="absolute top-0 left-0 p-2" href="https://webring.wonderful.software#patato.live" title="วงแหวนเว็บ">
          <Image
            src="/webring.svg"
            alt="วงแหวนเว็บ"
            width={64}
            height={64}
          />
        </a>
      </div>
    </>
  );
};

export default Home;
