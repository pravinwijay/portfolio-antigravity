'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: "pw-cakes react",
        description: "Application e-commerce moderne pour une pâtisserie, créé avec React.",
        tags: ["React", "Vite", "Tailwind"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/pwcakes-react" },
        image: "/images/projects/pw-cakes.png"
    },
    {
        title: "my-spotify",
        description: "Un clone de l'interface Spotify pour explorer les fonctionnalités de Next.js.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/spotify" },
        image: "/images/projects/spotify-clone.png"
    },
    {
        title: "pokemon jee",
        description: "Projet de gestion de collection Pokémon utilisant les technologies Java EE.",
        tags: ["Java", "JEE", "MySQL"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/pokemon-jee" },
        image: "/images/projects/pokemon-jee.png"
    }
]

import { useLanguage } from '../context/LanguageContext'

export function ProjectShowcase() {
    const { t } = useLanguage()

    return (
        <section className="px-6 lg:px-24 py-20 transition-colors bg-white dark:bg-black">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">{t('projects.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none"
                    >
                        <div className="h-48 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm font-medium">
                                <a href={project.links.demo} className="text-zinc-900 dark:text-white hover:underline">{t('projects.liveDemo')}</a>
                                <a href={project.links.repo} className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300">{t('projects.viewCode')}</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
