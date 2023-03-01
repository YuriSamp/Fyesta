import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="O melhor aplicativo opensource de organização que voce vai encontrar na internet" />
        <meta name="author" content="Yuri Sampaio" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
