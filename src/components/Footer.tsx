export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
