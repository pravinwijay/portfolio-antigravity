'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Building2, Landmark } from 'lucide-react'
import { SiCarrefour } from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'

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

export function BentoGrid() {
    const { t } = useLanguage();

    const experiences = [
        {
            title: t('about.expRole1'),
            company: "MAF Assurances",
            location: "Paris, 75017",
            date: `${t('about.dateSince')} 09/2024`,
            desc: [t('about.expDesc1a'), t('about.expDesc1b')],
            icon: Building2,
            color: "bg-blue-500"
        },
        {
            title: t('about.expRole2'),
            company: "FedHubs",
            location: "Créteil, 94000",
            date: "01/2024 - 03/2024",
            desc: [t('about.expDesc2a'), t('about.expDesc2b')],
            icon: Briefcase,
            color: "bg-indigo-500"
        },
        {
            title: t('about.expRole3'),
            company: "BNP Paribas",
            location: "Paris, 75019",
            date: "06/2023 - 07/2023",
            desc: [t('about.expDesc3a'), t('about.expDesc3b')],
            icon: Landmark,
            color: "bg-green-600"
        },
        {
            title: t('about.expRole4'),
            company: "Carrefour",
            location: "Saint Maximin, 60740",
            date: `${t('about.dateSince')} 01/2023`,
            desc: [t('about.expDesc4a'), t('about.expDesc4b')],
            icon: SiCarrefour,
            color: "bg-blue-400"
        }
    ];

    const education = [
        {
            title: t('about.eduTitle1'),
            school: "EFREI Paris",
            date: `${t('about.dateSince')} 09/2024`,
            details: t('about.eduDetails1'),
            stack: "Golang, Angular, Nest.js, Flutter, Rust, Micro Services, RabbitMQ/Kafka, GraphQL, AWS",
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        },
        {
            title: t('about.eduTitle2'),
            school: "EFREI Paris",
            date: "01/2024 - 03/2024",
            details: t('about.eduDetails2'),
            stack: "React.JS, Vue.js, Symfony, Spring Boot, iOS Swift, Docker, Stack ELK, OWASP Secure Coding, Figma, UML",
            icon: GraduationCap,
            color: "bg-zinc-900 dark:bg-white"
        }
    ];

    return (
        <section className="px-6 lg:px-24 py-20 bg-gray-50 dark:bg-zinc-950 transition-colors">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">{t('about.title')}</h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
            >

                {/* About Block - Large */}
                <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-white/5 relative overflow-hidden group shadow-sm dark:shadow-none transition-colors min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">{t('about.aboutTitle')}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                        {t('about.aboutText')}
                    </p>
                </motion.div>

                {/* Tech Stack - Vertical */}
                <motion.div variants={item} className="md:col-span-1 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-white/5 flex flex-col justify-between shadow-sm dark:shadow-none transition-colors min-h-[300px]">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">{t('about.stackTitle')}</h3>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Socials / Links - Horizontal */}
                <div className="md:col-span-1 md:row-span-2 flex flex-col gap-4">
                    <motion.div variants={item} className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-200 dark:border-white/5 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer text-zinc-900 dark:text-white">
                        <a
                            href="https://www.linkedin.com/in/pravinwijay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-lg hover:underline"
                        >
                            LinkedIn ↗
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-200 dark:border-white/5 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer text-zinc-900 dark:text-white">
                        <a
                            href="https://youtu.be/oyWMgTLmzTI?si=eSprUxaP037e3agb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-lg hover:underline"
                        >
                            YouTube ↗
                        </a>
                    </motion.div>
                </div>

                {/* Experience Block */}
                <motion.div variants={item} className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-zinc-500" />
                        {t('about.experienceTitle')}
                    </h3>
                    <div className="space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8 relative">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative">
                                <span className={`absolute -left-[41px] top-1 p-2 rounded-full border-4 border-white dark:border-black ${exp.color} text-white`}>
                                    <exp.icon className="w-4 h-4" />
                                </span>
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{exp.title}</h4>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                    {exp.company}
                                </div>
                                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-2">
                                    {exp.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Block */}
                <motion.div variants={item} className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-zinc-500" />
                        {t('about.educationTitle')}
                    </h3>
                    <div className="space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8 relative">
                        {education.map((edu, i) => (
                            <div key={i} className="relative">
                                <span className={`absolute -left-[41px] top-1 p-2 rounded-full border-4 border-white dark:border-black bg-zinc-900 dark:bg-white text-white dark:text-black`}>
                                    <edu.icon className="w-4 h-4" />
                                </span>
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h4>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                    {edu.school}
                                </div>
                                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-2">
                                    {edu.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}
