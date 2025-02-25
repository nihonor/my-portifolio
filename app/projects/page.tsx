import Card from "@/components/Card";
import React from "react";

const ProjectPage = () => {
  const projectCards = [
    {
      title: "Dental Clinic",
      description: "A web app for managing a dental clinic.",
      img: "/medi.png", // Replace with the correct image path
      link: "https://example.com/dental-clinic",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "CSS"],
    },
    {
      title: "Hospital MS",
      description: "An paltform that helps in managing doctors,patients.",
      img: "/hospital.png", // Replace with the correct image path
      link: "https://example.com/e-commerce",
      technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Supamenu",
      description:
        "An paltform where you can make orders on a certain restaurant",
      img: "/image.png", // Replace with the correct image path
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
    <div className="md:mx-48 md:mr-64">
      <h1 className="text-4xl">⚡</h1>
      <h1 className="text-4xl font-bold text-subhead">
        What I&apos;ve been working on
      </h1>
      {projectCards.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          img={project.img}
          link={project.link}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectPage;
