export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black text-center relative z-20">
            <div className="container mx-auto px-4">
                <p className="text-gray-500 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Agency Infrastructure. All rights reserved.
                </p>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
