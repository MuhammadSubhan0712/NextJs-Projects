import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookHaven - Your Online Bookstore",
  description: "Discover your next favorite book at BookHaven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-amber-50 text-amber-900 min-h-screen flex flex-col`}>
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
