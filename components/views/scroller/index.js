import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Parallax from 'components/parallax'
import { ParagraphWrapper, RowText, RowWrapper, SectionWrapper } from './style'
import { ArticleBody } from 'styles'

const ScrollerSection = () => {
  let trigger = useRef()
  let animRow = useRef([])
  let opacityChange = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from(
        animRow.current,
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0
      ).from(
        opacityChange.current,
        {
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0
      )
    })

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
            <RowText ml={'-20vw'}>Based in Los</RowText>
          </Parallax>
        </div>
        <ParagraphWrapper id="hide">
          <ArticleBody ref={(el) => (opacityChange.current[0] = el)}>
            Guiding and supporting teenagers through the power of media.
          </ArticleBody>
        </ParagraphWrapper>
      </RowWrapper>
      <RowWrapper se>
        <div ref={(el) => (animRow.current[7] = el)}>
          <Parallax speed={-0.5} direction="horizontal" trigger={trigger}>
            <RowText ml={'-6vw'}>Angeles</RowText>
          </Parallax>
        </div>

        <ArticleBody ref={(el) => (opacityChange.current[1] = el)} id="hide">
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
