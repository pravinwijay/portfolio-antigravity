'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react'
import { SiCarrefour, SiReact, SiAngular, SiPython, SiApachespark, SiApachehadoop } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { FaUtensils, FaLinkedinIn, FaPlay } from 'react-icons/fa6'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'
import { useLanguage } from '../../context/LanguageContext'
import { getImagePath } from '../../utils/basePath'

function BnpParibasIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 128 128" fill="currentColor" className={className}>
            <path d="M21.8,122.4c-6-4.6-9.5-13.5-9.5-13.5C7.2,107,0,102.1,0,102.1s4.7-2.6,8.9-3.3c-1.5-8.7,0.5-20.5,0.5-20.5S10.8,89,16,97.2c6.4-1.3,11.8-1.8,11.8-1.8s-3.4,4.8-5.2,10.1c4,4,11.3,8.1,14.1,9.1c-6.1-0.3-13-1.5-15.6-2.5C21,115.8,21.1,119.7,21.8,122.4z M38.1,71.9c-3.5-7.4-5.8-17.1-5.8-17.1s-8.6,5.3-21.6,18c7.6-15,16.6-24.5,16.6-24.5s-3.4-3.4-15.6-4.5C23.5,39.6,36.5,41,36.5,41s5.8-4.9,15.4-7.7c0,0-2.5,3.4-4.4,8.7c13.7,1.5,26.4,9.5,26.4,9.5S52.8,48.2,43.8,51C40.6,58.7,38.8,67,38.1,71.9z M68.7,114.5c0.1,2.4,1,4.8,1,4.8s-1.9,0.2-7.1,0.4c-7.4,4.3-16.5,5.9-16.5,5.9s5.8-3.8,8.7-6.8c-4.6-0.7-8.7-2.8-8.7-2.8s7.8-0.5,13.5-1.9c2.7-2.7,7.7-9.8,7.7-9.8s0.3,4,0.8,6.6c6.6-3.2,12.1-7.3,12.1-7.3S75.3,109.6,68.7,114.5z M120.8,20.3c0.6,11.3-1.8,24.8-5.8,35.4c0-7-0.7-19.8-4.9-28.5c-3.3,2.3-11.8,6.5-23.7,12.6c1.8-1.8,9.7-11.2,12-15.2c-8.3,0.1-22.6,1.1-34.5,3.8c7.9-4.4,23.4-9.5,36-11.7C94.4,12,84.1,6.3,76.2,2.4c6.4,0.2,30.8,4.8,39.1,11.2c5.5-1.3,12.7-1.5,12.7-1.5C126.3,15.6,124,18.2,120.8,20.3z" />
        </svg>
    )
}

function PowerBiIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <rect x="3" y="12" width="4.5" height="9" rx="1.5" opacity="0.7" />
            <rect x="9.75" y="7.5" width="4.5" height="13.5" rx="1.5" opacity="0.85" />
            <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" />
        </svg>
    )
}

