import { useRef } from 'react'
import CustomButton from 'components/button'
import CustomLink from 'components/link'
import gsap from 'gsap'
import { Container, Logo } from 'styles'
import {
  InvisWrapper,
  LetterWrapper,
  LogoWrapper,
  MainLogo,
  NavLinks,
  NavWrapper,
  PageHeader,
} from './styles'
import { useIsomorphicLayoutEffect, useMedia, useWindowSize } from 'react-use'

const Nav = () => {
  let sectionRef = useRef(null)
  let logoRef = useRef(null)
  let fontRef = useRef(null)

  const root = useRef()
  const { width } = useWindowSize()

  const isDesktop = useMedia('(min-width: 1000px)')
  const isTablet = useMedia('(min-width: 550px)')
  const isMobile = useMedia('(min-width: 330px)')

  console.log('isMobile', isMobile)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      // we have to do this to prevent the flicker from happening
      // on initial page load
      tl.set(logoRef, { opacity: 1 })

      tl.from(fontRef.querySelectorAll('div'), {
        yPercent: 100,
        ease: 'power3.inOut',
        stagger: 0.05,
        delay: 0.5,
      })
    })

    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#home',
          start: '1px top',
          end: 'bottom center',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      tl.to(
        logoRef,
        isMobile
          ? { top: '0%', left: '0%', transform: 'unset' }
          : { top: '0%', left: '50%' },
        0
      ).to(
        fontRef,
        {
          fontSize: isDesktop
            ? '2vw'
            : isTablet
            ? '4vw'
            : isMobile
            ? '6vw'
            : '10vw',
        },
        0
      )
    })

    return () => ctx.revert()
  }, [width])

  return (
    <>
      <PageHeader ref={(el) => (sectionRef = el)}>
        <Container>
          <NavWrapper>
            <div />
            <NavLinks>
              <li>
                <CustomLink to="#about" className="about">
                  About
                </CustomLink>
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
          {[
            'a',
            's',
            't',
            'r',
            'o\u00A0',
            's',
            't',
            'u',
            'd',
            'i',
            'o',
            's',
          ].map((letter, index) => (
            <LetterWrapper key={index}>{letter}</LetterWrapper>
          ))}
        </Logo>
      </MainLogo>
    </>
  )
}

export default Nav
