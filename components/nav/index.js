import { useEffect, useRef } from 'react'
import CustomButton from 'components/button'
import CustomLink from 'components/link'
import gsap from 'gsap'
import { Container, Logo } from 'styles'
import {
  InvisWrapper,
  LogoWrapper,
  MainLogo,
  NavLinks,
  NavWrapper,
  PageHeader,
} from './styles'
import { useWindowSize } from 'hooks'

const Nav = () => {
  let sectionRef = useRef(null)
  let logoRef = useRef(null)
  let fontRef = useRef(null)
  const { width } = useWindowSize()

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: '1px top',
        end: 'bottom center',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    tl.to(logoRef, { top: '0%', left: '0%', transform: 'unset' }, 0).to(
      fontRef,
      { fontSize: '2vw' },
      0
    )
  }, [width])

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

      <MainLogo ref={(el) => (logoRef = el)}>
        <Logo ref={(el) => (fontRef = el)} id="logo">
          astro studios
        </Logo>
      </MainLogo>
    </>
  )
}

export default Nav
