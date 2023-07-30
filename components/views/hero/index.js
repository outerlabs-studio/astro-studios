import { useRef } from 'react'
import { Parallax } from 'components'
import { ScrollWrapper, SectionWrapper } from './styles'
import { ArticleSubtitle, Container } from 'styles'

const Hero = ({ subtitle }) => {
  const target = useRef()

  return (
    <SectionWrapper id="home" ref={target}>
      <ScrollWrapper>
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
