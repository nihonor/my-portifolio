import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface TechCard {
  name: string;
  image: StaticImageData;
  proficiency: number;
}

const Tech = ({ name, image, proficiency }: TechCard) => {
  return (
    <div>
      <motion.div
        className="group relative p-6 rounded-2xl bg-white border border-gray-100
                   hover:opacity-80
                   transition-opacity duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10">
            <Image
              src={image}
              alt={`${name} icon`}
              width={50}
              height={50}
              className="rounded-lg object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold text-gray-800">
            {name}
          </h1>
        </div>

        {/* Gradient Progress Bar */}
        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full
                       transition-all duration-1000 ease-out"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>

        <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          {proficiency}% Proficiency
        </span>
      </motion.div>
    </div>
  );
};

export default Tech;

