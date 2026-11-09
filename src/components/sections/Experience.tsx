'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react'
import { EXPERIENCES, EDUCATION } from '../../constants/experiences'
import { getImagePath } from '../../utils/basePath'

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

export function Experience() {
    const EduIcon = EDUCATION[0].icon
    const [openExp, setOpenExp] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });

    const toggleExp = (index: number) => {
        setOpenExp(prev => ({ ...prev, [index]: !prev[index] }));
    };

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
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <span className={`absolute -left-[41px] top-1 ${exp.company === 'MAF Assurances' ? 'p-0.5' : 'p-2'} rounded-full border-4 border-white dark:border-black ${exp.color} text-white z-10 w-9 h-9 flex items-center justify-center overflow-hidden`}>
                                    {typeof exp.icon === 'string' ? (
                                        <img
                                            src={getImagePath(exp.icon)}
                                            alt={exp.company}
                                            className={`w-full h-full object-contain ${exp.company === 'MAF Assurances' ? 'scale-125' : ''}`}
                                        />
                                    ) : (
                                        <exp.icon className="w-4 h-4" />
                                    )}
                                </span>
                                <div
                                    onClick={() => toggleExp(i)}
                                    className="flex items-start justify-between cursor-pointer select-none group hover:opacity-90 transition-opacity"
                                >
                                    <div>
                                        <h4 className="text-lg text-zinc-900 dark:text-white flex items-center gap-1.5 flex-wrap">
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
                                        <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-2">
                                            {exp.company} - <span className="text-xs">{exp.location}</span>
                                        </div>
                                        <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-3">
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
                                            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm mt-2 border-l-2 border-zinc-200 dark:border-zinc-800 pl-3">
                                                {exp.desc.map((d, j) => (
                                                    <li key={j} className="flex items-start gap-1.5">
                                                        <span className="text-zinc-400 font-bold select-none">•</span>
                                                        <span className="leading-relaxed">{renderHighlightedText(d)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
                        {EDUCATION.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <span className={`absolute -left-[41px] top-1 p-2 rounded-full border-4 border-white dark:border-black bg-zinc-900 dark:bg-white text-white dark:text-black w-9 h-9 flex items-center justify-center overflow-hidden`}>
                                    {typeof edu.icon === 'string' ? (
                                        <img
                                            src={getImagePath(edu.icon)}
                                            alt={edu.school}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <edu.icon className="w-4 h-4" />
                                    )}
                                </span>
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                                    <span>{edu.title}</span>
                                    {edu.rncp && (
                                        <>
                                            <span className="text-zinc-400 dark:text-zinc-500 font-normal">|</span>
                                            <span className="font-bold text-blue-600 dark:text-blue-400">{edu.rncp}</span>
                                        </>
                                    )}
                                </h4>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                                    {edu.school} {edu.location && <>- <span className="text-xs">{edu.location}</span></>}
                                </div>
                                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs rounded mb-3">
                                    {edu.date}
                                </span>
                                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm mt-2 border-l-2 border-zinc-200 dark:border-zinc-800 pl-3">
                                    {edu.desc.map((d, j) => (
                                        <li key={j} className="flex items-start gap-1.5">
                                            <span className="text-zinc-400 font-bold select-none">•</span>
                                            <span className="leading-relaxed">{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
