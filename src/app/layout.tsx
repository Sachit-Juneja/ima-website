import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className="min-h-full flex flex-col font-sans selection:bg-white selection:text-black transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
