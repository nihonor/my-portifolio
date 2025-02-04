"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import react from "../../public/react.png";
import { motion } from "framer-motion";
import Tech from "@/components/Tech";
import Node from "../../public/nodejs.png";
import js from "../../public/js.jpg";
import express from "../../public/express.png";
import c from "../../public/c.png";
import next from "../../public/next.png"

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-48 md:mr-64">
      <Tech image={react} name="Reactjs" proficiency={83} />
      <Tech image={Node} name="Nodejs" proficiency={80} />
      <Tech image={js} name="Javascript" proficiency={92} />
      <Tech image={express} name="Expressjs" proficiency={73} />
      <Tech image={next} name="Nextjs" proficiency={73} />
      <Tech image={express} name="Expressjs" proficiency={90} />
      <Tech image={express} name="Expressjs" proficiency={90} />
      <Tech image={express} name="Expressjs" proficiency={90} />
      <Tech image={express} name="Expressjs" proficiency={90} />
    </div>
  );
};

export default TechStack;
