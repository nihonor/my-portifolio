import React from "react";

interface BoxBtnProps {
  text: string;
}

const BoxBtn = ({ text }: BoxBtnProps) => {
  return (
    <span className="px-4 py-1.5 text-sm font-medium rounded-full
                     bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
                     border border-purple-200/50
                     text-purple-700
                     hover:from-purple-500/20 hover:via-blue-500/20 hover:to-cyan-500/20
                     hover:border-purple-300
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
                     transition-all duration-300 ease-out
                     cursor-default">
      {text}
    </span>
  );
};

export default BoxBtn;
