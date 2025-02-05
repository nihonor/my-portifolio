import React from "react";
import coursera from "../../public/cour.png";
import Certificate from "@/components/Certificate";

const CertficatePage = () => {
  return (
    <div className="md:mx-48 md:mr-64">
      <h1 className="text-4xl">⚡</h1>
      <h1 className="text-4xl font-bold text-subhead pb-6">
        What I have been learning recently
      </h1>
      <div className="md:grid grid-cols-2 ">
     
        <Certificate
          imageSrc={coursera.src}
          altText="Coursera certificate"
          link="https://coursera.org/share/7c680816af7ccc17b930207090faf30b"
          title="Wordpress"
        />
          <Certificate
          imageSrc={coursera.src}
          altText="Coursera certifcate"
          link="https://coursera.org/share/7c680816af7ccc17b930207090faf30b"
          title="Wordpress"
        />
          <Certificate
          imageSrc={coursera.src}
          altText="Coursera certifcate"
          link="https://coursera.org/share/7c680816af7ccc17b930207090faf30b"
          title="Wordpress"
        />  
        
      </div>
    </div>
  );
};

export default CertficatePage;
