import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Provider from "./provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rusty Miguel Ramos",
  description: "Portfolio of Rusty Miguel Ramos, a full stack developer and product designer",
  applicationName: "Portfoio Rusty Miguel Ramos",
  keywords: ["Rusty Miguel Ramos", "VA", "Full Stack Developer","Frontend Developer","LinkedIn", "Product Designer", "ReactJS", "Next.js", "Tailwind CSS", "TypeScript"],
  authors: [{ name: "Rusty Miguel Ramos" }],
  creator: "Rusty Miguel Ramos",
  publisher: "Rusty Miguel Ramos",
  openGraph: {
    title: "Rusty Miguel Ramos",
    description: "Rusty Miguel Ramos's portfolio",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} overflow-x-hidden ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
