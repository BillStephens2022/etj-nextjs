import Document, { Html, Head, Main, NextScript } from "next/document";

class ETJDocument extends Document {
    render() {
        return <Html lang='en'>
            <Head>
           
          <link rel="icon" type="image/png" href="/images/icon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default ETJDocument;
