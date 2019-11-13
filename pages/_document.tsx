import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import Navbar from "../components/Navbar"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument