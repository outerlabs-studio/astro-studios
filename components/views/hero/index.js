import { useRef } from 'react'
import { Parallax } from 'components'
import { ScrollWrapper, SectionWrapper } from './styles'
import { ArticleSubtitle, Container } from 'styles'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from 'react-use'

const Hero = ({ subtitle }) => {
  const target = useRef()
  let subtitleRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.to(subtitleRef, {
        opacity: 1,
        ease: 'power3.inOut',
        delay: 1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper id="home" ref={target}>
      <ScrollWrapper ref={(el) => (subtitleRef = el)}>
        <Parallax speed={-0.5} trigger={target}>
          <Container fluid>
            <ArticleSubtitle>{subtitle}</ArticleSubtitle>
          </Container>
        </Parallax>
      </ScrollWrapper>
    </SectionWrapper>
  )
}

export default Hero
