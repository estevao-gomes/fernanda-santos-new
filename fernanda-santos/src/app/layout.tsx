import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {PT_Sans, Open_Sans } from 'next/font/google'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
config.autoAddCss = false

const pt_sans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'auto'
})

export const metadata = {
  title: 'Template',
  description: 'Template for website',
  keywords: 'english, teaching, education',
  author: 'Estevao Gomes'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>{children}</body>
    </html>
  )
}
