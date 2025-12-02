import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface CertificateProps {
  imageSrc: string;
  altText: string;
  link: string;
  title: string;
}

const Certificate: React.FC<CertificateProps> = ({
  imageSrc,
  altText,
  link,
  title,
}) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-gray-100
                    hover:opacity-80
                    transition-opacity duration-300">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <Image
          src={imageSrc}
          alt={altText}
          width={450}
          height={400}
        />
      </div>

      <a
        href={link}
        className="text-xl font-semibold flex items-center gap-2
                   bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
        <SquareArrowOutUpRight className="w-5 h-5 text-purple-600" />
      </a>
    </div>
  );
};

export default Certificate;

