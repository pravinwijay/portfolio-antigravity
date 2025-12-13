import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import dbConnect from '@/lib/db';
import Project from '@/models/Project';

// Force dynamic rendering to ensure fresh data if needed, or stick to static if preferred.
// For a portfolio, static with revalidation is good, but for simplicity let's do dynamic for now to reflect DB changes.
export const dynamic = 'force-dynamic';

async function getProjects() {
  try {
    await dbConnect();
    // Serialize to plain JSON/objects to avoid "Only plain objects can be passed to Client Components" warning
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />

        <section id="projects" className="py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Projets en Vedette</h2>
            <div className="h-1 w-20 bg-purple-600 rounded"></div>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>Aucun projet trouvé. (Vérifiez la connexion à la BD)</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, index: number) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="py-20 border-t border-gray-100 dark:border-gray-900">
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
