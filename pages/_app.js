import Layout from '../components/header/layout.component'
import '../styles/globals.css'
import "../firebase"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Head>
            <title>NextJs Events</title>
            <meta name="description" content="List of great event that you can look forward to..." />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
         <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
