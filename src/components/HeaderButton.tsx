import  './src/styles/global.css';
import React from "react";
import type {FC} from "react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "bg_white" | "bg_red" ; 
   children: React.ReactNode;
   className?: string
}

export const HeaderButton: FC<ButtonProps> = ({
  color = "bg_white",
  children,
  ...props
}) => {
  let buttonStyle ="bg_white";
  if (color === "bg_white"){
 buttonStyle = " bg-white  px-2 py-2 text-[#E93A3A] text-xl  bordercolor-[#E93A3A]  border-b "//ここにボタンのcssの差分を記述
  }else if (color === "bg_red"){
    buttonStyle = "bg-red text-blue-200";//ここにボタンのcssの差分を記述
  }
  return (
    <button
    className={`${buttonStyle} font-[Jaro] semi-rounded hover:opacity-60 `}//共通スタイルはこの中で良い
      {...props}
    >
     
      {children}
    </button>
  );
};
