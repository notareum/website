import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Notareum - The Trust Layer for Web3',
    template: '%s | Notareum',
  },
  description:
    'Notareum is an open protocol for sharing blockchain resources safely. One file format. Cryptographic verification. Every chain.',
  metadataBase: new URL('https://notareum.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Notareum',
    'Web3',
    'blockchain',
    'protocol',
    'resource sharing',
    'cryptographic verification',
    '.nota',
    'NOTA token',
    'decentralized',
    'trust layer',
  ],
  authors: [{ name: 'Notareum Labs' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Notareum - The Trust Layer for Web3',
    description:
      'Open protocol for sharing blockchain resources safely. One file format. Cryptographic verification. Every chain.',
    url: 'https://notareum.com',
    siteName: 'Notareum',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Notareum - The Trust Layer for Web3',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notareum - The Trust Layer for Web3',
    description:
      'Open protocol for sharing blockchain resources safely. One file format. Cryptographic verification. Every chain.',
    creator: '@notareumnota',
    site: '@notareumnota',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#3A6FE5',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Notareum',
  url: 'https://notareum.com',
  logo: 'https://notareum.com/logo.png',
  description: 'The Trust Layer for Web3. Open protocol for verified blockchain resource sharing.',
  sameAs: [
    'https://twitter.com/notareumnota',
    'https://github.com/notareum',
    'https://discord.gg/notareum',
    'https://t.me/notareum',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
