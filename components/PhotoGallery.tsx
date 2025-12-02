"use client";

import React from "react";
import PhotoCard from "./PhotoCard";

interface EventPhoto {
    src: string;
    alt: string;
    eventName?: string;
    date?: string;
    location?: string;
    description?: string;
}

interface PhotoGalleryProps {
    photos: EventPhoto[];
    title?: string;
    subtitle?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title, subtitle }) => {
    return (
        <div className="my-12">
            {title && (
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent 
                                 bg-gradient-to-r from-purple-600 to-blue-600">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-600 text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                    <PhotoCard
                        key={index}
                        imageSrc={photo.src}
                        alt={photo.alt}
                        eventName={photo.eventName}
                        date={photo.date}
                        location={photo.location}
                        description={photo.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
