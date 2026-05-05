import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Lora, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nitin Agrawal — Freelance Web Developer",
  description:
    "Portfolio of Nitin Agrawal, a freelance web developer working on websites, web applications, and APIs using React, PHP, WordPress, and modern web technologies.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#F9F9F7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${lora.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="font-body text-foreground antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
