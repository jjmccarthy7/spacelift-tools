import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AmplitudeProvider from '@/components/AmplitudeProvider'
import MetaPixelProvider from '@/components/MetaPixelProvider'

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

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">

        {/* ── Meta Pixel ──────────────────────────────────────────────────────
            Base script: initialises fbq, fires the first PageView.
            strategy="afterInteractive" defers until the page is interactive
            so it never blocks rendering.
            Route-change PageViews are handled by MetaPixelProvider below.
        ─────────────────────────────────────────────────────────────────── */}
        {PIXEL_ID && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init','${PIXEL_ID}');
                fbq('track','PageView');
              `,
            }}
          />
        )}

        {/* Noscript fallback for browsers with JavaScript disabled */}
        {PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        <AmplitudeProvider>
          <MetaPixelProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </MetaPixelProvider>
        </AmplitudeProvider>

      </body>
    </html>
  )
}
