import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container, TitleHeader } from 'styles'
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  SectionWrapper,
  TextWrapper,
} from './style'
import { Parallax } from 'components'
import { gsap } from 'gsap'
import { useWindowSize } from 'hooks'

const About = () => {
  let trigger = useRef()
  let timeline = useRef()
  const { width: windowWidth } = useWindowSize()

  return (
    <SectionWrapper ref={trigger}>
      <Container>
        <TextWrapper>
          <TitleHeader className="about-text">
            a Gen Z podcast company focused on capturing the conversations that
            comfort you and making them available when you need them the most
          </TitleHeader>
        </TextWrapper>
        <FirstImage>
          <Parallax speed={-1.5} trigger={trigger}>
            <Image
              src="/images/blue.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </FirstImage>
        <SecondImage>
          <Parallax speed={0.5} trigger={trigger}>
            <Image
              src="/images/red.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </SecondImage>
        <ThirdImage>
          <Parallax speed={-1.5} trigger={trigger}>
            <Image
              src="/images/purple.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </ThirdImage>
        <FourthImage>
          <Parallax speed={-1} trigger={trigger}>
            <Image
              src="/images/pink.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </FourthImage>
      </Container>
    </SectionWrapper>
  )
}

export default About
