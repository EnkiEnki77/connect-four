import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import logo from "../public/assets/logo.svg";
import playVsPlayer from "../public/assets/player-vs-player.svg";

const Home: NextPage = () => {
  const cunt = "3";
  return (
    <div className="min-h-screen bg-purple px-5 flex flex-col justify-center items-center gap-[30px] pb-[100px]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Image
        className="mb-[50px]"
        src={logo.src}
        alt="logo"
        width={52}
        height={52}
      />
      <Button
        route="/game"
        className="bg-yellow flex items-center justify-between text-left"
      >
        <>
          play vs player
          <Image
            src={playVsPlayer}
            alt="play vs player"
            width={82}
            height={46}
          />
        </>
      </Button>
      <Button route="/rules" className="bg-white text-left">
        game rules
      </Button>
    </div>
  );
};

export default Home;
