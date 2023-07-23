import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import gsap from 'gsap'
import { Z, media } from 'styles'

const FloatingBear = styled.div`
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25vw;
  width: 30vw;
  margin: -13vw;
  z-index: ${Z.STICKY_BEAR};

  ${media.tablet`
    height: 35vw;
    width: 40vw;
    margin: -20vw;
  `};
  ${media.phablet`
    height: 45vw;
    width: 50vw;
    margin: -25vw;
  `};
  ${media.phone`
    height: 55vw;
    width: 60vw;
    margin: -30vw;
  `};
`

const Bear = () => {
  let bearRef = useRef()

  useEffect(() => {
    let ctx = gsap.context((self) => {
      gsap.to(bearRef.current, {
        rotation: 360,
        scrollTrigger: {
          trigger: '#info-section',
          scrub: true,
          start: 'top bottom',
          end: 'bottom bottom',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <FloatingBear ref={bearRef}>
      <Image src="/images/bear.png" alt="astro bear" quality={90} fill />
    </FloatingBear>
  )
}

export default Bear
