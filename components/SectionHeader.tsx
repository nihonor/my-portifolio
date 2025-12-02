import React from "react";

interface SectionHeaderProps {
    emoji?: string;
    title: string;
    gradientFrom?: string;
    gradientTo?: string;
}

const SectionHeader = ({
    emoji,
    title,
    gradientFrom = "from-purple-600",
    gradientTo = "to-blue-600"
}: SectionHeaderProps) => {
    return (
        <div className="mb-12 animate-fade-in">
            {emoji && <h1 className="text-4xl mb-2">{emoji}</h1>}
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 
                      bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
                {title}
            </h1>
            <div className={`h-1 w-24 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}></div>
        </div>
    );
};

export default SectionHeader;
