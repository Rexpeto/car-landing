import { Footer, Header } from "@/components";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
    title: "Landing Car",
    description: "Store of car"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className="relative dark:bg-gray-900">
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}
