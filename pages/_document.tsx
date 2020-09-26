import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* TODO: preload only best font for browser? */}
          <link rel="preload" href="/fonts/SNNeoNoire-Regular.woff" as="font" />
          <link
            rel="preload"
            href="/fonts/SNNeoNoire-Regular.woff2"
            as="font"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
