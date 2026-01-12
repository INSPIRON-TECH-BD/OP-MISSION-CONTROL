import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
    title: "INSPIRON TECH | Mission Control",
    description: "Institutional command node for MD ABU HASAN.",
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
