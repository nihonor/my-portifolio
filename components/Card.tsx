import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface CardItems {
  title: string;
  description: string;
  img: string;
  link: string;
  technologies: string[];
  githubLink?: string;
}

const Card = ({ title, description, img, technologies, link, githubLink }: CardItems) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-8 p-6 rounded-xl 
                    bg-gradient-to-br from-white to-gray-50 
                    border border-gray-200 shadow-lg
                    transition-all duration-300">
      {/* Large Image Preview */}
      <div className="lg:w-2/5 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 p-3">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src={img}
            alt={`${title} project`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="lg:w-3/5 flex flex-col justify-between">
        {/* Featured Label */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-teal-600 tracking-wider uppercase">
            Featured Project
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h2>

        {/* Description */}
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-700 px-2.5 py-1 rounded-md
                         bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
