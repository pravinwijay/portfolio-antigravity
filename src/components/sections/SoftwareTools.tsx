'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
// Using Adobe Premiere icon as proxy for DaVinci Resolve if specific not available
import { useLanguage } from '../../context/LanguageContext'
import { getImagePath } from '../../utils/basePath'
import { TOOLS } from '../../constants/tools'

export function SoftwareTools() {
    const { t } = useLanguage()

    return (
        <section className="px-6 lg:px-24 py-20 bg-gray-50 dark:bg-zinc-950 transition-colors border-t border-zinc-200 dark:border-white/5">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">{t('tools.title')}</h2>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 max-w-5xl mx-auto">

                {TOOLS.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex flex-col items-center gap-4 group cursor-pointer`}
                    >
                        {typeof tool.icon === 'string' ? (
                            <div className="relative w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={getImagePath(tool.icon)}
                                    alt={tool.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <tool.icon className={`text-5xl md:text-6xl text-zinc-400 dark:text-zinc-600 transition-colors duration-300 ${tool.color}`} />
                        )}
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                            {tool.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
