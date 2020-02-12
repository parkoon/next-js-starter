import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta name="description" content="describe your site here" />
          <meta name="keywords" content="write keywords here" />
          <meta property="og:title" content="write og title here" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content={`${process.env.BASE_URL}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="describe your site here." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
