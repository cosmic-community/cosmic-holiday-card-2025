import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // Changed: Updated title to reflect 2026
  title: '✦ Happy Holidays from Cosmic | 2026',
  // Changed: Updated description to reference 2026
  description: 'Wishing you a peaceful holiday season and a wonderful 2026. From your friends at Cosmic.',
  // Changed: Updated keywords to include 2026
  keywords: ['Cosmic', 'Holiday Card', 'Christmas', '2026', 'New Year', 'Happy Holidays', 'Season Greetings'],
  authors: [{ name: 'Cosmic' }],
  creator: 'Cosmic',
  publisher: 'Cosmic',
  openGraph: {
    // Changed: Updated OpenGraph title to 2026
    title: '✦ Happy Holidays from Cosmic | 2026',
    // Changed: Updated OpenGraph description to reference 2026
    description: 'Wishing you a peaceful holiday season and a wonderful 2026. From your friends at Cosmic.',
    url: 'https://cosmic-holiday-card-2025.vercel.app',
    siteName: 'Cosmic Holiday Card',
    images: [
      {
        // Changed: Updated to user-provided OG image
        url: 'https://imgix.cosmicjs.com/444154c0-cf9e-11f0-ab33-09cb31e91e16-CleanShot-2025-12-02-at-08-44-572x.png?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        // Changed: Updated alt text to reference 2026
        alt: 'Happy Holidays 2026 from Cosmic - Festive holiday greeting card',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    // Changed: Updated Twitter card title to 2026
    title: '✦ Happy Holidays from Cosmic | 2026',
    // Changed: Updated Twitter card description to reference 2026
    description: 'Wishing you a peaceful holiday season and a wonderful 2026!',
    // Changed: Updated Twitter card image to user-provided OG image
    images: ['https://imgix.cosmicjs.com/444154c0-cf9e-11f0-ab33-09cb31e91e16-CleanShot-2025-12-02-at-08-44-572x.png?w=1200&h=630&fit=crop&auto=format,compress'],
    creator: '@cosmicjs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://cosmic-holiday-card-2025.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎄</text></svg>" />
        <script src="/dashboard-console-capture.js" />
      </head>
      {/* Changed: Removed bg-neutral-200 class from body to use dark background from globals.css */}
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}