import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import gsap from 'gsap'
import { Z } from 'styles'

const FloatingBear = styled.div`
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25vw;
  width: 28vw;
  margin: -13vw;
  z-index: ${Z.STICKY_BEAR};
`

const Bear = () => {
  let bearRef = useRef()

  return (
    <FloatingBear ref={bearRef}>
      <Image src="/images/bear.png" alt="astro bear" quality={90} fill />
    </FloatingBear>
  )
}

export default Bear
