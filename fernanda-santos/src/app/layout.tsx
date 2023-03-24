import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
config.autoAddCss = false

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
      <body>{children}</body>
    </html>
  )
}
