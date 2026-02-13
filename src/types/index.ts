import { IconType } from 'react-icons'
import { LucideIcon } from 'lucide-react'

export interface Experience {
    title: string
    company: string
    location: string
    date: string
    desc: string[]
    type: 'work'
    icon: IconType | LucideIcon
    color: string
}

export interface Education {
    title: string
    school: string
    date: string
    details: string
    stack: string
    type: 'edu'
    icon: IconType | LucideIcon
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
}

export interface Tool {
    name: string
    icon: IconType | LucideIcon | string
    color: string
}
