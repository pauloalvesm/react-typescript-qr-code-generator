import { useState } from "react";
import { generateQrCode } from "../services/qrCodeService";

export function useQrCode() {
    const [qrCodeImage, setQrCodeImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generate = async (content: string) => {
        try {
            setLoading(true);
            setError(null);

            const image = await generateQrCode(content);
            setQrCodeImage(image);
        } catch (error) {
            console.error("Error generating QR Code:", error);
            setError("Failed to generate QR Code.");
        } finally {
            setLoading(false);
        }
    };

    const clear = () => {
        setQrCodeImage("");
        setError(null);
    };

    return {
        qrCodeImage,
        loading,
        error,
        generateQrCode: generate,
        clear,
    };
}