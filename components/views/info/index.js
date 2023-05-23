import { ArticleBody, ArticleSubtitle, Container, TitleSubheader } from 'styles'
import {
  InformationWrapper,
  ItemWrapper,
  Line,
  RowWrapper,
  SectionWrapper,
} from './style'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const InfoSection = () => {
  let sectionRef = useRef()
  let itemsRef = useRef([])
  const comp = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let anim = { opacity: 0, yPercent: 50 }

      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          ...anim,
          scrollTrigger: {
            trigger: item,
            start: 'top+=10% bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })

      gsap.to(sectionRef.current, {
        paddingBottom: '5rem',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper ref={sectionRef} id="change-bg">
      <Container fluid>
        <ItemWrapper ref={(el) => (itemsRef.current[0] = el)}>
          <RowWrapper>
            <TitleSubheader nm>growth</TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle m={'0 0 2rem 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line />
        </ItemWrapper>
        <ItemWrapper ref={(el) => (itemsRef.current[1] = el)}>
          <RowWrapper>
            <TitleSubheader nm>people</TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle m={'0 0 2rem 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line />
        </ItemWrapper>
        <ItemWrapper ref={(el) => (itemsRef.current[2] = el)}>
          <RowWrapper>
            <TitleSubheader nm>comfort</TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle m={'0 0 2rem 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line />
        </ItemWrapper>
        <ItemWrapper ref={(el) => (itemsRef.current[3] = el)}>
          <RowWrapper>
            <TitleSubheader nm>authentic</TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle m={'0 0 2rem 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line />
        </ItemWrapper>
        <ItemWrapper ref={(el) => (itemsRef.current[4] = el)}>
          <RowWrapper>
            <TitleSubheader nm>innovative</TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle m={'0 0 2rem 0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line />
        </ItemWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default InfoSection
