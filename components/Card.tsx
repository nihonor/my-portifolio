import React from "react";
import BoxBtn from "./BoxBtn";
interface CardItems {
  title: string;
  description: string;
  img: string;
  link: string;
  technologies: string[];
}
const Card = ({ title, description, img, technologies }: CardItems) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-12 hover:bg-gray-100 rounded-lg">
      <img
        src={img}
        alt="image project"
        className="rounded-lg h-36 w-full md:w-52 object-cover"
      />

      <div className="flex-1">
        <h1 className="font-bold text-subhead text-xl">{title}</h1>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 py-2">
          {technologies.map((tech, index) => (
            <BoxBtn key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
