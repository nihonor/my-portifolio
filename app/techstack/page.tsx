"use client";
import React from "react";
import react from "../../public/react.png";
import Tech from "@/components/Tech";
import Node from "../../public/nodejs.png";
import js from "../../public/js.jpg";
import express from "../../public/express.png";
import next from "../../public/next.png";
import c from "../../public/c.png";
import mongo from "../../public/mongo.jpg";
import java from "../../public/jav.webp";

const TechStack = () => {
  return (
    <div className="md:mx-48 md:mr-64">
      <div className="py-3">
        <h1 className="text-4xl">🧑‍💻🧑🏻‍💻🧑🏾‍💻🧑🏾‍💻</h1>
        <h1 className="text-4xl font-bold text-subhead">Tech am using..</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Tech image={react} name="Reactjs" proficiency={83} />
        <Tech image={Node} name="Nodejs" proficiency={80} />
        <Tech image={js} name="Javascript" proficiency={92} />
        <Tech image={express} name="Expressjs" proficiency={73} />
        <Tech image={next} name="Nextjs" proficiency={73} />
        <Tech image={c} name="C++" proficiency={70} />
        <Tech image={mongo} name="MongoDB" proficiency={90} />
        <Tech image={java} name="Java" proficiency={60} />
        <Tech image={express} name="Expressjs" proficiency={90} />
      </div>
    </div>
  );
};

export default TechStack;
