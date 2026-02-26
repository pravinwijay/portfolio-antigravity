'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
    const { t } = useLanguage()

    return (
        <section className="h-[70vh] flex flex-col justify-center px-6 lg:px-24 pt-32 pb-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 max-w-4xl"
            >
                <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white/90 transition-colors">
                    {t('hero.title1')} <br className="hidden md:block" /> {t('hero.title2')}
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-white/60 max-w-2xl leading-relaxed transition-colors">
                    {t('hero.subtitle')}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <motion.a
                        href="https://github.com/pravinwijay"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium text-lg hover:bg-zinc-800 dark:hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                    >
                        {t('hero.ctaGithub')}
                    </motion.a>
                    <motion.a
                        href="mailto:pravinwijay@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-zinc-200 dark:border-white/20 rounded-lg font-medium text-lg text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
                    >
                        {t('hero.ctaContact')}
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
