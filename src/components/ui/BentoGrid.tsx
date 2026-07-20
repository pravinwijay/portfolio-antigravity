'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react'
import { SiCarrefour, SiReact, SiAngular } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { FaUtensils } from 'react-icons/fa6'
import { TbCrane, TbBrandCSharp } from 'react-icons/tb'
import { useLanguage } from '../../context/LanguageContext'

function BnpParibasIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
            <path d="M 12,78 C 22,52 44,36 78,24 C 66,30 50,42 40,55 C 31,66 22,74 12,78 Z" />
            <path d="M 26,64 C 34,43 52,30 81,20 C 70,25 56,36 47,48 C 39,56 31,62 26,64 Z" />
            <path d="M 40,50 C 46,34 60,24 84,17 C 74,21 62,30 54,40 C 47,47 42,51 40,50 Z" />
            <path d="M 54,36 C 58,25 68,18 87,14 C 79,17 68,24 62,31 C 57,36 55,39 54,36 Z" />
        </svg>
    )
}

function renderHighlightedText(text: string) {
    const regex = /(Angular|ASP\.NET|Azure DevOps|Laravel|SQL \(MySQL\)|SharePoint|Relation client)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (part === 'Angular') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">Angular</span>;
        }
        if (part === 'ASP.NET') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">ASP.NET</span>;
        }
        if (part === 'Azure DevOps') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">Azure DevOps</span>;
        }
        if (part === 'Laravel') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">Laravel</span>;
        }
        if (part === 'SQL (MySQL)') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">SQL (MySQL)</span>;
        }
        if (part === 'SharePoint') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">SharePoint</span>;
        }
        if (part === 'Relation client') {
            return <span key={index} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">Relation client</span>;
        }
        return part;
    });
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const listContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
}

