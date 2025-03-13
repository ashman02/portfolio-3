import type { Metadata } from "next"
import localfont from "next/font/local"
import "./globals.css"
import LenisProvider from "@/components/LenisProvider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const myFont = localfont({ src: "../../public/fonts/benzo.ttf" })

export const metadata: Metadata = {
  title: "Ashman Sidhu | Full Stack Developer & UI/UX Designer",
  description:
    "Full Stack Developer and UI/UX Designer building seamless web experiences. Expertise in React, Next.js, Node.js, and modern web technologies. Let's turn ideas into digital reality.",
  keywords: [
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Expert",
    "Node.js Developer",
    "MongoDB",
    "TypeScript",
    "Web Development",
  ],
  openGraph: {
    title: "Ashman Sidhu | Full Stack Developer Portfolio",
    description:
      "Crafting pixel-perfect web experiences with full stack expertise. Explore my development and design work.",
    url: "https://ashman.vercel.app/",
  },
  metadataBase: new URL("https://ashman.vercel.app/"),
  generator: "Next.js",
  applicationName: "Ashman Sidhu Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
