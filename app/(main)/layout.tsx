import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Institutional Brand Manual",
    description: "Operational guidelines and high-precision brand engineering for MD ABU HASAN.",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    );
}
