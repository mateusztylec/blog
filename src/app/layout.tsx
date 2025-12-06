import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: 'mateusztylec',
    description: 'Personal portfolio website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    defer
                    data-domain="mateusztylec.com"
                    src="https://plausible-prod.matsurge.com/js/script.js"
                ></script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
