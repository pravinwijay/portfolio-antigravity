import { SiDassaultsystemes, SiFigma, SiBlender, SiAffinitydesigner, SiDavinciresolve } from 'react-icons/si'
import { Tool } from '@/types'

export const TOOLS: Tool[] = [
    { name: "SolidWorks", icon: SiDassaultsystemes, color: "hover:text-red-500" },
    { name: "Figma", icon: SiFigma, color: "hover:text-purple-500" },
    { name: "Blender", icon: SiBlender, color: "hover:text-orange-500" },
    { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "hover:text-blue-500" },
    { name: "Affinity", icon: "/images/projects/affinity.png", color: "hover:text-blue-500" },
]
