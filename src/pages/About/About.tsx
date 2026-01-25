export default function About() {
    return (
        <div className="flex flex-col items-center justify-start px-4 pt-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full border border-gray-300">
                <h2 className="text-3xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
                    About the Application
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    This application was developed to <strong>generate QR Codes from custom text</strong> entered by the user.
                    With a simple and intuitive interface, you can type any content, generate the corresponding QR Code, view it,
                    and even download the generated image.
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                    <span className="font-semibold">Version:</span> 1.0.0
                </p>
            </div>
        </div>
    );
}
