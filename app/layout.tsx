import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '✦ Happy Holidays from Cosmic | 2025',
  description: 'Wishing you a peaceful holiday season and a wonderful 2025. From your friends at Cosmic.',
  keywords: ['Cosmic', 'Holiday Card', 'Christmas', '2025', 'New Year', 'Happy Holidays', 'Season Greetings'],
  authors: [{ name: 'Cosmic' }],
  creator: 'Cosmic',
  publisher: 'Cosmic',
  openGraph: {
    title: '✦ Happy Holidays from Cosmic | 2025',
    description: 'Wishing you a peaceful holiday season and a wonderful 2025. From your friends at Cosmic.',
    url: 'https://cosmic-holiday-card-2025.vercel.app',
    siteName: 'Cosmic Holiday Card',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/74943590-cee8-11f0-ab33-09cb31e91e16-happy-holidays-2025.png?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Happy Holidays 2025 from Cosmic - Festive holiday greeting card',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '✦ Happy Holidays from Cosmic | 2025',
    description: 'Wishing you a peaceful holiday season and a wonderful 2025!',
    images: ['https://imgix.cosmicjs.com/74943590-cee8-11f0-ab33-09cb31e91e16-happy-holidays-2025.png?w=1200&h=630&fit=crop&auto=format,compress'],
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
      <body className="min-h-screen bg-neutral-200">
        {children}
      </body>
    </html>
  )
}