import { useEffect, useRef } from 'react'
import CustomButton from 'components/button'
import CustomLink from 'components/link'
import gsap from 'gsap'
import { Container } from 'styles'
import {
  InvisWrapper,
  LogoWrapper,
  MainLogo,
  NavLinks,
  NavWrapper,
  PageHeader,
} from './styles'

const Nav = () => {
  let tl = gsap.timeline()
  let sectionRef = useRef(null)
  let logoRef = useRef(null)

  useEffect(() => {
    tl.to(logoRef, {
      top: '0',
      left: '0',
      fontSize: '30px',
      transform: 'unset',
      scrollTrigger: {
        trigger: '#home',
        start: '1px top',
        end: 'bottom center',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
  }, [])

  return (
    <>
      <PageHeader ref={(el) => (sectionRef = el)}>
        <Container>
          <NavWrapper>
            <div />
            <NavLinks>
              <li>
                <CustomLink to="#about">About</CustomLink>
              </li>
              <li>
                <CustomButton href="/contact">Contact</CustomButton>
              </li>
            </NavLinks>
          </NavWrapper>
        </Container>
      </PageHeader>
      <InvisWrapper>
        <Container>
          <LogoWrapper>
            <MainLogo ref={(el) => (logoRef = el)}>astro studios</MainLogo>
          </LogoWrapper>
        </Container>
      </InvisWrapper>
    </>
  )
}

export default Nav
