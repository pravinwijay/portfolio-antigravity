'use client'

import { motion } from 'framer-motion'
import { EXPERIENCES, EDUCATION } from '../../constants/experiences'

export function Experience() {
    const WorkIcon = EXPERIENCES[0].icon
    const EduIcon = EDUCATION[0].icon

    return (
        <section className="px-6 lg:px-24 py-20 bg-white dark:bg-black transition-colors">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-16">Parcours</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Work Experience */}
                <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                        <WorkIcon className="w-6 h-6 text-zinc-500" />
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
                        <EduIcon className="w-6 h-6 text-zinc-500" />
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
