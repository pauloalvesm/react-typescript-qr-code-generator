import { useState } from "react";
import { useQrCode } from "../../hooks/useQrCode";
import QrCodeViewer from "./QrCodeViewer";
import "../../index.css";

export default function QrCodeGenerator() {
    const [text, setText] = useState("");
    const { qrCodeImage, loading, error, generateQrCode, clear } = useQrCode();

    const handleGenerate = () => {
        if (!text.trim()) {
            alert("Please enter text to generate the QR Code");
            return;
        }
        generateQrCode(text);
    };

    const handleClear = () => {
        setText("");
        clear();
    };

    return (
        <div className="flex flex-col items-center justify-start px-4 pt-4">
            <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-xl flex flex-col items-center border border-gray-300 gap-2">

                <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-blue-700 mb-4 text-center">
                    QR Code Generator
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-2 mb-2 w-full">
                    <input
                        type="text"
                        placeholder="Enter something..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full sm:w-28 h-10 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition shadow disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>
                    <button
                        onClick={handleClear}
                        className="w-full sm:w-28 h-10 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition shadow cursor-pointer"
                    >
                        Clear
                    </button>
                </div>

                <div className="flex flex-col items-center min-h-[100px] justify-center">
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {qrCodeImage ? (
                        <QrCodeViewer imageBase64={qrCodeImage} />
                    ) : (
                        <p className="text-gray-400 text-sm">
                            Generate a QR Code to display it here.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}