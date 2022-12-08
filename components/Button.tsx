import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  route?: string;
  children: string | React.ReactElement;
};

const Button = ({ className, children, route }: Props) => {
  return (
    <button
      className={`${className} relative cursor-pointer hover:border-darkPurple hover:shadow-darkPurple  px-5  
      leading-[31px] m uppercase h-[72px] w-full rounded-[20px] border-3 border-black shadow-[0px_10px_0px_#000000]
      max-w-[335px] md:max-w-none `}
    >
      {route && <Link className="absolute w-full h-full" href={route} />}
      {children}
    </button>
  );
};

export default Button;
