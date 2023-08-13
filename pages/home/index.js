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
    <Layout
      seo={{
        title: doc.SEO.title,
        description: doc.SEO.description,
        image: {
          url:
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            doc.SEO.OG.data.attributes.url,
        },
        keywords: doc.SEO.keywords.data,
      }}
    >
      <Nav logo={doc.hero.logo} />
      <Hero subtitle={doc.hero.subtitle} />
      <About
        description={doc.about.description}
        images={doc.about.images.data}
      />
      <div>
        <Bear />
        <InfoSection data={doc.info} />
        <ScrollerSection />
      </div>
      <SmallInfoSection data={doc.bear} />
      <ContactSection data={doc.contact} />
      <TeamSection data={doc.team} />
      <Footer data={doc.footer} />
    </Layout>
  )
}

export async function getStaticProps() {
  // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  // {
  //   populate: {
  //     SEO: {
  //       populate: '*'
  //     },
  //     hero: '*',
  //     about: {
  //       populate: '*'
  //     },
  //     info: '*',
  //     bear: '*',
  //     contact: '*',
  //     team: {
  //       populate: '*'
  //     },
  //     footer: '*',
  //   }
  // }
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
      '/api/home?populate[SEO][populate]=*&populate[hero]=*&populate[about][populate]=*&populate[info]=*&populate[bear]=*&populate[contact]=*&populate[team][populate]=*&populate[footer]=*',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  )
  const data = res.data

  return { props: { data } }
}
