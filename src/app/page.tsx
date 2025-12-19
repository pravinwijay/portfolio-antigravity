'use client'

import { Hero } from '../components/Hero'
import { BentoGrid } from '../components/BentoGrid'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { SoftwareTools } from '../components/SoftwareTools'
import { Experience } from '../components/Experience'
import { ModeToggle } from '../components/ThemeToggle'
import { CharacterAvatar } from '../components/CharacterAvatar'

import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

// Separate Footer component to use hook
function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-white/10 text-center text-zinc-500 dark:text-zinc-600 text-sm bg-white dark:bg-black transition-colors">
      © {new Date().getFullYear()} Pravin Wijaya. {t('footer.text')}
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300 selection:bg-black/10 dark:selection:bg-white/20">
      <div className="absolute top-6 right-6 z-[60] flex gap-2">
        <LanguageToggle />
        <ModeToggle />
      </div>
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-multiply dark:mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <Hero />
      <BentoGrid />
      <ProjectShowcase />
      <SoftwareTools />

      <Footer />
    </main>
  )
}
