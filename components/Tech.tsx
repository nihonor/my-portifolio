import React from 'react'
import Image, { StaticImageData } from 'next/image'
import react from "../public/react.png";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface TechCard{
    name: string;
    image: StaticImageData;
    proficiency: number;
  
}
const Tech = ({name,image,proficiency}:TechCard) => {
  return (
    <div>  <motion.div
    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <Image
        src={image}
        alt="react icon"
        width={50}
        height={50}
        className="rounded-lg"
      />
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
    </div>
    <Progress value={proficiency} className="h-2 " />
    <span className="text-sm text-gray-600 mt-2 block">
     {proficiency}% Proficiency
    </span>
  </motion.div></div>
  )
}

export default Tech