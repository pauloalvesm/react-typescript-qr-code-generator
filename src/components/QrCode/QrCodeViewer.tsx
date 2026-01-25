import type { QrCodeViewerProps } from "../../types/QrCodeViewerProps";

export default function QrCodeViewer({ imageBase64 }: QrCodeViewerProps) {
    return (
        <>
            <img
                src={imageBase64}
                alt="QR Code"
                className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[240px] h-auto object-contain rounded-lg border border-gray-300 shadow-md my-2"
            />
            <a href={imageBase64} download="qrcode.png">
                <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
                    Download QR Code
                </button>
            </a>
        </>
    );
}