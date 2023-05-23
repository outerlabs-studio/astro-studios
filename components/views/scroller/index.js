import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Parallax from 'components/parallax'
import { ParagraphWrapper, RowText, RowWrapper, SectionWrapper } from './style'
import { ArticleBody } from 'styles'

const ScrollerSection = () => {
  let trigger = useRef()
  let animRow = useRef([])
  let opacityChange = useRef([])
  let root = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animRow.current.forEach((el) => {
        gsap.from(el, {
          yPercent: 100,
          scrollTrigger: {
            trigger: trigger.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper ref={trigger} id="info-section">
      <RowWrapper reverse>
        <div ref={(el) => (animRow.current[0] = el)}>
          <Parallax speed={-1} direction="horizontal" trigger={trigger}>
            <RowText mr={'-4vw'}>Created by teens</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper>
        <div ref={(el) => (animRow.current[1] = el)}>
          <Parallax speed={0.5} direction="horizontal" trigger={trigger}>
            <RowText ml={'-4vw'}>to share unique stories</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper reverse>
        <div ref={(el) => (animRow.current[2] = el)}>
          <Parallax speed={-1} direction="horizontal" trigger={trigger}>
            <RowText>and spread</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper sb>
        <div ref={(el) => (animRow.current[3] = el)}>
          <Parallax speed={-1} direction="horizontal" trigger={trigger}>
            <RowText ml={'-6.5vw'}>authentic kn</RowText>
          </Parallax>
        </div>
        <div ref={(el) => (animRow.current[4] = el)}>
          <Parallax speed={0.5} direction="horizontal" trigger={trigger}>
            <RowText nm>-owledge,</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper reverse>
        <div ref={(el) => (animRow.current[5] = el)}>
          <Parallax speed={-0.5} direction="horizontal" trigger={trigger}>
            <RowText nm>peace, and love</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper se>
        <div ref={(el) => (animRow.current[6] = el)}>
          <Parallax speed={1} direction="horizontal" trigger={trigger}>
            <RowText ml={'-30vw'}>Based in Los</RowText>
          </Parallax>
        </div>
        <ParagraphWrapper>
          <ArticleBody ref={(el) => (opacityChange.current[0] = el)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ArticleBody>
        </ParagraphWrapper>
      </RowWrapper>
      <RowWrapper se>
        <div ref={(el) => (animRow.current[7] = el)}>
          <Parallax speed={-0.5} direction="horizontal" trigger={trigger}>
            <RowText ml={'-6vw'}>Angeles</RowText>
          </Parallax>
        </div>

        <ArticleBody ref={(el) => (opacityChange.current[1] = el)}>
          34.0522° N, 118.2437° W
        </ArticleBody>

        <div ref={(el) => (animRow.current[8] = el)}>
          <Parallax speed={0.5} direction="horizontal" trigger={trigger}>
            <RowText>California</RowText>
          </Parallax>
        </div>
      </RowWrapper>
      <RowWrapper reverse>
        <div ref={(el) => (animRow.current[9] = el)}>
          <Parallax speed={-0.5} direction="horizontal" trigger={trigger}>
            <RowText mr={'-10vw'}>For the people.</RowText>
          </Parallax>
        </div>
      </RowWrapper>
    </SectionWrapper>
  )
}

export default ScrollerSection
