import Card from "@/components/Card";
import vercel from "../public/Vercel Logo.jpg";
import tailwind from "../public/Tailwind CSS Wordmark Logo PNG Vector (SVG) Free Download.jpg";
export default function Home() {
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
        "TailwindCSS",
        "Node.js",
      ],
    },
  ];
  return (
    <>
      <div className="flx justify-center md:mx-48 md:mr-64">
        <h1 className=" text-3xl font-bold text-subhead">
          I am NIYITANGA HONORE
        </h1>
        <p className="md:pr-40 py-6 text-content mb-6">
          I’m Niyitanga Honore, a curious and driven individual passionate about
          technology, cybersecurity, and software development. I thrive on
          solving challenges, from penetration testing and malware analysis to
          building full-stack web applications with React, Node.js, and Next.js{" "}
        </p>
        <div>
          <h1 className="pt-4 font-bold text-subhead">
            What I've been working on
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

        <div className="pt-24 text-subhead font-bold ">
          <h1>Tech stack</h1>
          <div className="flex gap-2">
            <img src={vercel.src} className="w-32 h-20 object-cover" alt="" />
            <img src={tailwind.src} className="w-32 h-20 object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
