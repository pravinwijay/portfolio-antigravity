import { GraduationCap } from 'lucide-react'
import { SiCarrefour } from 'react-icons/si'
import { FaUtensils } from 'react-icons/fa6'
import { TbCrane } from 'react-icons/tb'
import { Experience, Education } from '@/types'

export function BnpParibasIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 128 128" fill="currentColor" className={className}>
            <path d="M21.8,122.4c-6-4.6-9.5-13.5-9.5-13.5C7.2,107,0,102.1,0,102.1s4.7-2.6,8.9-3.3c-1.5-8.7,0.5-20.5,0.5-20.5S10.8,89,16,97.2c6.4-1.3,11.8-1.8,11.8-1.8s-3.4,4.8-5.2,10.1c4,4,11.3,8.1,14.1,9.1c-6.1-0.3-13-1.5-15.6-2.5C21,115.8,21.1,119.7,21.8,122.4z M38.1,71.9c-3.5-7.4-5.8-17.1-5.8-17.1s-8.6,5.3-21.6,18c7.6-15,16.6-24.5,16.6-24.5s-3.4-3.4-15.6-4.5C23.5,39.6,36.5,41,36.5,41s5.8-4.9,15.4-7.7c0,0-2.5,3.4-4.4,8.7c13.7,1.5,26.4,9.5,26.4,9.5S52.8,48.2,43.8,51C40.6,58.7,38.8,67,38.1,71.9z M68.7,114.5c0.1,2.4,1,4.8,1,4.8s-1.9,0.2-7.1,0.4c-7.4,4.3-16.5,5.9-16.5,5.9s5.8-3.8,8.7-6.8c-4.6-0.7-8.7-2.8-8.7-2.8s7.8-0.5,13.5-1.9c2.7-2.7,7.7-9.8,7.7-9.8s0.3,4,0.8,6.6c6.6-3.2,12.1-7.3,12.1-7.3S75.3,109.6,68.7,114.5z M120.8,20.3c0.6,11.3-1.8,24.8-5.8,35.4c0-7-0.7-19.8-4.9-28.5c-3.3,2.3-11.8,6.5-23.7,12.6c1.8-1.8,9.7-11.2,12-15.2c-8.3,0.1-22.6,1.1-34.5,3.8c7.9-4.4,23.4-9.5,36-11.7C94.4,12,84.1,6.3,76.2,2.4c6.4,0.2,30.8,4.8,39.1,11.2c5.5-1.3,12.7-1.5,12.7-1.5C126.3,15.6,124,18.2,120.8,20.3z" />
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
        icon: "/images/projects/maf.png",
        color: "bg-white"
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
        title: "Mastère Dév. Manager Full Stack",
        rncp: "RNCP39765",
        school: "EFREI Paris",
        location: "Villejuif, 94000",
        date: "Depuis 09/2025",
        desc: [
            "Data Warehouse, Data Lake, ETL, Hadoop, Spark, Power BI",
            "Architecture Logicielle & Cloud, GraphQL, Microservices, RabbitMQ / Kafka, Golang"
        ],
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "Bachelor Développeur Web & Applications",
        rncp: "RNCP39608",
        school: "EFREI Paris",
        location: "Villejuif, 94000",
        date: "09/2024 – 07/2025",
        desc: [
            "Pipelines CI/CD, intégration de bases NoSQL",
            "Architecture MVC, POO, UX/UI, Java, React, Swift, Docker"
        ],
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    },
    {
        title: "BTS Services Informatiques aux Organisations",
        school: "Lycée Jean Rostand",
        location: "Chantilly, 60500",
        date: "2022 – 2024",
        desc: [
            "Option SLAM (Solutions Logicielles et Applications Métiers)",
            "Java, PHP, SQL, HTML/CSS, JavaScript, Git"
        ],
        type: "edu",
        icon: GraduationCap,
        color: "bg-zinc-900 dark:bg-white"
    }
]
