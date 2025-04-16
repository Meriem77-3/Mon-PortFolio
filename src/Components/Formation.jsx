import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Formations = () => {
  const formationsData = [
    {
      title: "2ème année cycle d'ingénieure génie informatique",
      period: "2023 - 2026",
      location: "Faculte des sciences et technique Hassan 1er Settat, Maroc",
      skills: ["Java EE", "Architecture logicielle", "Gestion de projets", "AI", "Développement Web/mobile"],
      description: "Formation approfondie en génie informatique, axée sur le développement de systèmes logiciels complexes, l'architecture logicielle et la gestion de projets. Acquisition de compétences avancées en intelligence artificielle.",
      backgroundColor: "#6b7b5f"
    },
    {
      title: "Diplôme d'études universitaire scientifiques et techniques",
      period: "2021 - 2023",
      location: "Faculte des sciences et technique Hassan 1er Settat, Maroc",
      description: "2 ans praparatoires aux études d'ingénieur, avec une formation solide en mathématiques, physique et informatique. Développement de compétences analytiques et techniques.",
      skills: ["Algorithmique", "Structures de données", "Bases de données", "Programmation C", "Analyse" , "AlgéBre" ,"Probabilité"],
      backgroundColor: "#a0bc82"
    },
    {
      title: "Baccalauréat scientifique",
      period: "2020 - 2021",
      location: "Lycee EL BAHTOURY Casablanca, Maroc",
      description: "La baccalauréat scientifique a été une étape clé dans mon parcours académique, me permettant d'acquérir des bases solides en mathématiques et en sciences.",
      skills: ["Mathématiques", "Physique"],
      backgroundColor: "#6c7e59"
    }
  ];

  return (
    <div id='formations' className='text-[#333333] py-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Formations</h2>
          <p className='text-[#1b2016] text-2xl max-w-4xl mx-auto'>
            Mon parcours académique m'a permis d'acquérir des compétences solides et diversifiées 
            dans le domaine de l'informatique, formant ainsi une base théorique et pratique 
            essentielle à ma pratique professionnelle.
          </p>
        </motion.div>

        <div className='space-y-24 md:space-y-32'>
          {formationsData.map((formation, index) => {
            const [ref, inView] = useInView({ 
              triggerOnce: true, 
              threshold: 0.2 
            });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='w-full'
              >
                <div 
                  style={{ backgroundColor: formation.backgroundColor }}
                  className='rounded-xl shadow-xl overflow-hidden'
                >
                  <div className='p-8 md:p-12'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between mb-8'>
                      <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0'>
                        <FaGraduationCap className='inline-block mr-3 mb-1' />
                        {formation.title}
                      </h3>
                      
                      <div className='flex flex-col sm:flex-row gap-4 text-white/90'>
                        <div className='flex items-center'>
                          <FaCalendarAlt className='mr-2' />
                          <span className='font-medium'>{formation.period}</span>
                        </div>
                        <div className='flex items-center'>
                          <FaMapMarkerAlt className='mr-2' />
                          <span className='font-medium'>{formation.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className='text-white/85 text-lg mb-6'>
                      {formation.description}
                    </div>
                    
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Compétences acquises:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {formation.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className='bg-white/20 text-white px-3 py-1 rounded-full text-sm'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Formations;