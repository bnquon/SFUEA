import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "./ui/Navbar";

export const metadata: Metadata = {
  title: "SFU Gaming & Esports Club",
  description: "The official website for the SFU Gaming and Esports Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
