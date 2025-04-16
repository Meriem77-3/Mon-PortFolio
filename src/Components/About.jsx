import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const commonOptions = { triggerOnce: true, threshold: 0.1 };
  
  const { ref: titleRef, inView: titleInView } = useInView(commonOptions);
  const { ref: contentRef, inView: contentInView } = useInView(commonOptions);
  const { ref: cardsRef, inView: cardsInView } = useInView(commonOptions);

  const statCards = [
    {
      value: "8+",
      label: "Projets",
      delay: 0.3
    }, 
    {
      value: "3+",
      label: "Certifications",
      delay: 0.4
    }, 
    {
      value: "15+",
      label: "Technologies maîtrisées",
      delay: 0.5
    }
  ];

  return (
    <div id='apropos' className="py-24" style={{backgroundColor: '#a3ad8f', color: '#333333'}}>
      <div className="container mx-auto px-4">
        {/* Section titre */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            À propos de moi
            <span className="absolute bottom-0 left-0 w-full h-1 mt-2" style={{backgroundColor: '#556048'}}></span>
          </h2>
        </motion.div>

        {/* Section contenu */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white bg-opacity-10 rounded-xl p-6 md:p-8 lg:p-10 shadow-lg">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base md:text-lg leading-relaxed" 
                style={{color: '#1b2016'}}
              >
                Je m'appelle Meriem Assouli, développeuse passionnée par l'univers du web et des technologies. Alors que j'étais encore étudiant en génie informatique, je me suis très vite tournée vers le développement d'applications web et mobiles, attirée par le potentiel infini de ce domaine en constante évolution.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base md:text-lg leading-relaxed" 
                style={{color: '#1b2016'}}
              >
                Curieuse, persévérante et toujours prête à relever de nouveaux défis, je consacre une grande partie de mon temps à créer des projets personnels. C'est ma manière d'apprendre, d'expérimenter et d'innover.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base md:text-lg leading-relaxed" 
                style={{color: '#1b2016'}}
              >
                J'ai un intérêt particulier pour le front-end, le design intuitif, et l'amélioration continue de l'expérience utilisateur. Mais je m'épanouis aussi dans la résolution de problèmes complexes et la recherche de solutions efficaces côté back-end.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-base md:text-lg leading-relaxed" 
                style={{color: '#1b2016'}}
              >
                Ce portfolio est le reflet de mon parcours, de mes compétences, mais surtout de ma motivation constante à apprendre et à m'améliorer. Mon objectif ? Travailler sur des projets qui ont du sens, en collaborant avec des personnes aussi passionnées que moi.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-base md:text-lg leading-relaxed" 
                style={{color: '#1b2016'}}
              >
                En dehors du code, j'aime lire, apprendre de nouvelles langues et relever des défis créatifs.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Section des cartes statistiques */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: card.delay }}
                className="rounded-xl p-8 shadow-lg text-center flex flex-col justify-center items-center h-full transform hover:-translate-y-2 transition-transform duration-300"
                style={{ backgroundColor: '#556048' }}
              >
                <h3 className="text-4xl font-bold mb-3 text-white">{card.value}</h3>
                <p className="text-lg text-white">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;