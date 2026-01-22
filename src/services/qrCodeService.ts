import axios from "axios";
import { QR_CODE_API_URL } from "../config/apiConfig";

export async function generateQrCode(content: string): Promise<string> {
    const response = await axios.post(QR_CODE_API_URL, { content }, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    return response.data.imageBase64;
}
