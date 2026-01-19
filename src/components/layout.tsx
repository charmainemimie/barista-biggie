import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewsCarousel } from "@/components/ReviewsCarousel"


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
        <ReviewsCarousel />
        <Footer />
      </body>
    </html>
  )
}
