'use client'

import { X } from 'lucide-react'

interface AboutModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-in fade-in zoom-in duration-300 border border-zinc-200 dark:border-zinc-800">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    <X size={20} className="text-zinc-500" />
                </button>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        I am a Senior Creative Developer passionate about building immersive web experiences.
                        Specializing in React, Three.js, and WebGL, I bridge the gap between design and engineering.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-2">
                        {['React', 'Three.js', 'Next.js', 'WebGL', 'TypeScript'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
