import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@ui/layout'
import { ThemeProvider } from 'next-themes'
import { Caveat } from '@next/font/google'
import { Edu_NSW_ACT_Foundation } from '@next/font/google'
import { api } from 'src/utils/api'
import { type AppType } from "next/app";

const CaveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-Caveat'
})

const EduCursedFont = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-EduCursed'
})

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  const page = router.pathname

  return (
    <ThemeProvider
      defaultTheme='dark'
      attribute="class"
      storageKey='theme'
      enableSystem={false}
    >
      <main className={`${CaveatFont.variable} ${EduCursedFont.variable} `}>
        <Layout page={page}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider >
  )
}

export default api.withTRPC(MyApp);
