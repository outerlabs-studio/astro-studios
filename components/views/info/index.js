import { ArticleBody, ArticleSubtitle, Container, TitleSubheader } from 'styles'
import {
  InformationWrapper,
  ItemWrapper,
  Line,
  RowWrapper,
  SectionWrapper,
} from './style'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'hooks'

const InfoSection = () => {
  let sectionRef = useRef()
  let itemsRef = useRef([])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('#logo', {
        color: 'rgb(1, 20, 223)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom top+=30%',
          end: 'bottom+=20% center',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          yPercent: item.id === 'break-line' ? -100 : 50,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: item.id === 'break-line' ? '+=1000' : '+=500',
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
          pinSpacing: false,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper ref={sectionRef} className="change-bg">
      <Container fluid>
        <ItemWrapper>
          <RowWrapper>
            <TitleSubheader nm ref={(el) => (itemsRef.current[0] = el)}>
              growth
            </TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle
                m={'0 0 2rem 0'}
                ref={(el) => (itemsRef.current[1] = el)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm ref={(el) => (itemsRef.current[2] = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line id="break-line" ref={(el) => (itemsRef.current[3] = el)} />
        </ItemWrapper>
        <ItemWrapper>
          <RowWrapper>
            <TitleSubheader nm ref={(el) => (itemsRef.current[4] = el)}>
              people
            </TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle
                m={'0 0 2rem 0'}
                ref={(el) => (itemsRef.current[5] = el)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm ref={(el) => (itemsRef.current[6] = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line id="break-line" ref={(el) => (itemsRef.current[7] = el)} />
        </ItemWrapper>
        <ItemWrapper>
          <RowWrapper>
            <TitleSubheader nm ref={(el) => (itemsRef.current[8] = el)}>
              comfort
            </TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle
                m={'0 0 2rem 0'}
                ref={(el) => (itemsRef.current[9] = el)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm ref={(el) => (itemsRef.current[10] = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line id="break-line" ref={(el) => (itemsRef.current[11] = el)} />
        </ItemWrapper>
        <ItemWrapper>
          <RowWrapper>
            <TitleSubheader nm ref={(el) => (itemsRef.current[12] = el)}>
              authentic
            </TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle
                m={'0 0 2rem 0'}
                ref={(el) => (itemsRef.current[13] = el)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm ref={(el) => (itemsRef.current[14] = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line id="break-line" ref={(el) => (itemsRef.current[15] = el)} />
        </ItemWrapper>
        <ItemWrapper>
          <RowWrapper>
            <TitleSubheader nm ref={(el) => (itemsRef.current[16] = el)}>
              innovative
            </TitleSubheader>
            <InformationWrapper>
              <ArticleSubtitle
                m={'0 0 2rem 0'}
                ref={(el) => (itemsRef.current[17] = el)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </ArticleSubtitle>
              <ArticleBody nm ref={(el) => (itemsRef.current[18] = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ArticleBody>
            </InformationWrapper>
          </RowWrapper>
          <Line id="break-line" ref={(el) => (itemsRef.current[19] = el)} />
        </ItemWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default InfoSection
