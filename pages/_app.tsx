import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@ui/layout'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const page = router.pathname

  return (
    <ThemeProvider defaultTheme='dark'>
      <Layout page={page}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
