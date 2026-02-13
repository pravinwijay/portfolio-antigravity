'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const LANGUAGES = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'vi', label: 'VI' },
        { code: 'ta', label: 'TA' },
        { code: 'zh', label: 'ZH' },
        { code: 'ar', label: 'AR' },
        { code: 'th', label: 'TH' },
    ] as const

    const currentLabel = LANGUAGES.find(l => l.code === language)?.label || 'FR'

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-xs w-10 h-10 flex items-center justify-center"
                aria-label="Current Language"
            >
                {currentLabel}
            </button>

            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, y: 0, pointerEvents: "auto", display: "block" },
                    closed: { opacity: 0, y: -10, pointerEvents: "none", transitionEnd: { display: "none" } }
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2"
            >
                <div className="flex flex-col gap-2 rounded-2xl p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-lg min-w-[50px] items-center">
                    {LANGUAGES.filter(l => l.code !== language).map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code)
                                setIsOpen(false)
                            }}
                            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium text-xs w-full flex items-center justify-center"
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
