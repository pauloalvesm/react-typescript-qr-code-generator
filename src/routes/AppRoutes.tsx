import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Navbar from "../components/Navbar/Navbar";
import QrCodeGenerator from "../components/QrCode/QrCodeGenerator";
import Footer from "../components/Footer/Footer";

export default function AppRoutes() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
