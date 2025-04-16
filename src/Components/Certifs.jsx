import React from 'react';
import { FaMedal } from 'react-icons/fa';

const Certifications = () => {
  const certificationData = [
    {
      title: "Java Foundations (1Z0-811)",
      institution: "Oracle",
      date: "2024",
      description: "Certification attestant les compétences fondamentales en Java, couvrant la syntaxe de base, les structures de contrôle, l'orienté objet, et les collections Java.",
      icon: "☕",
      image: "/certif/java.png"
    },
    {
      title: "Cloud Infrastructure 2024 AI Foundations Associate",
      institution: "Oracle",
      date: "2024",
      description: "Certification démontrant la maîtrise des concepts fondamentaux d'IA sur Oracle Cloud Infrastructure, incluant l'apprentissage automatique et les services d'IA.",
      icon: "🤖",
      image: "/certif/ai.png"
    },
    {
      title: "Cloud Infrastructure 2024 Foundations Associate",
      institution: "Oracle",
      date: "2024",
      description: "Validation des connaissances sur les services fondamentaux d'Oracle Cloud Infrastructure, incluant le calcul, le stockage, la mise en réseau et la sécurité.",
      icon: "☁️",
      image: "/certif/cloud.png"
    },
    {
      title: "Responsive Web Design",
      institution: "FreeCodeCamp",
      date: "2024",
      description: "Certification complète en conception web responsive, couvrant HTML5, CSS3, les principes de design adaptatif et l'accessibilité.",
      icon: "🌐",
      image: "/certif/camp.png"
    },
    {
      title: "Python",
      institution: "360Learning",
      date: "2024",
      description: "Formation approfondie sur Python, incluant les fondamentaux du langage, la programmation orientée objet, la manipulation de données et l'automatisation.",
      icon: "🐍",
      image: "/certif/py.png"
    }
  ];

  return (
    <div id="certifications" className="text-[#333333] py-16">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Certifications</h2>
        <p className="mb-12 text-[#1b2016] text-2xl">
          Mon parcours professionnel est enrichi par diverses certifications spécialisées qui reflètent mon engagement envers l'apprentissage continu. 
          Ces qualifications me permettent de rester à jour avec les meilleures pratiques et technologies émergentes, 
          garantissant ainsi la qualité et l'innovation dans chaque projet que j'entreprends.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-16">
        {certificationData.map((certification, index) => (
          <div
            key={index}
            className="bg-[#7e8f6b] p-6 rounded-lg text-center shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <FaMedal className="text-4xl mb-4 text-[#354a1f]" />
            <h3 className="text-lg sm:text-xl lg:text-2xl text-[#2f3b22] font-semibold mb-2">
              {certification.icon} {certification.title}
            </h3>
            <p className="font-medium text-[#354a1f] mb-2">
              {certification.institution} | {certification.date}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#232a1c]">
              {certification.description}
            </p>
            <div className="mt-4">
              <img
                src={certification.image || "/api/placeholder/250/150"}
                alt={`${certification.title} certification`}
                className="w-full max-h-52 object-contain rounded-md shadow-md mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
