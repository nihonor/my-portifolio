import Card from "@/components/Card";
import React from "react";
import SectionHeader from "@/components/SectionHeader";

const ProjectPage = () => {
  const projectCards = [
    {
      title: "Dental Clinic",
      description: "A web app for managing a dental clinic.",
      img: "/medi.png",
      link: "https://example.com/dental-clinic",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "CSS"],
    },
    {
      title: "Hospital MS",
      description: "A platform that helps in managing doctors and patients.",
      img: "/hospital.png",
      link: "https://example.com/e-commerce",
      technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Supamenu",
      description:
        "A platform where you can make orders at a certain restaurant",
      img: "/image.png",
      link: "https://example.com/e-commerce",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "TailwindCSS"
      ],
    },
  ];

  return (
    <div className="md:mx-48 md:mr-64 animate-fade-in">
      <SectionHeader
        emoji="⚡"
        title="What I've been working on"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <div className="space-y-6">
        {projectCards.map((project, index) => (
          <div
            key={index}
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

