import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '✦ Happy Holidays from Cosmic | 2025',
  description: 'Wishing you a peaceful holiday season and a wonderful 2025. From your friends at Cosmic.',
  keywords: ['Cosmic', 'Holiday Card', 'Christmas', '2025', 'New Year'],
  authors: [{ name: 'Cosmic' }],
  openGraph: {
    title: '✦ Happy Holidays from Cosmic | 2025',
    description: 'Wishing you a peaceful holiday season and a wonderful 2025. From your friends at Cosmic.',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/6dafe000-a20f-11ee-b417-db331415685f-snow.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Cosmic Holiday Card 2025',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '✦ Happy Holidays from Cosmic | 2025',
    description: 'Wishing you a peaceful holiday season and a wonderful 2025!',
    images: ['https://imgix.cosmicjs.com/6dafe000-a20f-11ee-b417-db331415685f-snow.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✦</text></svg>" />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="min-h-screen bg-neutral-200">
        {children}
      </body>
    </html>
  )
}