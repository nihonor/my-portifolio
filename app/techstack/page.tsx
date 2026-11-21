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
import python from "../../public/pytho.jpg";
import web3 from "../../public/globe.svg";
import solidity from "../../public/sol.png";
import SectionHeader from "@/components/SectionHeader";

const domains = [
  {
    name: "Security",
    items: ["Penetration Testing", "Web Security", "Network Security", "Vulnerability Assessment", "Digital Forensics", "OSINT"],
  },
  {
    name: "Security Tools",
    items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "John the Ripper", "Hydra", "Ghidra", "JADX"],
  },
  {
    name: "Systems",
    items: ["Linux/Kali Linux", "Windows"],
  },
  {
    name: "Programming",
    items: ["Python", "Java", "PHP", "JavaScript/TypeScript", "C/C++", "SQL", "Bash"],
  },
  {
    name: "Development",
    items: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "WordPress", "Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
  },
  {
    name: "DevOps & Infra",
    items: ["Docker", "Kubernetes", "CI/CD (GitHub Actions, GitLab CI)", "Nginx", "Gunicorn", "Prometheus", "Grafana", "Loki", "MariaDB", "Redis", "Database & Security Operations"],
  },
  {
    name: "Networking",
    items: ["TCP/IP", "DNS", "HTTP/HTTPS", "VPNs", "Routing", "Firewalls"],
  },
  {
    name: "Embedded Systems",
    items: ["Arduino", "ESP32", "Sensors", "Actuators", "Microcontrollers"],
  },
];

const TechStack = () => {
  return (
    <div className="md:mx-48 md:mr-64 animate-fade-in">
      <SectionHeader
        emoji="🧑‍💻"
        title="Tech I'm using"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Tech image={react} name="Reactjs" proficiency={90} />
        <Tech image={Node} name="Nodejs" proficiency={90} />
        <Tech image={js} name="Javascript" proficiency={92} />
        <Tech image={express} name="Expressjs" proficiency={90} />
        <Tech image={next} name="Nextjs" proficiency={90} />
        <Tech image={c} name="C++" proficiency={70} />
        <Tech image={mongo} name="MongoDB" proficiency={90} />
        <Tech image={java} name="Java" proficiency={90} />
        <Tech image={python} name="Python" proficiency={90} />
        <Tech image={web3} name="Web3" proficiency={90} />
        <Tech image={solidity} name="Solidity" proficiency={85} />
      </div>

      <SectionHeader
        emoji="🛡️"
        title="Domains & Competencies"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="p-6 rounded-2xl bg-white border border-gray-100"
          >
            <h2 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              {domain.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {domain.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-gray-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

