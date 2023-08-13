import { useRef } from 'react'
import Image from 'next/image'
import { ArticleBase, OverflowWrapper, TitleHeader, sizes } from 'styles'
import {
  FerrisWheel,
  SectionWrapper,
  ItemWrapper,
  TextWrapper,
  Card,
  CustomContainer,
} from './styles'
import { useIsomorphicLayoutEffect, useMedia } from 'react-use'
import gsap from 'gsap'
import StarIcon from 'components/star'
import CustomButton from 'components/button'
import Parallax from 'components/parallax'

const ContactSection = () => {
  let sectionRef = useRef(null)
  let ferrisWheelRef = useRef(null)
  let itemRef = useRef([])
  let animRow = useRef([])

  const desktop = useMedia(`(max-width: ${sizes.desktop}px)`) || false
  const tablet = useMedia(`(max-width: ${sizes.tablet}px)`) || false

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let radius = tablet ? 200 : desktop ? 280 : 360

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })

      itemRef.current.forEach((itemAnim, i) => {
        let numItems = itemRef.current.length
        let rotation = i * (360 / numItems)
        gsap.set(itemAnim, { left: '50%', top: '50%' })
        gsap.set(itemAnim.querySelector('svg'), {
          transformOrigin: '40px 8px',
          x: radius - 40,
          y: -6,
          rotation: -rotation,
        })
        gsap.set(itemAnim, {
          transformOrigin: 'left center',
          rotation: rotation,
          width: radius,
        })
      })

      gsap.set(ferrisWheelRef, { width: radius * 2.5, height: radius * 2.5 })

      tl.to(ferrisWheelRef, {
        rotation: 360,
        duration: 8,
        ease: 'none',
      })

      itemRef.current.forEach((itemAnim, i) => {
        tl.to(
          itemAnim.querySelector('svg'),
          { rotation: '-=360', duration: 8, ease: 'none' },
          0
        )
      })
    })

    return () => ctx.revert()
  }, [desktop, tablet])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from(
        [animRow.current[0], animRow.current[1]],
        {
          yPercent: -120,
          ease: 'power3.out',
          stagger: 0.2,
          duration: 1,
        },
        0
      ).from(
        [animRow.current[2], animRow.current[3]],
        {
          opacity: 0,
          ease: 'power3.out',
        },
        0.5
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper id="contact" ref={sectionRef}>
      <CustomContainer>
        <FerrisWheel ref={(el) => (ferrisWheelRef = el)}>
          <ItemWrapper ref={(el) => (itemRef.current[0] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[1] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[2] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[3] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[4] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[5] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[6] = el)}>
            <StarIcon />
          </ItemWrapper>
          <ItemWrapper ref={(el) => (itemRef.current[7] = el)}>
            <StarIcon />
          </ItemWrapper>
        </FerrisWheel>
        <Card>
          <Parallax speed={0.5} trigger={sectionRef}>
            <div>
              <OverflowWrapper>
                <TitleHeader ref={(el) => (animRow.current[0] = el)}>
                  Tell us
                </TitleHeader>
              </OverflowWrapper>
              <OverflowWrapper>
                <TitleHeader
                  ref={(el) => (animRow.current[1] = el)}
                  id="second"
                >
                  your story
                </TitleHeader>
              </OverflowWrapper>
              <TextWrapper ref={(el) => (animRow.current[2] = el)}>
                <ArticleBase>
                  Want to share your story with the world? Fill out this form
                  and we'll reach out when we have a show we think you'd be a
                  good fit for. No experience necessary! (Must be based in LA or
                  NY)
                </ArticleBase>
              </TextWrapper>
              <div ref={(el) => (animRow.current[3] = el)}>
                <CustomButton href="/contact">Contact</CustomButton>
              </div>
            </div>
          </Parallax>
        </Card>
      </CustomContainer>
    </SectionWrapper>
  )
}

export default ContactSection
