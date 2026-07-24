import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { getSEOTags } from "@/lib/seo";
import Sidebar from "@/components/Sidebar";


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

export const metadata = {
  ...getSEOTags({
    canonicalUrlRelative: "/",
  }),
  title: {
    default: "Mateusz Tylec | ai dev & indie hacker",
    template: "%s | Mateusz Tylec",
  },
};

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
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 md:flex md:gap-12">
          <Sidebar />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
