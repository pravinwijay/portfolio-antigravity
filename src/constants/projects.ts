import { Project } from '@/types'

export const PROJECTS: Project[] = [
    {
        title: "PW Cakes",
        description: "Application e-commerce moderne pour une pâtisserie, créé avec React.",
        tags: ["React", "Vite", "Tailwind"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/pwcakes-react" },
        image: "/images/projects/pw-cakes.png"
    },
    {
        title: "MySpotify",
        description: "Un clone de l'interface Spotify pour explorer les fonctionnalités de Next.js.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/spotify" },
        image: "/images/projects/spotify-clone.png"
    },
    {
        title: "Design Patterns JEE",
        description: "Projet de gestion de collection Pokémon utilisant les technologies Java EE.",
        tags: ["Java", "JEE", "MySQL"],
        links: { demo: "#", repo: "https://github.com/pravinwijay/pokemon-jee" },
        image: "/images/projects/pokemon-jee.png"
    }
]
