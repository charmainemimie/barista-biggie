import type React from "react"
//import type { Metadata } from "next"
//import { Inter } from "next/font/google"
//import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

/*const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Biggie Komborerai Shiri - Master Barista Portfolio",
  description: "Professional barista portfolio showcasing 8 years of coffee artistry and expertise",
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className='bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark min-h-screen'
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
