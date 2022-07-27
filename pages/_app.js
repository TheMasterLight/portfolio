import '../styles/globals.css'
import '../styles/Home.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  
  return(
    <>
      <Head>
        <title>Digital Portfolio</title>
        <meta name="description" content="Jeff Stratford's Digital Portfolio and Business Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </> 
  )
}

export default MyApp
