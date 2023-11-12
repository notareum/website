import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notareum - Streamlining Blockchain File Sharing and Collaboration',
  description: 'Notareum Introduces a new UTI to streamline sharing blockchain based files using the .nota File Extension',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
