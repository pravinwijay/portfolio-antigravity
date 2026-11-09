'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { ParticleGalaxy } from '../ui/ParticleGalaxy'
import { SiDiscord } from 'react-icons/si'

export function Hero() {
    const { t } = useLanguage()

    return (
        <section className="min-h-[70svh] flex flex-col justify-center px-5 sm:px-6 lg:px-24 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-80 pointer-events-none">
                <ParticleGalaxy />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 max-w-4xl relative z-10"
            >
                <h1 className="text-[1.65rem] min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white/90 transition-colors break-words">
                    {t('hero.title1')} <br className="hidden md:block" /> {t('hero.title2')}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-zinc-600 dark:text-white/60 max-w-2xl leading-relaxed transition-colors">
                    {t('hero.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                        href="https://github.com/pravinwijay"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium text-lg hover:bg-zinc-800 dark:hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                    >
                        {t('hero.ctaGithub')}
                    </motion.a>
                    <div className="flex gap-4 w-full sm:w-auto">
                        <motion.a
                            href="mailto:pravinwijay@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-zinc-200 dark:border-white/20 rounded-lg font-medium text-lg text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors flex-1 sm:flex-initial sm:px-6 text-center"
                        >
                            {t('hero.ctaContact')}
                        </motion.a>
                        <motion.a
                            href="https://discord.com/users/praviin93"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[52px] w-[52px] flex items-center justify-center border border-zinc-200 dark:border-white/20 rounded-lg text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors shrink-0"
                            title="Discord: praviin93"
                        >
                            <SiDiscord className="w-6 h-6" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
