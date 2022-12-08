import Image from "next/image";
import React from "react";

import Rectangle2 from "../public/assets/Rectangle-2.png";

import PlayerTurn from "../components/PlayerTurn";
import Board from "../components/Board";

type Props = {};

const Game = (props: Props) => {
  return (
    <div className="bg-purple w-full h-screen relative">
      <Board />
      <PlayerTurn />
      <Image className="absolute bottom-0" src={Rectangle2} alt="" />
    </div>
  );
};

export default Game;
