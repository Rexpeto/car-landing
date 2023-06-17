import { Footer, Header } from "@/components";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <ToastContainer theme="dark" />
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}
