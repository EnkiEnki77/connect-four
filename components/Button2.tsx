import React from "react";

type Props = {
  children: string;
  onClick: () => void;
  width: "108px" | "130px";
};

const Button2 = ({ children, onClick, width }: Props) => {
  return (
    <button
      className={`${width} h-10 bg-darkPurple rounded-[20px] cursor-pointer xs text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button2;
