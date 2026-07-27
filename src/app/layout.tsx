import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IMA | Less is More.",
  description: "Welcome to the International Micropenis Association. Precision. Efficiency. Elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-white selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
