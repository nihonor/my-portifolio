import React from "react";
import SectionHeader from "@/components/SectionHeader";

const experience = [
  {
    role: "Web Vulnerability Scanner Developer",
    project: "Forticore Project",
    tags: "",
    bullets: [
      "Engineered an automated web vulnerability scanner capable of detecting critical security flaws—including SQL Injection (SQLi), Cross-Site Scripting (XSS), and insecure headers—across target web applications.",
      "Implemented automated crawling, endpoint discovery, and payload analysis workflows to streamline vulnerability assessment and actionable remediation reporting for developers.",
      "Awarded 3rd place nationally in the 2024 TVET software-based project RCA Hackathon for technical innovation and practical cybersecurity impact.",
    ],
  },
  {
    role: "Full Stack Developer",
    project: "ETP: Event Ticketing Platform",
    tags: "",
    bullets: [
      "Architected a high-performance event management and ticketing platform following the T3-stack philosophy with Next.js 15+, PostgreSQL, Prisma ORM, Tailwind CSS 4.0, and shadcn/ui.",
      "Designed type-safe relational schemas and transactional booking workflows to enable dynamic event discovery, custom ticket tier management, and reliable concurrent reservations.",
      "Hardened platform security by implementing multi-role RBAC via NextAuth.js, time-bound OTP email verification through Brevo, and tamper-resistant ticket verification for organizers.",
    ],
  },
  {
    role: "Full Stack Developer",
    project: "TMTravels—Travel Management System",
    tags: "",
    bullets: [
      "Developed a scalable RESTful travel booking engine using Node.js, Express.js, MongoDB, Mongoose, and Tailwind CSS/HTML to manage flight and hotel reservations end-to-end.",
      "Engineered JWT-based authentication, granular role-based access control (RBAC), and a comprehensive administrative panel supporting full CRUD operations across inventory and user records.",
      "Automated a 10% commission-based pricing calculation engine alongside cryptographic QR-code digital ticket and receipt generation for seamless booking verification.",
    ],
  },
  {
    role: "Backend Developer",
    project: "SmartMotos Backend API",
    tags: "Python / Flask / FastAPI",
    bullets: [
      "Architected a low-latency Python (Flask/FastAPI) backend API powering a complete motorbike ride-hailing mobile solution with real-time demand tracking and rider-driver coordination.",
      "Secured API endpoints with stateless JWT authentication and integrated Flutterwave payment processing for reliable, automated fare settlements.",
    ],
  },
  {
    role: "Mobile & AI Systems Developer",
    project: "HaloMobileApp—Parental Control Platform",
    tags: "AI & Mobile Security",
    bullets: [
      "Engineered an AI-powered parental-control mobile platform combining intelligent real-time content filtering and customizable application time limits to protect children online.",
    ],
  },
];

const accomplishments = [
  {
    title: "1st Place in Africa — picoCTF 2026:",
    text: "Competed as part of a team, achieving 1st place in Africa through challenges in cybersecurity, cryptography, reverse engineering, web exploitation, and forensics.",
  },
  {
    title: "Certificate of Achievement — KOICA & Rwanda TVET Board (October 15, 2025):",
    text: "Awarded 3rd place in the 3rd edition of the RCA Hackathon for the design, development, and presentation of the “Forticore” project, demonstrating excellence in a tangible software project. Signed by representatives from KOICA, Rwanda TVET Board, and Rwanda Coding Academy.",
  },
];

const skills = [
  { domain: "Security", items: "Penetration Testing, Web Security, Network Security, Vulnerability Assessment, Digital Forensics, OSINT" },
  { domain: "Security Tools", items: "Burp Suite, Nmap, Wireshark, Metasploit, John the Ripper, Hydra, Ghidra, JADX" },
  { domain: "Programming", items: "Python, Java, PHP, JavaScript/TypeScript, C/C++, SQL, Bash" },
  { domain: "Development", items: "React, Node.js, Express, MongoDB, REST APIs, WordPress, Next.js, PostgreSQL, Prisma ORM, Tailwind CSS" },
  { domain: "DevOps & Infra", items: "Docker, Kubernetes, CI/CD (GitHub Actions, GitLab CI), Nginx, Gunicorn, Prometheus, Grafana, Loki, MariaDB, Redis, Database & Security Operations" },
  { domain: "Networking", items: "TCP/IP, DNS, HTTP/HTTPS, VPNs, Routing, Firewalls" },
  { domain: "Systems", items: "Linux/Kali Linux, Windows" },
  { domain: "Embedded Systems", items: "Arduino, ESP32, Sensors, Actuators, Microcontrollers" },
];

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white pb-1 mb-4 border-b border-gray-300 dark:border-gray-600">
    {children}
  </h2>
);

const ResumePage = () => {
  return (
    <div className="md:mx-48 md:mr-64 p-6">
      <SectionHeader title="Resume / CV" />

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-6 text-gray-800 dark:text-gray-200">
        {/* Header */}
        <header className="border-b-4 border-gray-900 dark:border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            NIYITANGA Honore
          </h1>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
            Software Developer and Cybersecurity Expert
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex flex-wrap gap-x-4">
            <span>+250793274392</span>
            <span>niyitanganihonor@gmail.com</span>
            <span>Kigali, Rwanda</span>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <Heading>Summary</Heading>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Passionate Software Developer and Cybersecurity Expert with a strong
            foundation in building scalable web applications, embedded systems,
            and secure infrastructure. Experienced in penetration testing,
            vulnerability assessment, full-stack development, and DevOps
            practices, with a proven track record of delivering innovative
            software solutions and competing in top-tier cybersecurity
            challenges.
          </p>
        </section>

        {/* Experience & Projects */}
        <section className="mb-8">
          <Heading>Experience &amp; Projects</Heading>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.project}>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {job.role}
                </h3>
                <div className="flex justify-between flex-wrap gap-x-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span>{job.project}</span>
                  {job.tags && <span>{job.tags}</span>}
                </div>
                <ul className="list-disc ml-6 mt-1 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Accomplishments */}
        <section className="mb-8">
          <Heading>Accomplishments</Heading>
          <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {accomplishments.map((a) => (
              <li key={a.title}>
                <span className="font-bold text-gray-900 dark:text-white">
                  {a.title}
                </span>{" "}
                {a.text}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-8">
          <Heading>Education</Heading>
          <div className="flex justify-between flex-wrap gap-x-4">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Software Development, Cybersecurity and Embedded Systems
            </h3>
            <span className="text-sm font-semibold">2023 – 2026 | Nyabihu</span>
          </div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Rwanda Coding Academy
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <Heading>Skills</Heading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 dark:border-gray-600 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-700 text-left uppercase text-xs">
                <tr>
                  <th className="p-3 border border-gray-200 dark:border-gray-600 w-1/4">
                    Domain
                  </th>
                  <th className="p-3 border border-gray-200 dark:border-gray-600">
                    Technologies &amp; Competencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((s) => (
                  <tr key={s.domain}>
                    <td className="p-3 font-bold border border-gray-200 dark:border-gray-600 align-top">
                      {s.domain}
                    </td>
                    <td className="p-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      {s.items}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* References */}
        <section>
          <Heading>References</Heading>
          <div className="border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-700 p-4 text-sm">
            <p className="font-bold text-gray-900 dark:text-white">
              Prof. Nzeyimana Celestin
            </p>
            <p>Instructor of Cybersecurity and Networking at Rwanda Coding Academy</p>
            <p>Phone: 0783137121 | Email: ingabo1234@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
