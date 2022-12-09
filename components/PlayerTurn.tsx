import Image from "next/image";
import React, { useEffect } from "react";
import RectangleRed from "../public/assets/RectangleRed.png";
import RectangleYellow from "../public/assets/Group-11.png";

type Props = {
  timer: number;
  turn: 1 | 2;
};

const PlayerTurn = ({ timer, turn }: Props) => {
  console.log(timer);
  const rectangle = turn === 1 ? RectangleRed : RectangleYellow;

  return (
    <div className="absolute bottom-[80px] left-0 right-0 mx-auto z-40 flex justify-center">
      <Image className="shadow-[0px_10px_0px  ]" src={rectangle} alt="" />
      <p
        className={`z-50 ${
          turn === 1 ? "text-white" : "text-black"
        } absolute xs uppercase top-[45px]`}
      >
        Player {turn}'s turn
      </p>
      <h2
        className={`font-grotesk ${
          turn === 1 ? "text-white" : "text-black"
        } lg  absolute top-[70px]`}
      >
        {timer}s
      </h2>
    </div>
  );
};

export default PlayerTurn;
