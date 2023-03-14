import './globals.css'

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
