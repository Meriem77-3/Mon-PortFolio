import React from 'react';
import { FaAppStore } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const servicesData = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes, responsives et performants à l’aide de technologies telles que React, TailwindCSS, HTML, CSS, JavaScript et ECMAScript. J’accorde une attention particulière à l’ergonomie, à l’accessibilité et à la performance des interfaces utilisateur.",
      icon: "🌐"
    },
    {
      title: "Développement Mobile",
      description: "Développement d’applications mobiles multiplateformes avec Flutter et Dart, permettant de livrer des expériences fluides et cohérentes aussi bien sur Android que sur iOS. Mes applications sont pensées pour être intuitives, efficaces et esthétiques.",
      icon: "📱"
    },
    {
      title: "Analyse & Conception Logicielle",
      description: "Accompagnement dans le choix des architectures logicielles, des frameworks, ou encore des méthodes de gestion de projet. Grâce à ma maîtrise des design patterns, des méthodes agiles, et des outils d’analyse comme UML, je suis en mesure de structurer et faire évoluer des projets de manière cohérente.",
      icon: "📊"
    },
    {
      title: "Intégration API & Back-end",
      description: "Intégration fluide d’API tierces dans des solutions existantes ou nouvelles. Je conçois également des architectures back-end robustes à l’aide de JavaEE, Spring et Spring Boot, en interfaçant efficacement avec des bases de données MySQL, SQL, et PL/SQL.",
      icon: "🔗"
    },
    {
      title: "Programmation Système & Réseau",
      description: "Intervention sur des projets système et réseau avec une bonne maîtrise de Docker, Linux, et du langage C. Je m’occupe également de la maintenance des solutions développées en assurant leur stabilité, leur sécurité et leur évolutivité.",
      icon: "🛠️"
    },
    {
      title: "Intelligence Artificielle & Data",
      description: "Curieuse et passionnée par l’innovation, je m’intéresse également aux domaines de l’IA et de la science des données. J’ai eu l’occasion de travailler sur des projets intégrant des modèles de Machine Learning, notamment dans le cadre de prédictions basées sur des données réelles, en m’appuyant sur des outils comme Python et des bibliothèques spécialisées.",
      icon: "🤖"
    }
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id='téchnologies' className='text-[#333333] py-16'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='container mx-auto flex flex-col items-center text-center px-4'
      >
        <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Téchnologies</h2>
        <p className='mb-12 text-[#1b2016] text-2xl  '>
        Au fil de mon parcours, j’ai eu l’occasion de développer une expertise dans différents domaines du développement informatique. Mon profil technique polyvalent me permet d’intervenir sur des projets variés, allant de la conception d’interfaces web interactives au développement de systèmes backend performants, 
        en passant par des applications mobiles et des environnements techniques avancés. Voici les principaux axes sur lesquels je suis en mesure d’apporter de la valeur :
        </p>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#7e8f6b] p-6 rounded-lg text-center shadow-lg transition-shadow duration-300 transform hover:shadow-lg hover:shadow-[#a0bc82] hover:scale-105"
          >
            <FaAppStore className='text-4xl mb-4 text-[#2f3b22] sm:text-5xl lg:text-6xl mx-auto' />
            <h3 className='text-lg sm:text-xl lg:text-2xl text-[#354a1f] font-semibold mb-2'>
              {service.icon} {service.title}
            </h3>
            <p className='text-sm sm:text-base lg:text-lg text-[#232a1c]'>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
