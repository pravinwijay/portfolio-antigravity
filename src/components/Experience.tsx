'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Building2, ShoppingCart, Landmark } from 'lucide-react'
import { SiCarrefour } from 'react-icons/si'

const experiences = [
    {
        title: "Développeur Fullstack - Alternance",
        company: "MAF Assurances",
        location: "Paris, 75017",
        date: "Depuis 09/2024",
        desc: [
            "Développement from scratch d'une application Angular & ASP.NET",
            "Méthode Agile, CI/CD avec Azure DevOps"
        ],
        type: "work",
        icon: Building2, // Generic for MAF
        color: "bg-blue-500"
    },
    {
        title: "Développeur Backend - Stage",
        company: "FedHubs",
        location: "Créteil, 94000",
        date: "01/2024 - 03/2024",
        desc: [
            "Développement en Laravel sur le backend du projet",
            "Tests unitaires, optimisation des requêtes SQL (MySQL), documentation des API"
        ],
        type: "work",
        icon: Briefcase, // Generic for FedHubs
        color: "bg-indigo-500"
    },
    {
        title: "Administrateur SharePoint - Stage",
        company: "BNP Paribas",
        location: "Paris, 75019",
        date: "06/2023 - 07/2023",
        desc: [
            "Administration du SharePoint (transfert de données, gestion des accès)",
            "Réalisation d'un site statique (HTML & JavaScript) filtrant les données d'un fichier .xlsx"
        ],
        type: "work",
        icon: Landmark, // Generic for BNP (Bank)
        color: "bg-green-600"
    },
    {
        title: "Employé Polyvalent - CDI temps partiel",
        company: "Carrefour",
        location: "Saint Maximin, 60740",
        date: "Depuis 01/2023",
        desc: [
            "Préparation de commandes",
            "Hôte de caisse"
        ],
        type: "work",
        icon: SiCarrefour,
        color: "bg-blue-400"
    }
]

const education = [
    {
        title: "Mastère Dev. Manager Fullstack",
        school: "EFREI Paris",
        date: "Depuis 09/2024",
        details: "RNCP 39765 - Expert en Architecture et Développement Logiciel",
        stack: "Golang, Angular, Nest.js, Flutter, Rust, Micro Services, RabbitMQ/Kafka, GraphQL, AWS",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "Bachelor Développeur Web & Applications",
        school: "EFREI Paris",
        date: "01/2024 - 03/2024",
        details: "RNCP 39608 - Concepteur Développeur d'Application",
        stack: "React.JS, Vue.js, Symfony, Spring Boot, iOS Swift, Docker, Stack ELK, OWASP Secure Coding, Figma, UML",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    }
]

export function Experience() {
    return (
        <section className="px-6 lg:px-24 py-20 bg-white dark:bg-black transition-colors">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-16">Parcours</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Work Experience */}
                <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-zinc-500" />
                        Expériences Professionnelles
                    </h3>
                    <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8 relative">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <span className={`absolute -left-[41px] top-1 p-2 rounded-full border-4 border-white dark:border-black ${exp.color} text-white`}>
                                    <exp.icon className="w-4 h-4" />
                                </span>
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{exp.title}</h4>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-2">
                                    {exp.company} - <span className="text-xs">{exp.location}</span>
                                </div>
                                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-3">
                                    {exp.date}
                                </span>
                                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                                    {exp.desc.map((d, j) => (
                                        <li key={j}>{d}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-zinc-500" />
                        Formations
                    </h3>
                    <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8 relative">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <span className={`absolute -left-[41px] top-1 p-2 rounded-full border-4 border-white dark:border-black bg-zinc-900 dark:bg-white text-white dark:text-black`}>
                                    <edu.icon className="w-4 h-4" />
                                </span>
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h4>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                    {edu.school}
                                </div>
                                <div className="text-zinc-400 dark:text-zinc-500 text-xs italic mb-2">
                                    {edu.details}
                                </div>
                                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-3">
                                    {edu.date}
                                </span>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                    <span className="font-semibold">Stack:</span> {edu.stack}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
