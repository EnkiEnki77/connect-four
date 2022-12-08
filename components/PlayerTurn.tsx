import Image from "next/image";
import React from "react";
import Rectangle from "../public/assets/Rectangle.png";

type Props = {};

const PlayerTurn = (props: Props) => {
  return (
    <div className="absolute bottom-[80px] left-0 right-0 mx-auto z-40 flex justify-center">
      <Image className="shadow-[0px_10px_0px  ]" src={Rectangle} alt="" />
      <p className="z-50 text-black absolute xs uppercase top-[45px]">
        Player 1's turn
      </p>
      <h2 className="font-grotesk lg text-black absolute top-[70px]">15s</h2>
    </div>
  );
};

export default PlayerTurn;
