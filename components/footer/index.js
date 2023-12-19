import { useEffect, useRef } from 'react'
import { Container, TitleSubheader, ArticleBase } from 'styles'
import {
  ButtonWrapper,
  ContentWrapper,
  FooterWrapper,
  LineContentWrapper,
  LineWrapper,
} from './styles'
import { gsap } from 'gsap'
import { CustomButton, CustomLink } from 'components'

const Footer = ({ data }) => {
  let footerContainer = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerContainer.current, {
        yPercent: -90,
        scrollTrigger: {
          trigger: footerContainer.current,
          start: 'top bottom',
          end: 'bottom+=90% bottom',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <FooterWrapper>
      <ContentWrapper ref={footerContainer}>
        <TitleSubheader
          dangerouslySetInnerHTML={{
            __html: data.title.replace(/\n/g, '<br/>'),
          }}
        ></TitleSubheader>
        <ButtonWrapper>
          <CustomButton href="#contact">{data.button}</CustomButton>
        </ButtonWrapper>
      </ContentWrapper>
      <LineWrapper>
        <Container>
          <LineContentWrapper>
            <div className="creds">
              <ArticleBase>Crafted by&nbsp;</ArticleBase>
              <CustomLink
                href={'https://outerlabs.studio'}
                color="var(--white)"
              >
                Outer Labs
              </CustomLink>
            </div>
            <CustomLink href={`mailto:${data.email}`} color="var(--white)">
              {data.email}
            </CustomLink>
          </LineContentWrapper>
        </Container>
      </LineWrapper>
    </FooterWrapper>
  )
}

export default Footer
