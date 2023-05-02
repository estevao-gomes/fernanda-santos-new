import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {PT_Sans} from 'next/font/google'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

config.autoAddCss = false

const pt_sans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'auto'
})

export const metadata = {
  title: 'Prof. Fernanda Santos',
  description: 'Professora Fernanda Santos - Aulas de inglês online',
  keywords: 'english, teaching, education',
  author: 'Estevao Gomes',
  icons:{
    icon:'@/assets/favicon.ico',
  }
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
