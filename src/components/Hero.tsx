'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400 mb-4">
                    Bonjour, je suis Développeur
                </h2>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
            >
                Je conçois des produits,<br className="hidden md:block" />
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    digitaux et des expériences.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
            >
                Je me spécialise dans la création d'expériences numériques exceptionnelles. Actuellement, je me concentre sur la construction de produits accessibles et centrés sur l'humain.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <a
                    href="#projects"
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-transform"
                >
                    Voir mes travaux
                </a>
            </motion.div>
        </section>
    );
}
