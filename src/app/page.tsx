import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';
import Footer from '@/components/Footer';
import BackgroundDecor from '@/components/BackgroundDecor';
import dbConnect from '@/lib/db';
import Skill from '@/models/Skill';

// Force dynamic rendering to ensure fresh data if needed, or stick to static if preferred.
export const dynamic = 'force-dynamic';

async function getSkills() {
  try {
    await dbConnect();
    // Serialize to plain JSON/objects
    const skills = await Skill.find({}).sort({ level: -1 }).lean();
    return JSON.parse(JSON.stringify(skills));
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return [];
  }
}

export default async function Home() {
  const skills = await getSkills();

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundDecor />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <Hero />

        <section id="competences" className="py-20"> {/* Mismatch fixed: ID is now 'competences' to match navbar link */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Compétences</h2>
            <div className="h-1 w-20 bg-purple-600 rounded"></div>
          </div>

          {skills.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>Aucune compétence trouvée. (Vérifiez la connexion à la BD)</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill: any, index: number) => (
                <SkillCard key={skill._id} skill={skill} index={index} />
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="py-20 border-t border-gray-100 dark:border-gray-900/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Me Contacter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !
            </p>
            <a href="mailto:hello@example.com" className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Dire Bonjour
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
