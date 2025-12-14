'use client';

import { motion } from 'framer-motion';

interface SkillProps {
    skill: {
        _id: string;
        name: string;
        category: string;
        level: number;
        icon?: string;
        learnedAt?: string;
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
            whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-100 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl transition-all relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col items-start mb-4 relative z-10">
                <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">{skill.name}</h3>
                {skill.learnedAt && (
                    <span className="mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                        {skill.learnedAt}
                    </span>
                )}
            </div>

            <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden relative z-10">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
            </div>

            <p className="text-xs text-gray-500 mt-3 uppercase tracking-wider relative z-10">{skill.category}</p>
        </motion.div>
    );
}
