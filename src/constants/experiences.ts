import { Briefcase, GraduationCap, Building2, Landmark } from 'lucide-react'
import { SiCarrefour } from 'react-icons/si'
import { Experience, Education } from '@/types'

export const EXPERIENCES: Experience[] = [
    {
        title: "Développeur Fullstack - Alternance",
        company: "MAF Assurances",
        location: "Paris, 75017",
        date: "Depuis 09/2024",
        desc: [
            "Développement from scratch d'une application Angular & ASP.NET",
            "Méthode Agile, CI/CD avec Azure DevOps"
        ],
        type: "work",
        icon: Building2,
        color: "bg-blue-500"
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
        icon: Briefcase,
        color: "bg-indigo-500"
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
        icon: Landmark,
        color: "bg-green-600"
    },
    {
        title: "Employé Polyvalent - CDI temps partiel",
        company: "Carrefour",
        location: "Saint Maximin, 60740",
        date: "Depuis 01/2023",
        desc: [
            "Préparation de commandes",
            "Hôte de caisse"
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
        date: "Depuis 09/2024",
        details: "RNCP 39765 - Expert en Architecture et Développement Logiciel",
        stack: "Golang, Angular, Nest.js, Flutter, Rust, Micro Services, RabbitMQ/Kafka, GraphQL, AWS",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "Bachelor Développeur Web & Applications",
        school: "EFREI Paris",
        date: "01/2024 - 03/2024",
        details: "RNCP 39608 - Concepteur Développeur d'Application",
        stack: "React.JS, Vue.js, Symfony, Spring Boot, iOS Swift, Docker, Stack ELK, OWASP Secure Coding, Figma, UML",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "BTS Services Informatiques aux Organisations",
        school: "Lycée Jean Rostand Chantilly",
        date: "2021 - 2023",
        details: "Option SLAM (Solutions Logicielles et Applications Métiers)",
        stack: "Java, PHP, SQL, HTML/CSS, JavaScript, Git",
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    }
]
