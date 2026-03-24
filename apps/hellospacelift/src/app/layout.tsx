import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Spacelift — Love where you live',
  description: 'Renovate your space in five simple steps. Spacelift connects homeowners with vetted renovation professionals.',
  keywords: 'home renovation, contractors, spacelift, home improvement',
  openGraph: {
    title: 'Spacelift — Love where you live',
    description: 'Renovate your space in five simple steps.',
    url: 'https://hellospacelift.com',
    siteName: 'Spacelift',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
