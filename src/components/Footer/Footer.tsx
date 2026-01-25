export default function Footer() {
    return (
        <div className="bg-gray-100 text-center py-4 border-t border-gray-300 mt-auto sm:mt-8">
            <p className="text-sm sm:text-base text-gray-600">
                <span className="font-semibold">{new Date().getFullYear()} - Developed by:</span>{" "}
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
