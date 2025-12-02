import Card from "@/components/Card";

export default function Home() {
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
        "A platform where you can make orders on a certain restaurant",
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
    <>
      <div className="md:mx-48 md:mr-64 animate-fade-in">
        {/* Hero Section with Gradient Text */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                         gradient-text-vibrant leading-tight">
            I am NIYITANGA HONORE
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                          rounded-full mb-6"></div>
          <p className="md:pr-40 text-lg text-content leading-relaxed">
            I&apos;m Niyitanga Honore, a curious and driven individual passionate about
            technology, cybersecurity, and software development. I thrive on
            solving challenges, from penetration testing and malware analysis to
            building full-stack web applications with React, Node.js, and Next.js.
          </p>
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-subhead">
              What I&apos;ve been working on
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

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
      </div>
    </>
  );
}

