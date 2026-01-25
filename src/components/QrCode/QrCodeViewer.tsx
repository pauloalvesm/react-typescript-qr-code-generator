interface Props {
    imageBase64: string;
}

export default function QrCodeViewer({ imageBase64 }: Props) {
    return (
        <>
            <img 
                src={imageBase64} 
                alt="QR Code" 
                className="max-w-[250px] object-contain rounded-lg border border-gray-300 shadow-md my-2" 
            />
            
            <a href={imageBase64} download="qrcode.png">
                <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
                    Download QR Code
                </button>
            </a>
        </>
    )
}
