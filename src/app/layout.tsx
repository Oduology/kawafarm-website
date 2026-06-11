import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kawafarm.com"),
  title: {
    default: "Kawafarm | Farm-First Agritech for Africa",
    template: "%s | Kawafarm"
  },
  description:
    "Kawafarm is a farm-first agritech company making farming accessible, efficient, and sustainable through real agricultural operations, AI-powered tools, and market systems.",
  keywords: ["Kawafarm", "agritech", "African agriculture", "farm technology", "AI farming", "Kawafarm Market", "Farmlingua"],
  openGraph: {
    title: "Kawafarm | Building the Future of Agriculture",
    description:
      "Real agricultural operations, AI-powered tools, and market systems for accessible, efficient, sustainable farming.",
    images: ["/images/kawafarm-hero.png"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
