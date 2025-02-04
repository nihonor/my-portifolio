import React from "react";

const ResumePage = () => {
  return (
    <div className="md:mx-48 md:mr-64">
      {/* Container for the Canva Embed */}
      <div className="relative w-full pt-[141.4286%] shadow-lg rounded-lg overflow-hidden my-6">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-1 border-red-500"
          src="https://www.canva.com/design/DAGcQUmV8dk/ELi4m20J9eecJheEruIsnQ/view?embed"
          allowFullScreen
          title="NIYITANGA Resume"
        ></iframe>
      </div>

      {/* Link to the Canva Design */}
      <div className="text-center mt-4">
        <a
          href="https://www.canva.com/design/DAGcQUmV8dk/ELi4m20J9eecJheEruIsnQ/view?utm_content=DAGcQUmV8dk&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          NIYITANGA
        </a>{" "}
        by nihonor niyitanga
      </div>
    </div>
  );
};

export default ResumePage;
