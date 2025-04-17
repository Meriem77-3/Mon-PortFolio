import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa'; 

const Work = () => {
    const projects = [
        {
            id: 1,
            title: "Projet 1",
            description: "Ce projet consiste en la création de la partie backend d’une application web dédiée à la vente et l’achat de tableaux artistiques...",
            image: '/artsphere.png',
            link: "https://github.com/Meriem77-3/ProjetFinal"
        },
        {
            id: 2,
            title: "Projet 2",
            description: "Application Java de réservation de billets d’avion en ligne avec gestion client et admin (Java, Swing, MySQL).",
            image: '/billets.png',
            link: "https://github.com/Meriem77-3/R-servation-de-billets-d-avion-en-ligne"
        },
        {
            id: 3,
            title: "Projet 3",
            description: "Animation web festive pour Ramadan avec lune, étoiles, lanterne interactive (HTML, CSS, JS).",
            image: '/Ramadan.png',
            link: "https://github.com/Meriem77-3/Ramadan-Animation"
        },
        {
            id: 4,
            title: "Projet 4",
            description: "Utilisation de GNN pour prédire les embouteillages en réseaux de transport urbain. Analyse spatio-temporelle.",
            image: '/Gnn.png',
            link: "https://github.com/Meriem77-3/PR-DICTION-DES-EMBOUTEILLAGES-GNN"
        },
        {
            id: 5,
            title: "Projet 5",
            description: "Implémentation et déploiement d'un RNN pour classification MNIST et génération de mini MNIST.",
            image: 'CLUSTERING.png',
            link: "https://github.com/Meriem77-3/RNN-pour-la-classification-et-la-g-n-ration"
        }
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div id='projets' className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-4xl text-[#333333] underline font-bold text-center mb-12'
                >
                    Mes Projets
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='mb-12 text-[#1b2016] text-2xl text-center'
                >
                    Tout au long de mon parcours, j’ai eu l’opportunité de concevoir et de réaliser divers projets concrets, me permettant de mettre en œuvre mes compétences en développement web et mobile. De la création de sites vitrines adaptatifs à la réalisation d’applications mobiles
                    sur mesure, chaque expérience a été l’occasion d’explorer de nouvelles approches, de surmonter des défis techniques et d’enrichir mes connaissances.
                </motion.p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4'>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: project.id * 0.2 }}
                        className='bg-[#7e8f6b] p-6 rounded-lg text-center shadow-lg transition-shadow duration-300 transform hover:shadow-lg hover:shadow-[#a0bc82] hover:scale-105'
                    >
                        <img src={project.image} alt={project.title} className='w-full h-48 object-contain' />
                        <div className='p-6'>
                            <h3 className='text-xl text-[#2e2d2d] font-semibold mb-2'>{project.title}</h3>
                            <p className='text-[#222a18] mb-4'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className='border-2 text-[#1b2016] rounded-lg text-center shadow-lg transition-shadow duration-300 transform border-[#47553a] px-4 py-2 hover:bg-[#7d8972] hover:border-[#55614b] hover:shadow-lg hover:shadow-[#a0bc82] hover:scale-105'>
                                    détails
                                </button>
                            </a>
                        </div>
                    </motion.div>
                ))}

                {/* Carte "Voir plus + Télécharger CV" */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (projects.length + 1) * 0.2 }}
                    className='flex flex-col items-center justify-center bg-[#6b7b5f] shadow-lg rounded-lg p-6 text-center'
                >
                    <h3 className='text-xl font-semibold mb-4 text-[#2e2d2d]'>Voir plus de projets</h3>
                    <p className='text-[#444b39] mb-4'>Découvrez plus de réalisations et mon parcours complet en téléchargeant mon CV.</p>
                    <a href="/CV_ASSOULI_MERIEM.pdf" download="CV_ASSOULI_MERIEM.pdf">
                        <button className='flex items-center gap-2 bg-[#47553a] text-white px-5 py-2 rounded-full hover:bg-[#283020] transition'>
                            <FaDownload />
                            Télécharger mon CV
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Work;
