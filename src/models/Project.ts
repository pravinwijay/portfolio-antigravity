import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
    githubLink?: string;
    createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // URL to image
    tags: { type: [String], default: [] },
    link: { type: String, required: true }, // Live demo
    githubLink: { type: String }, // Optional GitHub repo
    createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling model on hot reload
export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
