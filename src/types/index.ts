import { IconType } from 'react-icons'
import { LucideIcon } from 'lucide-react'

export interface Experience {
    title: string
    company: string
    location: string
    date: string
    desc: string[]
    type: 'work'
    icon: IconType | LucideIcon | string
    color: string
}

export interface Education {
    title: string
    rncp?: string
    school: string
    location?: string
    date: string
    details?: string
    desc: string[]
    stack?: string
    type: 'edu'
    icon: IconType | LucideIcon | string
    color: string
}

export interface Project {
    title: string
    description: string
    tags: string[]
    links: {
        demo: string
        repo: string
    }
    image: string
    category?: 'data' | 'dev'
    comingSoon?: boolean
}

export interface Tool {
    name: string
    icon: IconType | LucideIcon | string
    color: string
}
