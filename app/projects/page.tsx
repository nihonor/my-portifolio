import Card from "@/components/Card";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  return (
    <div className="md:mx-48 md:mr-64 animate-fade-in">
      <SectionHeader
        emoji="⚡"
        title="What I've been working on"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
