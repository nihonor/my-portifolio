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
    <div className="flex flex-col md:flex-row gap-6 mt-12 p-6 rounded-2xl 
                    bg-white border border-gray-100 shadow-md">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={img}
          alt={`${title} project`}
          className="rounded-xl h-36 w-full md:w-52 object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-subhead text-2xl mb-2">
            {title}
          </h1>
          <p className="text-content text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <BoxBtn key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
