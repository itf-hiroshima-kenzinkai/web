import  './src/styles/global.css';
import React from "react";
import type {FC} from "react";
import type { ButtonHTMLAttributes } from "react";

export const HeaderButton: FC<ButtonProps> = ({

  children,
  ...props
}) => {
 
  return (
    <button className ="font-[Jaro]  text-xl bg-white text-[#E93A3A] hover:text-white relative 
                 hover:bg-[#E93A3A] hover:text-white rounded-xl px-2 py-1
                 after:content-[''] after:absolute after:left-1/2 after:bottom-0
                 after:w-[75%] after:h-[6px] after:bg-[#E93A3A] after:translate-x-[-50%]" >
     <div className="px-2 py-1" {...props}>
      {children}
    </div>
       </button>
  ); 
};
