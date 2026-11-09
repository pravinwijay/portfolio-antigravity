'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '../../utils/basePath'
import { PROJECTS } from '../../constants/projects'
import { useLanguage } from '../../context/LanguageContext'
import { ArrowUpRight, Github, Database } from 'lucide-react'
import { ParticleGalaxy } from '../ui/ParticleGalaxy'

export function FeatureShowcase() {
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeProjectTab, setActiveProjectTab] = useState<'data' | 'dev'>('data')
    const [activeIndex, setActiveIndex] = useState(0)
    const [showDemoModal, setShowDemoModal] = useState(false)

    const filteredProjects = PROJECTS.filter(p => (p.category ?? 'dev') === activeProjectTab)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Reset activeIndex when switching tabs
    useEffect(() => {
        setActiveIndex(0)
    }, [activeProjectTab])

    // Map scroll progress to active index when multiple projects exist
    useEffect(() => {
        if (filteredProjects.length <= 1) return;
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.floor(latest * filteredProjects.length)
            setActiveIndex(Math.min(Math.max(index, 0), filteredProjects.length - 1))
        })
        return () => unsubscribe()
    }, [scrollYProgress, filteredProjects.length])

    const scrollToProject = (index: number) => {
        setActiveIndex(index);
        if (!containerRef.current || filteredProjects.length <= 1) return;

        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        if (isDesktop) {
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const startScrollY = window.scrollY + rect.top;
            const scrollableDistance = rect.height - window.innerHeight;

            if (scrollableDistance > 0) {
                const targetProgress = (index / filteredProjects.length) + (0.05 / filteredProjects.length);
                const targetScrollY = startScrollY + (scrollableDistance * targetProgress);

                window.scrollTo({
                    top: targetScrollY,
                    behavior: 'smooth'
                });
            }
        } else {
            const element = document.getElementById(`project-${index}`);
            if (element) {
                const navOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    return (
        <section
            ref={containerRef}
            className={`relative ${filteredProjects.length > 1 ? 'lg:h-[300vh]' : 'lg:min-h-screen'} bg-white dark:bg-black py-20 lg:py-0`}
        >
            <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col lg:items-center">

                {/* Right Column: Preview (Absolute positioned to right for cut-off effect) */}
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[70vh] z-0">

                    {/* Antigravity Particle Galaxy Effect */}
                    <div className="absolute inset-0 -ml-[10vw] pr-[10vw] -my-[10vh] z-0 pointer-events-none opacity-60 dark:opacity-100">
                        <ParticleGalaxy />
                    </div>

                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${activeProjectTab}-${index}`}
                                className="absolute inset-0 w-full h-full pl-12"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    x: activeIndex === index ? 0 : 100,
                                    zIndex: activeIndex === index ? 10 : 0
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="relative w-full h-full rounded-l-3xl overflow-hidden shadow-2xl border-l border-t border-b border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900">
                                    <Image
                                        src={getImagePath(project.image)}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-left-top"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            key="data-coming-soon-preview"
                            className="absolute inset-0 w-full h-full pl-12"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="relative w-full h-full rounded-l-3xl overflow-hidden shadow-2xl border-l border-t border-b border-zinc-200 dark:border-white/10 bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center">
                                <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                                    <Database className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                                    Projets Data en cours de préparation
                                </h4>
                                <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-6">
                                    Des projets autour de l&apos;ingénierie de données, pipelines ETL et visualisation arrivent très prochainement.
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["Python", "Spark", "Power BI", "Hadoop", "SQL"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-zinc-200/70 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Left Column: List (In Container) */}
                <div className="w-full px-6 lg:px-24 h-full flex flex-col lg:pointer-events-none lg:pt-16">
                    <div className="w-full lg:w-[40%] pointer-events-auto z-10 lg:mt-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-zinc-900 dark:text-white mb-6"
                        >
                            {t('projects.title')}
                        </motion.h2>

                        {/* Browser Window Header & Tabs for Projects */}
                        <div className="mb-8 max-w-md">
                            <div className="bg-zinc-100 dark:bg-zinc-800/80 rounded-t-2xl pt-2 px-3 flex items-center gap-3 border-t border-x border-zinc-200/80 dark:border-white/10">
                                <div className="flex items-center gap-1.5 px-1 pb-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                                </div>
                                <div className="flex flex-1 gap-1">
                                    <button
                                        type="button"
                                        onClick={() => setActiveProjectTab('data')}
                                        className={`flex-1 py-2 px-4 text-xs font-bold tracking-wider rounded-t-xl transition-all cursor-pointer select-none ${
                                            activeProjectTab === 'data'
                                                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                                                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-white/40 dark:hover:bg-zinc-700/40'
                                        }`}
                                    >
                                        DATA
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveProjectTab('dev')}
                                        className={`flex-1 py-2 px-4 text-xs font-bold tracking-wider rounded-t-xl transition-all cursor-pointer select-none ${
                                            activeProjectTab === 'dev'
                                                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                                                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-white/40 dark:hover:bg-zinc-700/40'
                                        }`}
                                    >
                                        DEV
                                    </button>
                                </div>
                            </div>
                            <div className="h-1 bg-white dark:bg-zinc-900 border-x border-b border-zinc-200/80 dark:border-white/10 rounded-b-lg" />
                        </div>

                        <AnimatePresence mode="wait">
                            {filteredProjects.length > 0 ? (
                                <motion.div
                                    key={activeProjectTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex flex-col gap-16 lg:gap-8"
                                >
                                    {filteredProjects.map((project, index) => (
                                        <div
                                            key={project.title}
                                            id={`project-${index}`}
                                            className={`transition-all duration-500 lg:pl-6 cursor-pointer lg:border-l-4
                                                ${activeIndex === index
                                                    ? 'lg:border-indigo-500 lg:opacity-100'
                                                    : 'lg:border-zinc-200 dark:lg:border-zinc-800 lg:opacity-40 hover:opacity-70'
                                                }`}
                                            onClick={() => scrollToProject(index)}
                                        >
                                            {/* Mobile Image (Only visible on small screens) */}
                                            <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden mb-6 relative border border-zinc-200 dark:border-white/10">
                                                <Image
                                                    src={getImagePath(project.image)}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <h3 className={`text-2xl lg:text-3xl font-bold mb-3 transition-colors ${activeIndex === index ? 'text-zinc-900 dark:text-white' : 'lg:text-zinc-500 text-zinc-900 dark:text-white'}`}>
                                                {project.title}
                                            </h3>

                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'lg:max-h-80 lg:opacity-100 lg:mt-4' : 'lg:max-h-0 lg:opacity-0'} max-h-none opacity-100 mt-4`}>
                                                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed max-w-md">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-6">
                                                    {project.links.demo === "#" ? (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setShowDemoModal(true);
                                                            }}
                                                            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                                                        >
                                                            {t('projects.liveDemo')} <ArrowUpRight className="w-4 h-4" />
                                                        </button>
                                                    ) : (
                                                        <a
                                                            href={project.links.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                                                        >
                                                            {t('projects.liveDemo')} <ArrowUpRight className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    <a
                                                        href={project.links.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                                    >
                                                        {t('projects.viewCode')} <Github className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="data-empty"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                    className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 max-w-md"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                            <Database className="w-5 h-5" />
                                        </span>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                            {t('projects.notDeployedTitle')}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-base mb-5 leading-relaxed">
                                        Mes projets Data (Python, Spark, Power BI, Hadoop, SQL) seront ajoutés ici très prochainement.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setActiveProjectTab('dev')}
                                        className="px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                                    >
                                        Découvrir les projets DEV →
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>

            <AnimatePresence>
                {showDemoModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowDemoModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-zinc-200 dark:border-zinc-800 text-center relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                                {t('projects.notDeployedTitle')}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                {t('projects.notDeployedDesc')}
                            </p>
                            <button
                                onClick={() => setShowDemoModal(false)}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
                            >
                                {t('projects.notDeployedBtn')}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
