import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Board from "../components/Board";
import Button2 from "../components/Button2";
import PlayerTurn from "../components/PlayerTurn";
import Rectangle2 from "../public/assets/Rectangle-2.png";
import Logo from "../public/assets/logo.svg";
import PlayerScore from "../components/PlayerScore";

type Props = {};

export function timerGame(callback: () => void) {
  console.log("Ready....go!");
  setTimeout(() => {
    callback();
  }, 10000);
}

const Game = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(15);

  const openMenu = () => {};

  const restart = () => {};

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div className="bg-purple w-full h-screen relative">
      <div className="flex px-5 justify-between pt-[50px]">
        <Button2 width="w-[108px]" onClick={openMenu}>
          menu
        </Button2>
        <Image src={Logo} width={40} height={40} alt="logo" />
        <Button2 width="w-[108px]" onClick={restart}>
          restart
        </Button2>
      </div>
      <div className="flex justify-center gap-5 mt-[50px]">
        <PlayerScore player="player 1" />
        <PlayerScore player="player 2" />
      </div>
      <Board />
      <PlayerTurn timer={timeLeft} />
      <Image
        className="absolute bottom-0 w-full max-h-[230px] lg:max-h-[200px]"
        src={Rectangle2}
        alt=""
      />
    </div>
  );
};

export default Game;
