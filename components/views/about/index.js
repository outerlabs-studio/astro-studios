import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container, TitleHeader, sizes } from 'styles'
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
import { useIsomorphicLayoutEffect, useMedia } from 'react-use'

const About = ({ description, images }) => {
  let trigger = useRef()
  let timeline = useRef()
  let imageRef = useRef([])

  const isTablet = useMedia(`(min-width: ${sizes.phablet}px)`) || true
  const isPhone = useMedia(`(min-width: ${sizes.phone}px)`) || false

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.current,
          scrub: true,
          start: isTablet ? 'center top' : 'top top',
          end: 'bottom center',
        },
      })

      let changeBg = gsap.utils.toArray('.change-bg')

      changeBg.forEach((el) => {
        tl.fromTo(
          el,
          { backgroundColor: 'rgb(251, 251, 251)' },
          { backgroundColor: 'rgb(1, 20, 223)' },
          0
        )
      })

      imageRef.current.forEach((image) => {
        tl.to(image, { opacity: 0 }, 0)
      })

      tl.fromTo(
        '#logo',
        { color: 'rgb(1, 20, 223)' },
        { color: 'rgb(251, 251, 251)' },
        0
      )

      tl.fromTo(
        '#nav-link',
        { color: 'rgb(13, 13, 13)' },
        { color: 'rgb(251, 251, 251)' },
        0
      )
    })

    return () => ctx.revert()
  }, [isTablet])

  return (
    <SectionWrapper className="change-bg" id="about" ref={trigger}>
      <Container>
        <TextWrapper>
          <TitleHeader className="about-text">{description}</TitleHeader>
        </TextWrapper>
        <FirstImage ref={(el) => (imageRef.current[0] = el)}>
          <Parallax speed={isPhone ? -1.5 : -2.5} trigger={trigger}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                images[0].attributes.url
              }
              alt={images[0].attributes.alternativeText}
              quality={90}
              fill
            />
          </Parallax>
        </FirstImage>
        <SecondImage ref={(el) => (imageRef.current[1] = el)}>
          <Parallax speed={isPhone ? 0.5 : 1.5} trigger={trigger}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                images[1].attributes.url
              }
              alt={images[1].attributes.alternativeText}
              quality={90}
              fill
            />
          </Parallax>
        </SecondImage>
        <ThirdImage ref={(el) => (imageRef.current[2] = el)}>
          <Parallax speed={isPhone ? -1.5 : -2.5} trigger={trigger}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                images[2].attributes.url
              }
              alt={images[2].attributes.alternativeText}
              quality={90}
              fill
            />
          </Parallax>
        </ThirdImage>
        <FourthImage ref={(el) => (imageRef.current[3] = el)}>
          <Parallax speed={isPhone ? -1 : -2} trigger={trigger}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                images[3].attributes.url
              }
              alt={images[3].attributes.alternativeText}
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
