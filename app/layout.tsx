import type { Metadata, Viewport } from 'next'
import { Host_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const display = Host_Grotesk({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-retro-display', display: 'swap' })
const interfaceFont = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-retro-interface', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-retro-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://nibruad16.github.io'),
  title: 'Nibru Kefyalew Tessema — Software Engineer, AI & GTM Systems',
  description: 'Software engineer building LLM-powered products, the evaluations that keep them honest, and the automation that takes them to market.',
  openGraph: {
    title: 'Nibru Kefyalew Tessema — Software Engineer',
    description: 'I build AI systems that help companies grow.',
    url: '/',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#008080',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${interfaceFont.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
