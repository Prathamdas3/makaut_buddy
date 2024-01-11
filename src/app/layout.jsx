import './globals.css'
import { Inter, Grenze_Gotisch } from 'next/font/google'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'

import { ContextProvider } from '@/Context/DataProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const grenze = Grenze_Gotisch({
  subsets: ['latin'],
  variable: '--font-grenze',
  display: 'swap',
})

export const metadata = {
  title: 'Makaut Buddy',
  description: "Student's Buddy",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grenze.variable} dark text-foreground  `}
    >
      <body className={inter.className}>
        <ClerkProvider
          publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ContextProvider>
            <Providers>{children}</Providers>
          </ContextProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
