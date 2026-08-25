import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Offers from '../components/Offers'
import Process from '../components/Process'
import SparkScoreTable from '../components/SparkScoreTable'
import Stats from '../components/Stats'
import Why from '../components/Why'

export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Why />
      <Offers />
      <SparkScoreTable />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
