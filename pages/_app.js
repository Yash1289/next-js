import Layout from '../components/header/layout.component'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
         <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