function renderHighlightedText(text: string) {
    const regex = /(Angular|ASP\.NET|Azure DevOps|Laravel|SQL \(MySQL\)|SharePoint|Relation client)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (part === 'Angular') {
            return <span key={index} className="transition-colors duration-200 hover:text-red-600 dark:hover:text-red-400 cursor-default">Angular</span>;
        }
        if (part === 'ASP.NET') {
            return <span key={index} className="transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default">ASP.NET</span>;
        }
        if (part === 'Azure DevOps') {
            return <span key={index} className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-default">Azure DevOps</span>;
        }
        if (part === 'Laravel') {
            return <span key={index} className="transition-colors duration-200 hover:text-rose-600 dark:hover:text-rose-400 cursor-default">Laravel</span>;
        }
        if (part === 'SQL (MySQL)') {
            return <span key={index} className="transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-default">SQL (MySQL)</span>;
        }
        if (part === 'SharePoint') {
            return <span key={index} className="transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-default">SharePoint</span>;
        }
        if (part === 'Relation client') {
            return <span key={index} className="transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 cursor-default">Relation client</span>;
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
    const [openExp, setOpenExp] = useState<Record<number, boolean>>({});
    const [openEdu, setOpenEdu] = useState<Record<number, boolean>>({});
    const [activeStackTab, setActiveStackTab] = useState<'data' | 'dev'>('data');

    const toggleExp = (index: number) => {
        setOpenExp(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const toggleEdu = (index: number) => {
        setOpenEdu(prev => ({ ...prev, [index]: !prev[index] }));
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
            icon: "/images/projects/maf.png",
            color: "bg-white"
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

    const dataStack = [
        {
            name: "Python",
            icon: SiPython,
            hoverClass: "hover:border-[#3776AB] hover:bg-[#3776AB]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#3776AB] dark:hover:text-[#58a6ff]",
            iconColor: "text-[#3776AB] dark:text-[#58a6ff]"
        },
        {
            name: "Spark",
            icon: SiApachespark,
            hoverClass: "hover:border-[#E25A1C] hover:bg-[#E25A1C]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#E25A1C] dark:hover:text-[#ff783b]",
            iconColor: "text-[#E25A1C]"
        },
        {
            name: "Power BI",
            icon: PowerBiIcon,
            hoverClass: "hover:border-[#F2C811] hover:bg-[#F2C811]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#d4ac00] dark:hover:text-[#F2C811]",
            iconColor: "text-[#d4ac00] dark:text-[#F2C811]"
        },
        {
            name: "Hadoop",
            icon: SiApachehadoop,
            hoverClass: "hover:border-[#EAB308] hover:bg-[#EAB308]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#ca8a04] dark:hover:text-[#FACC15]",
            iconColor: "text-[#ca8a04] dark:text-[#FACC15]"
        },
        {
            name: "SQL",
            icon: TbSql,
            hoverClass: "hover:border-[#0284C7] hover:bg-[#0284C7]/10 text-zinc-700 dark:text-zinc-300 hover:text-[#0284C7] dark:hover:text-[#38BDF8]",
            iconColor: "text-[#0284C7] dark:text-[#38BDF8]"
        }
    ];

    const devStack = [
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

    const currentStack = activeStackTab === 'data' ? dataStack : devStack;

    const education = [
        {
            title: "Mastère Dév. Manager Full Stack",
            rncp: "RNCP39765",
            school: "EFREI Paris",
            location: "Villejuif, 94000",
            date: `${t('about.dateSince')} 09/2025`,
            desc: [
                "Data Warehouse, Data Lake, ETL, Hadoop, Spark, Power BI",
                "Architecture Logicielle & Cloud, GraphQL, Microservices, RabbitMQ / Kafka, Golang"
            ],
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        },
        {
            title: "Bachelor Développeur Web & Applications",
            rncp: "RNCP39608",
            school: "EFREI Paris",
            location: "Villejuif, 94000",
            date: "09/2024 – 07/2025",
            desc: [
                "Pipelines CI/CD, intégration de bases NoSQL",
                "Architecture MVC, POO, UX/UI, Java, React, Swift, Docker"
            ],
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        },
        {
            title: "BTS Services Informatiques aux Organisations",
            school: "Lycée Jean Rostand",
            location: "Chantilly, 60500",
            date: "2022 – 2024",
            desc: [
                "Option SLAM (Solutions Logicielles et Applications Métiers)",
                "Java, PHP, SQL, HTML/CSS, JavaScript, Git"
            ],
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
            >

                {/* About Block - Large */}
                <motion.div variants={item} className="md:col-span-2 lg:row-span-2 min-w-0 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-200 dark:border-white/5 relative overflow-hidden group shadow-sm dark:shadow-none transition-colors min-h-0 lg:min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-4">{t('about.aboutTitle')}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg">
                        {t('about.aboutText')}
                    </p>
                </motion.div>

                {/* Tech Stack - Vertical (Browser Window style) */}
                <motion.div variants={item} className="md:col-span-1 lg:col-span-1 lg:row-span-2 min-w-0 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/5 flex flex-col shadow-sm dark:shadow-none transition-colors min-h-0 lg:min-h-[300px] overflow-hidden">
                    {/* Browser Tabs (Full width of the card, no 3 dots) */}
                    <div className="grid grid-cols-2 w-full bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-white/10">
                        <button
                            type="button"
                            onClick={() => setActiveStackTab('data')}
                            className={`py-3 px-4 text-xs font-bold tracking-wider transition-all cursor-pointer select-none border-r border-zinc-200/80 dark:border-white/10 ${
                                activeStackTab === 'data'
                                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-white/40 dark:hover:bg-zinc-700/40'
                            }`}
                        >
                            DATA
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveStackTab('dev')}
                            className={`py-3 px-4 text-xs font-bold tracking-wider transition-all cursor-pointer select-none ${
                                activeStackTab === 'dev'
                                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-white/40 dark:hover:bg-zinc-700/40'
                            }`}
                        >
                            DEV
                        </button>
                    </div>

                    {/* URL Bar Section */}
                    <div className="px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10">
                        <div className="w-full px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-white/5 text-xs font-medium text-zinc-600 dark:text-zinc-300 flex items-center select-none">
                            <span className="text-zinc-400 dark:text-zinc-500">{t('about.stackTitle')}/</span>
                            <span className="text-zinc-900 dark:text-white font-semibold">
                                {activeStackTab === 'data' ? 'Data' : 'Dev'}
                            </span>
                        </div>
                    </div>

                    {/* Browser Window Content */}
                    <div className="p-4 md:p-5 flex-1 bg-white dark:bg-zinc-900">
                        <AnimatePresence mode="wait">
                            <motion.ul
                                key={activeStackTab}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.18 }}
                                className="space-y-1.5"
                            >
                                {currentStack.map((tech) => (
                                    <li
                                        key={tech.name}
                                        className={`px-3 py-2 rounded-xl border border-transparent bg-transparent ${tech.hoverClass} transition-all duration-300 cursor-pointer flex items-center gap-2 font-medium text-sm md:text-base group select-none`}
                                    >
                                        <tech.icon className={`w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 ${tech.iconColor} transition-all duration-300 shrink-0`} />
                                        <span>{tech.name}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Socials / Links */}
                <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 flex flex-row md:flex-col gap-4 min-w-0">
                    <motion.div variants={item} className="flex-1 min-h-[88px] md:min-h-[100px] min-w-0">
                        <a
                            href="https://www.linkedin.com/in/pravinwijay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] hover:border-[#0A66C2] dark:hover:border-[#0A66C2] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-md cursor-pointer text-[#0A66C2] hover:text-white dark:hover:text-white"
                        >
                            <FaLinkedinIn className="w-9 h-9 md:w-11 md:h-11" />
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex-1 min-h-[88px] md:min-h-[100px] min-w-0">
                        <a
                            href="https://youtu.be/oyWMgTLmzTI?si=eSprUxaP037e3agb"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000] dark:hover:bg-[#FF0000] hover:border-[#FF0000] dark:hover:border-[#FF0000] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-md cursor-pointer text-[#FF0000] hover:text-white dark:hover:text-white"
                        >
                            <FaPlay className="w-8 h-8 md:w-10 md:h-10 translate-x-0.5" />
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
                                <span className={`absolute -left-[35px] md:-left-[41px] top-1 ${exp.company === 'MAF Assurances' ? 'p-0.5' : 'p-1.5 md:p-2'} rounded-full border-4 border-white dark:border-zinc-900 ${exp.color} text-white z-10 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center overflow-hidden`}>
                                    {typeof exp.icon === 'string' ? (
                                        <img
                                            src={getImagePath(exp.icon)}
                                            alt={exp.company}
                                            className={`w-full h-full object-contain ${exp.company === 'MAF Assurances' ? 'scale-125' : ''}`}
                                        />
                                    ) : (
                                        <exp.icon className="w-3 h-3 md:w-4 md:h-4" />
                                    )}
                                </span>
                                <div
                                    onClick={() => toggleExp(i)}
                                    className="flex items-start justify-between cursor-pointer select-none group/item hover:opacity-90 transition-opacity"
                                >
                                    <div>
                                        <h4 className="text-base md:text-lg text-zinc-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                                            {exp.title.includes(' - ') ? (
                                                <>
                                                    <span className="font-bold">{exp.title.split(' - ')[0]}</span>
                                                    <span className="text-zinc-400 dark:text-zinc-500 font-normal">-</span>
                                                    <span className="font-normal italic text-zinc-600 dark:text-zinc-400">{exp.title.split(' - ')[1]}</span>
                                                </>
                                            ) : (
                                                <span className="font-bold">{exp.title}</span>
                                            )}
                                        </h4>
                                        <div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                            {exp.company} <span className="text-zinc-400 dark:text-zinc-500 font-normal">|</span> <span className="text-xs">{exp.location}</span>
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
                                <span className={`absolute -left-[35px] md:-left-[41px] top-1 p-1.5 md:p-2 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-900 dark:bg-white text-white dark:text-black z-10 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center`}>
                                    <edu.icon className="w-3 h-3 md:w-4 md:h-4" />
                                </span>
                                <div
                                    onClick={() => toggleEdu(i)}
                                    className="flex items-start justify-between cursor-pointer select-none group/item hover:opacity-90 transition-opacity"
                                >
                                    <div>
                                        <h4 className="text-base md:text-lg text-zinc-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                                            <span className="font-bold">{edu.title}</span>
                                            {edu.rncp && (
                                                <>
                                                    <span className="text-zinc-400 dark:text-zinc-500 font-normal">|</span>
                                                    <span className="font-bold text-blue-600 dark:text-blue-400">{edu.rncp}</span>
                                                </>
                                            )}
                                        </h4>
                                        <div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                            <span className="text-[#1e40af] dark:text-blue-300/90 font-semibold">{edu.school}</span>
                                            {edu.location && (
                                                <>
                                                    {' '}<span className="text-zinc-400 dark:text-zinc-500 font-normal">|</span>{' '}
                                                    <span className="text-xs text-zinc-600 dark:text-zinc-400">{edu.location}</span>
                                                </>
                                            )}
                                        </div>
                                        <span className="inline-block px-2 py-0.5 md:py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-2">
                                            {edu.date}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        aria-label="Toggle education details"
                                        className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-all ml-2"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openEdu[i] ? 'rotate-180 text-zinc-900 dark:text-white' : ''}`} />
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {openEdu[i] && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 border-l-2 border-zinc-200 dark:border-zinc-800/80 pl-3 ml-1">
                                                {edu.desc.map((d, j) => (
                                                    <li key={j} className="flex items-start gap-1.5">
                                                        <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                                                        <span className="leading-relaxed">{d}</span>
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

            </motion.div>
        </section>
    )
}
