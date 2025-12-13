import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Project from '../src/models/Project';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const sampleProjects = [
    {
        title: 'E-commerce Moderne',
        description: 'Une plateforme e-commerce full-stack construite avec Next.js, Stripe et Sanity CMS. Inclut la gestion des stocks en temps réel et un design responsive.',
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
        link: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Tableau de Bord IA',
        description: "Tableau de bord d'analytique propulsé par l'IA. Visualise les tendances des données et fournit des insights prédictifs utilisant des modèles de Machine Learning.",
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tags: ['React', 'Python', 'D3.js', 'AWS'],
        link: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Réseau Social',
        description: 'Une application de réseau social en temps réel avec publications, commentaires et chat en direct. Conçu pour la scalabilité.',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        tags: ['Vue.js', 'Firebase', 'Node.js', 'Socket.io'],
        link: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Portfolio V1',
        description: 'Mon ancien site portfolio montrant mes premiers travaux. Design simple et épuré avec HTML/CSS.',
        imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com',
        githubLink: 'https://github.com',
    }
];

async function seed() {
    try {
        console.log('Connexion à MongoDB...');
        await mongoose.connect(MONGODB_URI!);
        console.log('Connecté.');

        console.log('Suppression des projets existants...');
        await Project.deleteMany({});

        console.log('Ajout des nouveaux projets (Français)...');
        await Project.insertMany(sampleProjects);

        console.log('Base de données peuplée avec succès !');
        process.exit(0);
    } catch (error) {
        console.error('Erreur lors du peuplement de la BD:', error);
        process.exit(1);
    }
}

seed();
