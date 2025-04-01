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
  let underBarStyle= "";
  if (color === "bg_white"){
 buttonStyle = " bg-white text-[#E93A3A]  bordercolor-[#E93A3A]  "//ここにボタンのcssの差分を記述
  }else if (color === "bg_red"){
    buttonStyle = "bg-[#E93A3A] text-white " ;//ここにボタンのcssの差分を記述
  }

  return (
    <button>
     <div className = {`${buttonStyle} 
font-[Jaro] 
rounded-lg
 px-2 py-1
text-xl 
hover:opacity-60 `}  {...props}
>
      {children}
    </div>
 { color === 'bg_white' && (
    <div className="w-[80%] border-b-6 text-[#E93A3A] mx-auto mt-0.50"></div>
  )}

    </button>
  );
};
