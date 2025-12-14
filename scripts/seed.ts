import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Skill from '../src/models/Skill';


dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const sampleSkills = [
    // Frontend
    { name: 'React / Next.js', category: 'Frontend', level: 95, learnedAt: 'Autodidacte' },
    { name: 'TypeScript', category: 'Frontend', level: 90, learnedAt: 'Projet Professionnel' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 95, learnedAt: 'Autodidacte' },
    { name: 'Framer Motion', category: 'Frontend', level: 85, learnedAt: 'Projet Personnel' },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 80, learnedAt: 'Formation en Ligne' },
    { name: 'MongoDB', category: 'Backend', level: 85, learnedAt: 'Projet Professionnel' },
    { name: 'Python', category: 'Backend', level: 75, learnedAt: 'Université' },

    // Tools
    { name: 'Git / GitHub', category: 'Outils', level: 90, learnedAt: 'Quotidien' },
    { name: 'Docker', category: 'Outils', level: 70, learnedAt: 'Formation' },
    { name: 'Figma', category: 'Design', level: 60, learnedAt: 'Autodidacte' }
];

async function seed() {
    try {
        console.log('Connexion à MongoDB...');
        await mongoose.connect(MONGODB_URI!);

        // Clean up old projects if needed, or keeping them doesn't hurt, but user said "instead of projects".
        // Let's drop everything to be clean.
        console.log('Suppression des anciennes données...');

        // We try to drop if it exists
        try { await Skill.collection.drop(); } catch (e) { /* ignore */ }

        console.log('Ajout des compétences...');
        await Skill.insertMany(sampleSkills);

        console.log('Compétences ajoutées avec succès !');
        process.exit(0);
    } catch (error) {
        console.error('Erreur lors du seed:', error);
        process.exit(1);
    }
}

seed();
