import { ArticleBody, ArticleSubtitle, TitleSubheader } from 'styles'
import {
  InformationWrapper,
  ItemWrapper,
  Line,
  RowWrapper,
  SectionWrapper,
  CustomContainer,
} from './style'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const InfoSection = ({ data }) => {
  let sectionRef = useRef()
  let itemsRef = useRef([])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom top+=30%',
          end: 'bottom+=20% center',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      tl.to(
        '#logo',
        {
          color: 'rgb(1, 20, 223)',
        },
        0
      )
      tl.to('#nav-link', { color: 'rgb(13, 13, 13)' }, 0)
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
      <CustomContainer fluid>
        {data.map((item, i) => {
          const currentIndex = i * 4 // Increment by 4 for each iteration

          return (
            <ItemWrapper key={i}>
              <RowWrapper>
                <TitleSubheader
                  nm
                  ref={(el) => (itemsRef.current[currentIndex] = el)}
                >
                  {item.title}
                </TitleSubheader>
                <InformationWrapper>
                  <ArticleSubtitle
                    m={'0 0 2rem 0'}
                    ref={(el) => (itemsRef.current[currentIndex + 1] = el)}
                    dangerouslySetInnerHTML={{
                      __html: item.subtitle.replace(/\n/g, '<br/>'),
                    }}
                  />
                  <div ref={(el) => (itemsRef.current[currentIndex + 2] = el)}>
                    <ReactMarkdown
                      components={{
                        p: (props) => <ArticleBody nm {...props} />,
                      }}
                    >
                      {item.description}
                    </ReactMarkdown>
                  </div>
                </InformationWrapper>
              </RowWrapper>
              <Line
                id="break-line"
                ref={(el) => (itemsRef.current[currentIndex + 3] = el)}
              />
            </ItemWrapper>
          )
        })}
      </CustomContainer>
    </SectionWrapper>
  )
}

export default InfoSection
