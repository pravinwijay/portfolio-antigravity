import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Project from '../src/models/Project';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function verify() {
    try {
        await mongoose.connect(MONGODB_URI!);
        const count = await Project.countDocuments();
        console.log(`Found ${count} projects in the database.`);
        const first = await Project.findOne();
        if (first) console.log(`First project: ${first.title}`);
        process.exit(0);
    } catch (error) {
        console.error('Error verifying database:', error);
        process.exit(1);
    }
}

verify();
