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

const Footer = () => {
  let footerContainer = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerContainer.current, {
        yPercent: -50,
        scrollTrigger: {
          trigger: footerContainer.current,
          start: 'top+=22.5% bottom',
          end: '+=80%',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <FooterWrapper>
      <ContentWrapper ref={footerContainer}>
        <TitleSubheader>
          we’re feeling a<br />
          bit silly. wbu?
        </TitleSubheader>
        <ButtonWrapper>
          <CustomButton href="/contact">Let's talk instead</CustomButton>
        </ButtonWrapper>
      </ContentWrapper>
      <LineWrapper>
        <Container>
          <LineContentWrapper>
            <ArticleBase>&copy; Astro Studios 2023</ArticleBase>
            <CustomLink
              href="mailto:hello@astrostudios.xyz"
              color="var(--white)"
            >
              hello@astrostudios.xyz
            </CustomLink>
          </LineContentWrapper>
        </Container>
      </LineWrapper>
    </FooterWrapper>
  )
}

export default Footer
