import React from 'react';
import { SquareArrowOutUpRight } from "lucide-react";

interface CertificateProps {
  imageSrc: string;
  altText: string;
  link: string;
  title: string;
}

const Certificate: React.FC<CertificateProps> = ({ imageSrc, altText, link, title }) => {
  return (
    <div className="hover:bg-gray-100 p-4">
      <img
        src={imageSrc}
        alt={altText}
        width={400}
        height={400}
      />

      <a
        href={link}
        className="text-xl font-semibold text-sky-500 underline flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
        <SquareArrowOutUpRight className="px-2 size-10" />
      </a>
    </div>
  );
};

export default Certificate;