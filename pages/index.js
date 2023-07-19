import { useLenis } from '@studio-freight/react-lenis'
import { Bear, Footer, Layout } from 'components'
import {
  About,
  Hero,
  InfoSection,
  ScrollerSection,
  SmallInfoSection,
  TeamSection,
} from 'components/views'
import Nav from 'components/nav'

function Home() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <About />
      <div>
        <Bear />
        <InfoSection />
        <ScrollerSection />
      </div>
      <SmallInfoSection />
      <TeamSection />
      <Footer />
    </Layout>
  )
}

export default Home
