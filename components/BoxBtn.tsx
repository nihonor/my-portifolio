import React from "react";
interface Props{
  text:string;
}
const Box = ({text}:Props) => {
  return (
    <div className="mt-14">
      <span className="text-gray-500 bg-gray-100 p-2 text-[13px] rounded-[2px]  ">{text}</span>
    </div>
  );
};

export default Box;
