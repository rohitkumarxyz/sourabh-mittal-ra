import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Saurabh Mittal - Expert Financial Planning & Wealth Management",
  description:
      "Comprehensive wealth management solutions tailored to your unique financial goals. SEBI registered research analyst providing investment insights.",
    generator: "v0.app",
    keywords: ["financial planning", "wealth management", "investment advisor", "SEBI registered", "Saurabh Mittal", "research analyst"],
  authors: [{ name: "Saurabh Mittal" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Saurabh Mittal - Expert Financial Planning & Wealth Management",
    description: "Comprehensive wealth management solutions tailored to your unique financial goals. SEBI registered research analyst providing investment insights.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Saurabh Mittal - Financial Research Analyst",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
    
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
