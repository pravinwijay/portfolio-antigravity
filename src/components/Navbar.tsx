'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <header className="fixed top-0 inset-x-0 h-16 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/10 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Portfolio
                    </Link>
                </motion.div>

                <nav className="flex gap-6">
                    {['Compétences', 'Contact'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <Link
                                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </header>
    );
}
