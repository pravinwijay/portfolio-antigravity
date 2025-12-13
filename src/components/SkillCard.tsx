'use client';

import { motion } from 'framer-motion';

interface SkillProps {
    skill: {
        _id: string;
        name: string;
        category: string;
        level: number;
        icon?: string;
    };
    index: number;
}

export default function SkillCard({ skill, index }: SkillProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-100 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                />
            </div>

            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{skill.category}</p>
        </motion.div>
    );
}
