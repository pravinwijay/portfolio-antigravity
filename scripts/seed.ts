import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Skill from '../src/models/Skill';
import Project from '../src/models/Project';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const sampleSkills = [
    // Frontend
    { name: 'React / Next.js', category: 'Frontend', level: 95 },
    { name: 'TypeScript', category: 'Frontend', level: 90 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
    { name: 'Framer Motion', category: 'Frontend', level: 85 },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 80 },
    { name: 'MongoDB', category: 'Backend', level: 85 },
    { name: 'Python', category: 'Backend', level: 75 },

    // Tools
    { name: 'Git / GitHub', category: 'Outils', level: 90 },
    { name: 'Docker', category: 'Outils', level: 70 },
    { name: 'Figma', category: 'Design', level: 60 }
];

async function seed() {
    try {
        console.log('Connexion à MongoDB...');
        await mongoose.connect(MONGODB_URI!);

        // Clean up old projects if needed, or keeping them doesn't hurt, but user said "instead of projects".
        // Let's drop everything to be clean.
        console.log('Suppression des anciennes données...');

        // We try to drop both if they exist
        try { await Project.collection.drop(); } catch (e) { /* ignore */ }
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
