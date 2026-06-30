import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Cage Padel Trib | Premium Padel Courts in Singapore',
  description: 'Experience premium padel courts, expert coaching, and a thriving community in the heart of Singapore. Book your court today!',
  keywords: 'padel, padel courts, Singapore, sports, booking, equipment',
  authors: [{ name: 'The Cage Padel Trib' }],
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0B" />

        {/* EDIT ME: Replace with actual Open Graph images */}
        <meta property="og:title" content="The Cage Padel Trib" />
        <meta property="og:description" content="Premium padel courts and coaching in Singapore" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cagepadeltrib.com" />
        <meta property="og:image" content="https://cagepadeltrib.com/og-image.jpg" />
      </head>
      <body className="bg-cage-black text-cage-text">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
