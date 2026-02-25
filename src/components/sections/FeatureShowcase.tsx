'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '../../constants/projects'
import { useLanguage } from '../../context/LanguageContext'
import { ArrowUpRight, Github } from 'lucide-react'

export function FeatureShowcase() {
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Map scroll progress to active index
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.floor(latest * PROJECTS.length)
            setActiveIndex(Math.min(index, PROJECTS.length - 1))
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <section
            ref={containerRef}
            className="relative lg:h-[300vh] bg-white dark:bg-black py-20 lg:py-0"
        >
            <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col lg:items-center">

                {/* Right Column: Preview (Absolute positioned to right for cut-off effect) */}
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[70vh] z-0">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
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
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-left-top"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Preview (Inline - disabled as image is moved to list) */}
                {/* 
                <div className="lg:hidden absolute top-24 left-0 right-0 h-64 px-6 z-0">
                    ...
                </div> 
                */}

                {/* Left Column: List (In Container) */}
                <div className="w-full px-6 lg:px-24 h-full flex flex-col lg:pointer-events-none lg:pt-20">
                    <div className="w-full lg:w-[40%] pointer-events-auto z-10 lg:mt-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-zinc-900 dark:text-white mb-12"
                        >
                            {t('projects.title')}
                        </motion.h2>

                        <div className="flex flex-col gap-16 lg:gap-8">
                            {PROJECTS.map((project, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 lg:pl-6 cursor-pointer lg:border-l-4
                                        ${activeIndex === index
                                            ? 'lg:border-indigo-500 lg:opacity-100'
                                            : 'lg:border-zinc-200 dark:lg:border-zinc-800 lg:opacity-40 hover:opacity-70'
                                        }`}
                                    onClick={() => {
                                        // Optional interaction
                                    }}
                                >
                                    {/* Mobile Image (Only visible on small screens) */}
                                    <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden mb-6 relative border border-zinc-200 dark:border-white/10">
                                        <Image
                                            src={project.image}
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
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                                            >
                                                {t('projects.liveDemo')} <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                            >
                                                {t('projects.viewCode')} <Github className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
