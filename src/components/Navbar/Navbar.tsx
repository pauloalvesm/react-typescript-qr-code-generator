import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md font-medium transition ${pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-100"
        }`;

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-700">
                    QR Code App
                </Link>

                <div className="space-x-4">
                    <Link to="/qr-code-generator" className={linkClass("/qr-code-generator")}>
                        Generate QR Code
                    </Link>
                    <Link to="/about" className={linkClass("/about")}>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
