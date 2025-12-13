'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectProps {
    project: {
        _id: string;
        title: string;
        description: string;
        imageUrl: string;
        tags: string[];
        link: string;
        githubLink?: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-shadow"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <ExternalLink size={20} />
                    </a>
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
