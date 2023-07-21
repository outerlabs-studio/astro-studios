import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router from 'next/router'
import { CustomHead } from 'components'

export default function Layout({
  seo = {
    title: 'astro studios - we record the answers',
    description: '',
    image: { url: 'https://astrostudios.xyz/og.jpg' },
    keywords: [
      'astro',
      'studios',
      'podcast',
      'teenager therapy',
      'teenager therapy podcast',
      'podcast companies',
      'production',
      'spotify podcast',
      'apple podcast',
      'gael aitor',
      'kayla suarez',
    ],
  },
  children,
}) {
  const lenis = useLenis()

  useEffect(() => {
    function onHashChangeStart(url) {
      url = '#' + url.split('#').pop()
      lenis.scrollTo(url)
    }

    Router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [lenis])

  return (
    <>
      <CustomHead {...seo} />

      <Lenis root>{children}</Lenis>
    </>
  )
}
