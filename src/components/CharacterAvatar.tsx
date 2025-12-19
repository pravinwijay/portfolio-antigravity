'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function CharacterAvatar() {
    return (
        <div className="flex justify-center -mb-20 z-10 relative pointer-events-none">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-64 h-64"
            >
                <Image
                    src="/avatar.png"
                    alt="Avatar"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </motion.div>
        </div>
    )
}
