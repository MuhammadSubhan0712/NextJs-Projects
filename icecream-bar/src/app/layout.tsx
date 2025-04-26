import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Scoop Happiness - Artisanal Ice Cream',
  description: 'Premium handcrafted ice cream with unique flavors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} bg-pink-50`}>
        <Navbar/>
        <PageTransition>
        {children}
        </PageTransition>
        <Footer/>
      </body>
    </html>
  );
}
