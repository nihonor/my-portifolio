"use client";

import PhotoGallery from "@/components/PhotoGallery";
import SectionHeader from "@/components/SectionHeader";

const page = () => {
  // Replace these with your actual event photos and details
  const eventPhotos = [
    {
      src: "/honor.png",
      alt: "Tech conference presentation", // Fixed typo
      eventName: "Tech Summit 2024",
      date: "March 15, 2024",
      location: "Kigali, Rwanda",
      description: "Presented on modern web security practices and ethical hacking techniques to an audience of 200+ developers." // Fixed unescaped entity
    },
    {
      src: "/pro.png",
      alt: "Cybersecurity workshop",
      eventName: "CyberSec Workshop",
      date: "January 20, 2024",
      location: "Innovation Hub, Kigali",
      description: "Led a hands-on workshop on penetration testing and vulnerability assessment for aspiring security professionals."
    },
    {
      src: "/hack.png",
      alt: "Hackathon participation",
      eventName: "RCA Hackathon 2025",
      date: "October 26, 2025",
      location: "NISR, Kigali",
      description: " Build a tool to detect vulnerabilities within web applications that won 3rd place."
    },
  ];

  return (
    <div className="md:mx-48 md:mr-64 animate-fade-in">
      <SectionHeader
        emoji="💬"
        title="About Me"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          I&apos;m <span className="font-semibold text-purple-600">Niyitanga Honore</span>, a cybersecurity enthusiast and full-stack
          developer with a passion for securing digital systems and building
          efficient web applications. My expertise lies in <span className="font-semibold text-blue-600">penetration testing</span>,
          <span className="font-semibold text-purple-600"> ethical hacking</span>, and <span className="font-semibold text-cyan-600">malware analysis</span>, where I analyze system
          vulnerabilities, investigate attack vectors, and develop
          countermeasures to enhance security. I have hands-on experience with
          tools like Metasploit, Sysmon, and Windows event log analysis, and I&apos;m
          always exploring new ways to strengthen digital defenses.
        </p>

        <p className="text-lg">
          As a developer, I specialize in <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-green-600">Node.js</span>, and <span className="font-semibold text-purple-600">Next.js</span>, creating
          modern and scalable applications. I enjoy working on backend
          optimizations, database management, and security-focused web
          development, ensuring that applications are both performant and
          resistant to threats. I also have a strong background in Python, which
          I use for automation, scripting, and security research. Additionally,
          I have experience setting up secure network environments in VirtualBox
          and troubleshooting networking challenges, making me adept at both
          offensive and defensive security strategies.
        </p>

        <p className="text-lg">
          Beyond my technical skills, I&apos;m passionate about <span className="font-semibold text-orange-600">teaching and sharing
            knowledge</span>. I&apos;ve designed a one-hour Python for cybersecurity crash
          course, covering essential programming concepts with a
          security-focused approach. I love breaking down complex topics into
          digestible lessons, helping others understand the importance of secure
          coding and system hardening.
        </p>

        <p className="text-lg">
          I thrive on solving challenges, whether it&apos;s exploiting a vulnerable
          machine, analyzing malware behavior, or optimizing a web application&apos;s
          security architecture. My goal is to <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">bridge the gap between
            development and cybersecurity</span>, ensuring that every system I work on is
          both functional and resilient.
        </p>
      </div>

      {/* Event Photo Gallery Section */}
      <PhotoGallery
        photos={eventPhotos}
        title="📸 My Journey"
        subtitle="Events, conferences, and workshops I&apos;ve attended and contributed to"
      />
    </div>
  );
};

export default page;
