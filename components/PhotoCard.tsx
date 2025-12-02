"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface PhotoCardProps {
    imageSrc: string;
    alt: string;
    eventName?: string;
    date?: string;
    location?: string;
    description?: string;
    width?: number;
    height?: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
    imageSrc,
    alt,
    eventName,
    date,
    location,
    description,
    width = 400,
    height = 300,
}) => {
    return (
        <motion.div
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100
                 shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
                <Image
                    src={imageSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        {description && (
                            <p className="text-sm leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Event Details */}
            <div className="p-5 space-y-3">
                {eventName && (
                    <h3 className="text-lg font-bold text-gray-800 bg-clip-text text-transparent 
                                 bg-gradient-to-r from-purple-600 to-blue-600">
                        {eventName}
                    </h3>
                )}

                <div className="space-y-2">
                    {date && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>{date}</span>
                        </div>
                    )}

                    {location && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default PhotoCard;
