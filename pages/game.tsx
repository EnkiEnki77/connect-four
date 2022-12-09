import Image from "next/image";
import React from "react";
import Board from "../components/Board";
import PlayerTurn from "../components/PlayerTurn";
import Rectangle2 from "../public/assets/Rectangle-2.png";

type Props = {};

const Game = (props: Props) => {
  return (
    <div className="bg-purple w-full h-screen relative">
      <Board />
      <PlayerTurn />
      <Image
        className="absolute bottom-0 w-full max-h-[230px] lg:max-h-[200px]"
        src={Rectangle2}
        alt=""
      />
    </div>
  );
};

export default Game;
