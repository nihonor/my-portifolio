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
    <div className="flex flex-col lg:flex-row gap-8 mt-12 p-8 rounded-2xl 
                    bg-gradient-to-br from-white to-gray-50 
                    border border-gray-200 shadow-xl
                    transition-all duration-300">
      {/* Large Image Preview */}
      <div className="lg:w-1/2 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-teal-100 p-4">
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <img
            src={img}
            alt={`${title} project`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        {/* Featured Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold text-teal-600 tracking-wider uppercase">
            Featured Project
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>

        {/* Description */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm font-medium text-gray-700 px-3 py-1 rounded-md
                         bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-6 h-6" />
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
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
