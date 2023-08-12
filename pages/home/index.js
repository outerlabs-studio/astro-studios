import { useRef, useState } from 'react'
import { Bear, Footer, Layout } from 'components'
import {
  About,
  ContactSection,
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
import axios from 'axios'

export default function Home({ data }) {
  const doc = data.data.attributes

  return (
    <Layout>
      <Nav logo={doc.hero.logo} />
      <Hero subtitle={doc.hero.subtitle} />
      <About description={doc.about.description} />
      <div>
        <Bear />
        <InfoSection />
        <ScrollerSection />
      </div>
      <SmallInfoSection />
      <ContactSection />
      <TeamSection />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/home?populate=*',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  )
  const data = res.data

  return { props: { data } }
}
