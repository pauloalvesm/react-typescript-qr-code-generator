export default function Footer() {
    return (
        <div className="bg-gray-100 text-center py-4 border-t border-gray-300 mt-auto">
            <p className="text-sm text-gray-600">
                <span className="font-semibold">2026 - Developed by:</span>{" "}
                <a 
                    href="https://github.com/pauloalvesm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Paulo Alves
                </a>
            </p>
        </div>
    );
}
