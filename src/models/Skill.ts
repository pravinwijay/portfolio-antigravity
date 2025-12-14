import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
    name: string;
    category: string;
    level: number; // 0 to 100
    icon?: string; // Optional icon name
    learnedAt?: string; // e.g. "Self-taught", "University", "Bootcamp"
}

const SkillSchema: Schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'Frontend', 'Backend', 'Tools'
    level: { type: Number, required: true, min: 0, max: 100 },
    icon: { type: String },
    learnedAt: { type: String },
});

export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);
