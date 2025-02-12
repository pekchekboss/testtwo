import "./globals.css"
import { Archivo } from "next/font/google"
import Link from "next/link"
import type React from "react" // Import React

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
})

export const metadata = {
  title: "PEKCHEK.COM",
  description: "Share your thoughts with management",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans`}>
        <nav className="bg-gradient-brand text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              PEKCHEK.COM
            </Link>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'