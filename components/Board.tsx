import Image from "next/image";
import React from "react";
import BoardImg from "../public/assets/Board.svg";
import BoardBack from "../public/assets/BoardBack.svg";

type Props = {};

const Board = (props: Props) => {
  return (
    <>
      <Image
        className="absolute bottom-[230px] left-0 right-0 mx-auto z-30"
        src={BoardImg.src}
        alt=""
        width={335}
        height={310}
      />
      <Image
        className="absolute bottom-[220px] left-0 right-0 mx-auto z-20"
        src={BoardBack.src}
        alt=""
        width={335}
        height={310}
      />
    </>
  );
};

export default Board;
