import { useRef } from 'react'
import { Parallax } from 'components'
import { ScrollWrapper, SectionWrapper } from './styles'
import { ArticleSubtitle } from 'styles'

const Hero = () => {
  const target = useRef()

  return (
    <SectionWrapper id="home" ref={target}>
      <ScrollWrapper>
        <Parallax speed={-0.5} trigger={target}>
          <ArticleSubtitle>[scroll]</ArticleSubtitle>
        </Parallax>
      </ScrollWrapper>
    </SectionWrapper>
  )
}

export default Hero
