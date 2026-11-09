'use client'

import { useState } from 'react'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'
import { PiBoxingGlove } from 'react-icons/pi'
import { FaCamera } from 'react-icons/fa6'
import { LuLibrary } from 'react-icons/lu'
import { useLanguage } from '../../context/LanguageContext'
import { getImagePath } from '../../utils/basePath'
import { TOOLS } from '../../constants/tools'

type Tab = 'dev' | 'offline'

export function SoftwareTools() {
    const { t } = useLanguage()
    const [activeTab, setActiveTab] = useState<Tab>('dev')

    const hobbies = [
        { name: 'Muay Thai', icon: PiBoxingGlove, color: 'hover:text-red-500' },
        { name: 'Street Photography', icon: FaCamera, color: 'hover:text-sky-500' },
        { name: t('tools.reading'), icon: LuLibrary, color: 'hover:text-emerald-500' },
    ]

    const tabClass = (tab: Tab) =>
        `text-2xl md:text-3xl transition-colors cursor-pointer text-left ${
            activeTab === tab
                ? 'font-bold text-zinc-900 dark:text-white'
                : 'font-medium text-zinc-400 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400'
        }`

    return (
        <section className="px-5 sm:px-6 lg:px-24 py-16 md:py-20 bg-gray-50 dark:bg-zinc-950 transition-colors border-t border-zinc-200 dark:border-white/5">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-12">
                <button
                    type="button"
                    onClick={() => setActiveTab('dev')}
                    aria-pressed={activeTab === 'dev'}
                    className={tabClass('dev')}
                >
                    {t('tools.title')}
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('offline')}
                    aria-pressed={activeTab === 'offline'}
                    className={tabClass('offline')}
                >
                    {t('tools.offlineTitle')}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'dev' ? (
                    <motion.div
                        key="dev"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-20 max-w-5xl mx-auto"
                    >
                        {TOOLS.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex flex-col items-center gap-4 group cursor-pointer"
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
                    </motion.div>
                ) : (
                    <motion.div
                        key="offline"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-20 max-w-5xl mx-auto"
                    >
                        {hobbies.map((hobby, i) => (
                            <motion.div
                                key={hobby.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex flex-col items-center gap-4 group cursor-pointer"
                            >
                                <hobby.icon className={`text-5xl md:text-6xl text-zinc-400 dark:text-zinc-600 transition-colors duration-300 ${hobby.color}`} />
                                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                                    {hobby.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
