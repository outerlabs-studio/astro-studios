import { useEffect, useRef } from 'react'
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
import { useWindowSize } from 'hooks'

const Nav = () => {
  let sectionRef = useRef(null)
  let logoRef = useRef(null)
  let fontRef = useRef(null)
  let letters = useRef([])
  const root = useRef()
  const { width } = useWindowSize()

  useEffect(() => {
    let ctx = gsap.context(() => {
      // we have to do this to fix the fromTo bug in the info component
      // without this, the text will initially be rendered as white
      gsap.to(fontRef, { color: 'var(--blue)' })

      // we have to do this to prevent the flicker from happening
      // on initial page load
      gsap.to(logoRef, { opacity: 1 })

      gsap.from(letters.current, {
        yPercent: 100,
        ease: 'power3.inOut',
        stagger: 0.05,
        delay: 0.5,
      })
    }, [])

    return () => ctx.revert()
  }, root)

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
          <LetterWrapper>
            <div ref={(el) => (letters.current[0] = el)}>a</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[1] = el)}>s</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[2] = el)}>t</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[3] = el)}>r</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[4] = el)}>o&nbsp;</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[5] = el)}>s</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[6] = el)}>t</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[7] = el)}>u</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[8] = el)}>d</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[9] = el)}>i</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[10] = el)}>o</div>
          </LetterWrapper>
          <LetterWrapper>
            <div ref={(el) => (letters.current[11] = el)}>s</div>
          </LetterWrapper>
        </Logo>
      </MainLogo>
    </>
  )
}

export default Nav
