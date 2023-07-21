import { useRef, useState } from 'react'
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
import { useRect } from 'hooks'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

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
