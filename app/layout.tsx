import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kevin Girshman | Senior Full-Stack Engineer",
  description: "Senior Full-Stack Engineer with deep TypeScript/React experience and a solid Python/Node backend. Specializing in accessible UIs, modern web architectures, and AI/ML tooling.",
  keywords: ["Full-Stack Engineer", "React", "TypeScript", "Next.js", "Python", "Node.js", "AI", "Machine Learning"],
  authors: [{ name: "Kevin Girshman" }],
  openGraph: {
    title: "Kevin Girshman | Senior Full-Stack Engineer",
    description: "Senior Full-Stack Engineer specializing in React, TypeScript, and modern web architectures",
    type: "website",
  },
};

import Header from "./components/Header";
import Footer from "./components/Footer";
import IdleAnimations from "./components/IdleAnimations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} text-amber-50 antialiased relative`}
      >
        <IdleAnimations />
        <Header />
        <main className="pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
