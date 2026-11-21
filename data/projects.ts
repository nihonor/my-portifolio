export interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Forticore",
    description:
      "An automated cybersecurity tool designed to identify web application vulnerabilities. It provides comprehensive security testing, scanning, and reporting to help developers detect weaknesses early. Proudly won 3rd place in the 2025 national TVET RCA Hackathon.",
    img: "/fort.png",
    link: "https://forticore.innov.rw/",
    technologies: ["Cybersecurity", "React", "Node.js", "Python"],
    featured: true,
  },
  {
    title: "TM Travels - Travel Booking Engine",
    description:
      "A scalable RESTful travel booking engine for managing flight and hotel reservations end-to-end. Features JWT authentication, role-based access control (RBAC), and an admin panel with full CRUD over inventory and users. Includes a 10% commission-based pricing engine and QR-code digital tickets and receipts for booking verification.",
    img: "/travel.png",
    link: "https://tm-travels.com/",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT"],
    featured: true,
  },
  {
    title: "eTICORA",
    description:
      "A secure digital ticketing platform for events in Rwanda. Built on the Polygon blockchain, it provides verifiable, forgery-proof tickets with seamless mobile payments and WhatsApp delivery.",
    img: "/eti.png",
    link: "https://www.eticora.com/",
    technologies: ["Blockchain", "Web3"],
    featured: true,
  },
  {
    title: "SmartMotos Backend API",
    description:
      "A low-latency Python backend API powering a complete motorbike ride-hailing mobile solution, with real-time demand tracking and rider-driver coordination. Endpoints are secured with stateless JWT authentication, and Flutterwave payment processing automates fare settlements.",
    img: "/globe.svg",
    link: "https://github.com/nihonor",
    technologies: ["Python", "Flask", "FastAPI", "JWT", "Flutterwave API"],
  },
  {
    title: "HaloMobileApp - Parental Control Platform",
    description:
      "An AI-powered parental-control mobile platform combining intelligent real-time content filtering with customizable application time limits to protect children online.",
    img: "/globe.svg",
    link: "https://github.com/nihonor",
    technologies: ["AI", "Mobile App", "Content Filtering"],
  },
  {
    title: "Dental Clinic",
    description: "A web app for managing a dental clinic.",
    img: "/medi.png",
    link: "https://dental-clinic-hon.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "CSS"],
  },
  {
    title: "Hospital MS",
    description: "A platform that helps in managing doctors and patients.",
    img: "/hospital.png",
    link: "https://github.com/nihonor/hospital_front",
    technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
  },
  {
    title: "Supamenu",
    description: "A platform where you can make orders on a certain restaurant",
    img: "/image.png",
    link: "https://github.com/nihonor/supamenu-backend",
    technologies: ["React", "Express.js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Perfect Journal",
    description:
      "A comprehensive trading journal platform for forex traders to record, analyze, and improve their trading performance.",
    img: "/forex.png",
    link: "https://github.com/nihonor/my-journal-back",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
  },
];
