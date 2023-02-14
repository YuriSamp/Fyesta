import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@ui/layout'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const page = router.pathname

  return (
    <Layout page={page}>
      <Component {...pageProps} />
    </Layout>
  )
}
