import { useRef, useState } from 'react'
import CustomButton from 'components/button'
import CustomLink from 'components/link'
import gsap from 'gsap'
import { Container, Logo, OverflowWrapper, sizes } from 'styles'
import {
  LetterWrapper,
  LogoLink,
  LogoWrapper,
  MainLogo,
  NavLinks,
  NavWrapper,
  PageHeader,
} from './styles'
import {
  useIsomorphicLayoutEffect,
  useMedia,
  useStartTyping,
  useWindowSize,
} from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'

const Nav = ({ logo }) => {
  let sectionRef = useRef(null)
  let logoRef = useRef(null)
  let fontRef = useRef(null)
  let linksRef = useRef([])
  let letterRef = useRef([])
  const [finishedScroll, setFinishedScroll] = useState(false)

  const root = useRef()
  const { width } = useWindowSize()
  const lenis = useLenis()

  const isMobile = useMedia(`(min-width: ${sizes.tiny})px`) || false

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      // we have to do this to prevent the flicker from happening
      // on initial page load
      tl.set(sectionRef, { opacity: 1 })
      tl.set('#logo', { opacity: 1 })

      tl.from(
        fontRef.querySelectorAll('div'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.03,
          ease: 'power3.inOut',
        },
        0
      )
        .from(
          linksRef.current[0],
          {
            yPercent: 100,
            ease: 'power3.inOut',
            duration: 1,
          },
          0.3
        )
        .from(
          linksRef.current[1],
          {
            scale: 0,
            ease: 'power3.inOut',
            duration: 0.5,
          },
          0.6
        )
    })

    return () => ctx.revert()
  }, [width])

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

      tl.to(logoRef, { top: '0%', left: '0%', transform: 'unset' }, 0).to(
        fontRef,
        {
          fontSize: width > sizes.desktop ? '1.8vw' : '24px',
          onComplete: () => setFinishedScroll(true),
          onReverseComplete: () => setFinishedScroll(false),
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
              <OverflowWrapper>
                <li ref={(el) => linksRef.current.push(el)}>
                  <CustomLink
                    id="nav-link"
                    href="#about"
                    className="about"
                    target="_self"
                  >
                    About
                  </CustomLink>
                </li>
              </OverflowWrapper>
              <li ref={(el) => linksRef.current.push(el)}>
                <CustomButton href="#contact">Contact</CustomButton>
              </li>
            </NavLinks>
          </NavWrapper>
        </Container>
      </PageHeader>

      <MainLogo $isLink={finishedScroll} ref={(el) => (logoRef = el)}>
        <Logo ref={(el) => (fontRef = el)} id="logo">
          <LogoLink
            $isLink={finishedScroll}
            href={finishedScroll ? '/' : undefined}
            aria-disabled={!finishedScroll}
            onClick={(e) => {
              e.preventDefault()
              if (finishedScroll) {
                setFinishedScroll(false)
                lenis.scrollTo(0)
              }
            }}
          >
            {logo.split('').map((letter, index) => (
              <LetterWrapper key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </LetterWrapper>
            ))}
          </LogoLink>
        </Logo>
      </MainLogo>
    </>
  )
}

export default Nav
