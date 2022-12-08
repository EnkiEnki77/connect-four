import Image from "next/image";
import React from "react";
import icon from "../public/assets/icon-check.svg";

type Props = {};

const rules = (props: Props) => {
  return (
    <div className="px-5 md:px-[144px] flex flex-col items-center  pt-[97px] relative bg-purple min-h-screen">
      <div
        className="bg-white relative border-3 border-black shadow-[0px_10px_0px] rounded-[40px] px-5 md:px-[35px]
      flex flex-col gap-[30px] w-full max-w-[335px] md:max-w-[480px]"
      >
        <h1 className="lg uppercase text-center mt-[30px]">rules</h1>
        <div className="flex flex-col gap-4">
          <h2 className="m text-purple">OBJECTIVE</h2>
          <p className="body">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="m text-purple">HOW TO PLAY</h2>
          <ol className="flex flex-col gap-[10px] mb-[60px]">
            <li className="flex gap-4 pr-6 body">
              <span className="font-bold">1</span>Red goes first in the first
              game.
            </li>
            <li className="flex gap-4 pr-6 body">
              <span className="font-bold">2</span>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li className="flex gap-4 pr-6 body">
              <span className="font-bold">3</span>The game ends when there is a
              4-in-a-row or a stalemate.
            </li>
            <li className="flex gap-4 pr-6 body">
              <span className="font-bold">4</span>
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </div>
        <Image
          className="absolute bottom-[-40px] mx-auto left-0 right-0 cursor-pointer"
          src={icon}
          alt="icon"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
};

export default rules;
