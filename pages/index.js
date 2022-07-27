import Head from 'next/head'
import Info from '../components/Info.js'
import About from '../components/About.js'
import Interests from '../components/Interests.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div id='root'>
     

      <Info />
      <About />
      <Interests />
      <Footer />

    </div>
  )
}
