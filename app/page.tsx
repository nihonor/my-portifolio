import Link from "next/link";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import Card from "@/components/Card";
import { projects } from "@/data/projects";

const highlights = [
  {
    emoji: "🌍",
    title: "1st in Africa",
    detail: "primeCTF-Africa 2026 leaderboard (TVET High School)",
  },
  {
    emoji: "🏆",
    title: "Winner",
    detail: "Tekana Online Cyber Challenge, Nov 2026",
  },
  {
    emoji: "🥉",
    title: "3rd place",
    detail: "RCA Hackathon, Oct 2025 (Forticore)",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="md:mx-48 md:mr-64 animate-fade-in">
      {/* Hero */}
      <div className="mb-12">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4
                     gradient-text-vibrant leading-tight"
        >
          I am NIYITANGA HONORE
        </h1>
        <div
          className="h-1 w-24 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500
                     rounded-full mb-6"
        ></div>
        <p className="text-xl font-semibold text-subhead mb-3">
          Software Developer &amp; Cybersecurity Expert
        </p>
        <p className="md:pr-40 text-lg text-content leading-relaxed">
          I&apos;m a curious and driven developer based in Kigali, Rwanda,
          passionate about building secure, scalable software. I thrive on
          solving challenges, from penetration testing and vulnerability
          assessment to building full-stack applications with React, Node.js and
          Next.js.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white
                       bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
          >
            View projects <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/Niyitanga-Honore-CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium
                       border border-gray-300 hover:bg-gray-100 text-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
          <a
            href="mailto:niyitanganihonor@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium
                       border border-gray-300 hover:bg-gray-100 text-gray-800 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact me
          </a>
          <a
            href="https://github.com/nihonor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium
                       border border-gray-300 hover:bg-gray-100 text-gray-800 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
          >
            <div className="text-2xl mb-1">{h.emoji}</div>
            <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              {h.title}
            </p>
            <p className="text-sm text-gray-600">{h.detail}</p>
          </div>
        ))}
      </div>

      {/* Featured projects */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-subhead">
            What I&apos;ve been working on
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
        </div>

        <div className="space-y-6">
          {featured.map((project, index) => (
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

        <div className="mt-8 mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-medium text-purple-600 hover:underline"
          >
            See all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
