import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kripesh Blogs',
  description: 'A personal blog website',
  icons: {
    icon: "/site.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <link rel="icon" href="/site.svg" sizes="any"/>
    {children}
    </body>
    </html>
  )
}
