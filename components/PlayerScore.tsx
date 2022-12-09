import Image from "next/image";
import React, { useState } from "react";
import Player1 from "../public/assets/player-one.svg";
import Player2 from "../public/assets/player-two.svg";

type Props = {
  player: "player 1" | "player 2";
};

const PlayerScore = ({ player }: Props) => {
  const [score, setScore] = useState(0);
  return (
    <div
      className="h-20 w-full max-w-[142px] rounded-[20px] border-3 shadow-[0px_10px_0px] bg-white relative flex 
    flex-col justify-center items-center"
    >
      {player === "player 1" ? (
        <Image
          className="absolute left-[-35px]"
          src={Player1}
          alt="player one"
          width={54}
          height={59}
        />
      ) : (
        <Image
          className="absolute right-[-35px]"
          src={Player2}
          alt="player two"
          width={54}
          height={59}
        />
      )}
      <h2 className="uppercase xs">{player}</h2>
      <p className="text-[32px] font-bold leading-10">{score}</p>
    </div>
  );
};

export default PlayerScore;
