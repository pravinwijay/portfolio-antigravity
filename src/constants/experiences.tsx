import { GraduationCap } from 'lucide-react'
import { SiCarrefour } from 'react-icons/si'
import { FaUtensils } from 'react-icons/fa6'
import { TbCrane } from 'react-icons/tb'
import { Experience, Education } from '@/types'

export function BnpParibasIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
            <path d="M 12,78 C 22,52 44,36 78,24 C 66,30 50,42 40,55 C 31,66 22,74 12,78 Z" />
            <path d="M 26,64 C 34,43 52,30 81,20 C 70,25 56,36 47,48 C 39,56 31,62 26,64 Z" />
            <path d="M 40,50 C 46,34 60,24 84,17 C 74,21 62,30 54,40 C 47,47 42,51 40,50 Z" />
            <path d="M 54,36 C 58,25 68,18 87,14 C 79,17 68,24 62,31 C 57,36 55,39 54,36 Z" />
        </svg>
    )
}

export const EXPERIENCES: Experience[] = [
    {
        title: "Développeur Fullstack - Alternance",
        company: "MAF Assurances",
        location: "Paris, 75017",
        date: "Depuis 09/2024",
        desc: [
            "Développement from scratch d’une application Angular & ASP.NET",
            "Création d’un Batch et mise à jour de la BDD",
            "CI/CD avec Azure DevOps"
        ],
        type: "work",
        icon: TbCrane,
        color: "bg-[#0055A5]"
    },
    {
        title: "Développeur Backend - Stage",
        company: "FedHubs",
        location: "Créteil, 94000",
        date: "01/2024 - 03/2024",
        desc: [
            "Développement en Laravel sur le backend du projet",
            "Tests unitaires, optimisation des requêtes SQL (MySQL), documentation des API"
        ],
        type: "work",
        icon: FaUtensils,
        color: "bg-indigo-600"
    },
    {
        title: "Administrateur SharePoint - Stage",
        company: "BNP Paribas",
        location: "Paris, 75019",
        date: "06/2023 - 07/2023",
        desc: [
            "Administration du SharePoint (transfert de données, gestion des accès)",
            "Réalisation d'un site statique (HTML & JavaScript) filtrant les données d'un fichier .xlsx"
        ],
        type: "work",
        icon: BnpParibasIcon,
        color: "bg-[#00965E]"
    },
    {
        title: "Employé Polyvalent - CDI temps partiel",
        company: "Carrefour",
        location: "Saint Maximin, 60740",
        date: "Depuis 01/2023",
        desc: [
            "Préparation de commandes pour le service Drive",
            "Hôte de caisse",
            "Relation client"
        ],
        type: "work",
        icon: SiCarrefour,
        color: "bg-blue-400"
    }
]

export const EDUCATION: Education[] = [
    {
        title: "Mastère Dev. Manager Fullstack",
        school: "EFREI Paris",
        date: "Depuis 09/2025",
        details: "RNCP 39765 - Expert en Architecture et Développement Logiciel",
        stack: "Golang, Angular, Nest.js, Flutter, Rust, Micro Services, RabbitMQ/Kafka, GraphQL, AWS",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "Bachelor Développeur Web & Applications",
        school: "EFREI Paris",
        date: "2024 - 2025",
        details: "RNCP 39608 - Concepteur Développeur d'Application",
        stack: "React.JS, Vue.js, Symfony, Spring Boot, iOS Swift, Docker, Stack ELK, OWASP Secure Coding, Figma, UML",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "BTS Services Informatiques aux Organisations",
        school: "Lycée Jean Rostand Chantilly",
        date: "2022 - 2024",
        details: "Option SLAM (Solutions Logicielles et Applications Métiers)",
        stack: "Java, PHP, SQL, HTML/CSS, JavaScript, Git",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    }
]
