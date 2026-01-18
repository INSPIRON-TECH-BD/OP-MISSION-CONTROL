import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "Institutional Cloud Accounting & Business Automation for 100+ Crore Agro-Enterprises.",
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/icon.png", type: "image/png" } // Fallback
        ],
        shortcut: "/icon.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#010409]`}>
                {children}
            </body>
        </html>
    );
}
