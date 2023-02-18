import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@ui/layout'
import { ThemeProvider } from 'next-themes'

import { Montserrat } from '@next/font/google'
import { Caveat } from '@next/font/google'

const FontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-Montserrat',
})

const CaveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-Caveat'
})

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const page = router.pathname

  return (
    <ThemeProvider
      defaultTheme='dark'
      attribute="class"
      storageKey='theme'
      enableSystem={false}
      themes={['light', 'dark', 'colors']}
    >
      <main className={`${CaveatFont.variable}`}>
        <Layout page={page}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider >
  )
}
