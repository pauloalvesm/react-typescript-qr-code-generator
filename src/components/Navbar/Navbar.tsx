import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiHome, HiInformationCircle, HiQrcode } from "react-icons/hi";

export default function Navbar() {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md font-medium transition ${pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-100"
        }`;

    return (
        <nav className="bg-gray-100 shadow sticky top-0 z-50 border-t border-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <HiHome className="w-5 h-5" />
                    QR Code Generator
                </Link>

                <div className="hidden md:flex space-x-4">
                    <Link to="/qr-code-generator" className={linkClass("/qr-code-generator")}>
                        <span className="flex items-center gap-2">
                            <HiQrcode className="w-6 h-6" />
                            QR Code
                        </span>
                    </Link>
                    <Link to="/about" className={linkClass("/about")}>
                        <span className="flex items-center gap-2">
                            <HiInformationCircle className="w-6 h-6" />
                            About
                        </span>
                    </Link>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-200 space-y-4 px-4 py-3`}
            >
                <Link to="/qr-code-generator" className={linkClass("/qr-code-generator")}>
                    Generate QR Code
                </Link>
                <Link to="/about" className={linkClass("/about")}>
                    About
                </Link>
            </div>
        </nav>
    );
}