export function BentoGrid() {
    const { t } = useLanguage();
    const [openExp, setOpenExp] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });

    const toggleExp = (index: number) => {
        setOpenExp(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const experiences = [
        {
            title: t('about.expRole1'),
            company: "MAF Assurances",
            location: "Paris, 75017",
            date: `${t('about.dateSince')} 09/2024`,
            desc: [
                "Développement from scratch d’une application Angular & ASP.NET",
                "Création d’un Batch et mise à jour de la BDD",
                "CI/CD avec Azure DevOps"
            ],
            icon: TbCrane,
            color: "bg-[#0055A5]"
        },
        {
            title: t('about.expRole2'),
            company: "FedHubs",
            location: "Créteil, 94000",
            date: "01/2024 - 03/2024",
            desc: [
                "Développement en Laravel sur le backend du projet",
                "Tests unitaires, optimisation des requêtes SQL (MySQL), documentation des API"
            ],
            icon: FaUtensils,
            color: "bg-indigo-600"
        },
        {
            title: t('about.expRole3'),
            company: "BNP Paribas",
            location: "Paris, 75019",
            date: "06/2023 - 07/2023",
            desc: [
                "Administration du SharePoint (transfert de données, gestion des accès)",
                "Réalisation d'un site statique (HTML & JavaScript) filtrant les données d'un fichier .xlsx"
            ],
            icon: BnpParibasIcon,
            color: "bg-[#00965E]"
        },
        {
            title: t('about.expRole4'),
            company: "Carrefour",
            location: "Saint Maximin, 60740",
            date: `${t('about.dateSince')} 01/2023`,
            desc: [
                "Préparation de commandes pour le service Drive",
                "Hôte de caisse",
                "Relation client"
            ],
            icon: SiCarrefour,
            color: "bg-blue-400"
        }
    ];

    const techStack = [
        {
            name: "Angular",
            icon: SiAngular,
            hoverClass: "hover:border-[#DD0031] hover:bg-[#DD0031]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#DD0031] dark:hover:text-[#ff4d6d]",
            iconColor: "text-[#DD0031]"
        },
        {
            name: "C#",
            icon: TbBrandCSharp,
            hoverClass: "hover:border-[#9B4F96] hover:bg-[#9B4F96]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#9B4F96] dark:hover:text-[#c76bbd]",
            iconColor: "text-[#9B4F96]"
        },
        {
            name: "React",
            icon: SiReact,
            hoverClass: "hover:border-[#61DAFB] hover:bg-[#61DAFB]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#0088cc] dark:hover:text-[#61DAFB]",
            iconColor: "text-[#61DAFB]"
        },
        {
            name: "SQL Server",
            icon: DiMsqlServer,
            hoverClass: "hover:border-[#CC292B] hover:bg-[#CC292B]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#CC292B] dark:hover:text-[#ff5c5e]",
            iconColor: "text-[#CC292B]"
        }
    ];

    const education = [
        {
            title: t('about.eduTitle1'),
            school: "EFREI Paris",
            date: `${t('about.dateSince')} 09/2025`,
            details: t('about.eduDetails1'),
            stack: "Golang, Angular, Nest.js, Flutter, Rust, Micro Services, RabbitMQ/Kafka, GraphQL, AWS",
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        },
        {
            title: t('about.eduTitle2'),
            school: "EFREI Paris",
            date: "2024 - 2025",
            details: t('about.eduDetails2'),
            stack: "React.JS, Vue.js, Symfony, Spring Boot, iOS Swift, Docker, Stack ELK, OWASP Secure Coding, Figma, UML",
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        },
        {
            title: "BTS Services Informatiques aux Organisations",
            school: "Lycée Jean Rostand Chantilly",
            date: "2022 - 2024",
            details: "Option SLAM (Solutions Logicielles et Applications Métiers)",
            stack: "Java, PHP, SQL, HTML/CSS, JavaScript, Git",
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        }
    ];

    return (
        <section className="px-4 md:px-6 lg:px-24 py-16 md:py-20 bg-gray-50 dark:bg-zinc-950 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8 md:mb-12">{t('about.title')}</h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
            >

                {/* About Block - Large */}
                <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-200 dark:border-white/5 relative overflow-hidden group shadow-sm dark:shadow-none transition-colors min-h-0 md:min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-4">{t('about.aboutTitle')}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg">
                        {t('about.aboutText')}
                    </p>
                </motion.div>

                {/* Tech Stack - Vertical */}
                <motion.div variants={item} className="md:col-span-1 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-200 dark:border-white/5 flex flex-col justify-between shadow-sm dark:shadow-none transition-colors min-h-0 md:min-h-[300px]">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 md:mb-6">{t('about.stackTitle')}</h3>
                        <ul className="space-y-2">
                            {techStack.map((tech, i) => (
                                <li
                                    key={i}
                                    className={`px-3 py-2 rounded-xl border border-transparent bg-transparent ${tech.hoverClass} transition-all duration-300 cursor-pointer flex items-center gap-2 font-medium text-sm md:text-base group select-none`}
                                >
                                    <tech.icon className={`w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 ${tech.iconColor} transition-all duration-300 shrink-0`} />
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Socials / Links - Horizontal */}
                <div className="md:col-span-1 md:row-span-2 flex flex-col gap-4">
                    <motion.div variants={item} className="flex-1 min-h-[100px]">
                        <a
                            href="https://www.linkedin.com/in/pravinwijay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full bg-[#0A66C2]/10 dark:bg-[#0A66C2]/15 border border-[#0A66C2]/20 dark:border-[#0A66C2]/30 rounded-3xl p-4 md:p-6 flex items-center justify-center hover:bg-[#0A66C2]/20 dark:hover:bg-[#0A66C2]/25 transition-colors cursor-pointer text-[#0A66C2] dark:text-[#389cf7] font-medium text-base md:text-lg hover:underline gap-1.5"
                        >
                            LinkedIn ↗
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex-1 min-h-[100px]">
                        <a
                            href="https://youtu.be/oyWMgTLmzTI?si=eSprUxaP037e3agb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full bg-[#FF0000]/10 dark:bg-[#FF0000]/15 border border-[#FF0000]/20 dark:border-[#FF0000]/30 rounded-3xl p-4 md:p-6 flex items-center justify-center hover:bg-[#FF0000]/20 dark:hover:bg-[#FF0000]/25 transition-colors cursor-pointer text-[#FF0000] dark:text-[#ff4d4d] font-medium text-base md:text-lg hover:underline gap-1.5"
                        >
                            YouTube ↗
                        </a>
                    </motion.div>
                </div>

                {/* Experience Block */}
                <motion.div variants={item} className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-6 md:mb-8 flex items-center gap-3">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-zinc-500" />
                        {t('about.experienceTitle')}
                    </h3>
                    <motion.div
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-2 md:ml-3 pl-6 md:pl-8 relative"
                    >
                        {experiences.map((exp, i) => (
                            <motion.div variants={listItem} key={i} className="relative">
                                <span className={`absolute -left-[35px] md:-left-[41px] top-1 p-1.5 md:p-2 rounded-full border-4 border-white dark:border-zinc-900 ${exp.color} text-white z-10`}>
                                    <exp.icon className="w-3 h-3 md:w-4 md:h-4" />
                                </span>
                                <div
                                    onClick={() => toggleExp(i)}
                                    className="flex items-start justify-between cursor-pointer select-none group/item hover:opacity-90 transition-opacity"
                                >
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                            {exp.title}
                                        </h4>
                                        <div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                            {exp.company}
                                        </div>
                                        <span className="inline-block px-2 py-0.5 md:py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-2">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        aria-label="Toggle experience details"
                                        className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-all ml-2"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openExp[i] ? 'rotate-180 text-zinc-900 dark:text-white' : ''}`} />
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {openExp[i] && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 border-l-2 border-zinc-200 dark:border-zinc-800/80 pl-3 ml-1">
                                                {exp.desc.map((d, j) => (
                                                    <li key={j} className="flex items-start gap-1.5">
                                                        <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                                                        <span className="leading-relaxed">{renderHighlightedText(d)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Education Block */}
                <motion.div variants={item} className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-6 md:mb-8 flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-zinc-500" />
                        {t('about.educationTitle')}
                    </h3>
                    <motion.div
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-2 md:ml-3 pl-6 md:pl-8 relative"
                    >
                        {education.map((edu, i) => (
                            <motion.div variants={listItem} key={i} className="relative">
                                <span className={`absolute -left-[35px] md:-left-[41px] top-1 p-1.5 md:p-2 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-900 dark:bg-white text-white dark:text-black`}>
                                    <edu.icon className="w-3 h-3 md:w-4 md:h-4" />
                                </span>
                                <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h4>
                                <div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                    {edu.school}
                                </div>
                                <span className="inline-block px-2 py-0.5 md:py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-2">
                                    {edu.date}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    )
}
