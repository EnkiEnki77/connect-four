import Image from "next/image";
import React from "react";
import BoardImg from "../public/assets/Board.svg";
import BoardBack from "../public/assets/BoardBack.svg";

type Props = {};

const Board = (props: Props) => {
  return (
    <>
      <Image
        className="absolute bottom-[230px] md:bottom-[200px] lg:bottom-[160px] left-0 right-0 mx-auto z-30 md:w-full md:h-full md:max-w-[632px] md:max-h-[584px]"
        src={BoardImg.src}
        alt=""
        width={335}
        height={310}
      />

      <Image
        className="absolute bottom-[220px] md:bottom-[190px] lg:bottom-[150px] left-0 right-0 mx-auto md:w-full md:h-full z-20 md:max-w-[632px] md:max-h-[584px]"
        src={BoardBack.src}
        alt=""
        width={335}
        height={310}
      />
    </>
  );
};

export default Board;
