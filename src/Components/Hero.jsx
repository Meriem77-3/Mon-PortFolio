import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="text-[#333333] py-10 bg-[#a3ad8f]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">

                {/* Image à gauche */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="flex-shrink-0 w-full md:w-1/3 flex justify-center"
                >
                    <img
                        src="/image1.png"
                        alt="Portrait professionnel"
                        className="w-96 h-auto md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-xl object-cover shadow-lg"
                        style={{ border: '2px solid #556048' }}
                    />
                </motion.div>

                {/* Texte à droite */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-2/3 text-center md:text-left"
                >
                    {/* Titre */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Mon PortFolio
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="block mt-2"
                            style={{ color: '#556048' }}
                        >
                            ASSOULI Meriem
                        </motion.span>
                    </motion.h1>

                    {/* Paragraphe */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                        className="text-lg max-w-2xl mx-auto md:mx-0 mb-8"
                        style={{ color: '#1b2016' }}
                    >
                        Passionnée par le développement logiciel et l'ingénierie informatique, je m'investis activement dans la création de projets personnels afin de consolider mes compétences. Ce portfolio présente mes réalisations, mes connaissances techniques en développement web et ma capacité à résoudre des problèmes complexes avec rigueur et méthode. Mon ambition est d'apporter des solutions innovantes tout en enrichissant continuellement mon savoir-faire.
                    </motion.p>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                        {/* Bouton Contact */}
                        <motion.button
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="text-white px-6 py-3 rounded-full text-lg bg-[#556048]  border-[#556048]  border-2 font-semibold hover:bg-[#a3ad8f] hover:border-[#20241b] transition-all duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block w-full"
                            >
                                Contactez-moi
                            </Link>
                        </motion.button>

                        {/* Bouton Histoire */}
                        <motion.button
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="text-[#333333] px-6 py-3 rounded-full text-lg font-semibold border-2 transition-all duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#556048] hover:text-white"
                            style={{ borderColor: '#47553a' }}
                        >
                            <Link
                                to="apropos"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block w-full"
                            >
                                Voir mes informations 
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
