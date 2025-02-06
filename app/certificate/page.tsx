import React from "react";
import coursera from "../../public/cour.png";
import Certificate from "@/components/Certificate";
import netresearch from "../../public/netr.png";
import intro from "../../public/intro.png";
import linux from "../../public/linux.png";
import python from "../../public/python.png";

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
          imageSrc={netresearch.src}
          altText="Thinkcyber certifcate"
          link="https://drive.google.com/file/d/1FOhrUk7xJu08JAYxXUwM12f4-UaDlrUI/view?usp=drive_link"
          title="Network research"
        />
        <Certificate
          imageSrc={intro.src}
          altText="Intor to cyber"
          link="https://drive.google.com/file/d/1xBvZ3RoRffTMy5guj6uHsH57f_CHkSdK/view?usp=drive_link"
          title="Intro to cyber"
        />
         <Certificate
          imageSrc={linux.src}
          altText="Linux Certificate"
          link="https://drive.google.com/file/d/194nO9GBd1m9RvXzx44U5332iyIMMPHUB/view?usp=drive_link"
          title="Linux Fundamentals"
        />
         <Certificate
          imageSrc={python.src}
          altText="Python certificate"
          link="https://drive.google.com/file/d/148_noP-pcXrpPd0hUvAaywj_CWNbSKga/view?usp=drive_link"
          title="Python fundamentals"
        />
      </div>
    </div>
  );
};

export default CertficatePage;
