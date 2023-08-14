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
  ButtonWrapper,
} from './styles'
import { useIsomorphicLayoutEffect, useMedia } from 'react-use'
import gsap from 'gsap'
import StarIcon from 'components/star'
import CustomButton from 'components/button'
import Parallax from 'components/parallax'

const ContactSection = ({ data }) => {
  let sectionRef = useRef(null)
  let ferrisWheelRef = useRef(null)
  let itemRef = useRef([])
  let animRow = useRef([])

  const huge = useMedia(`(min-width: 1700px)`) || false // custom size
  const desktop = useMedia(`(max-width: ${sizes.desktop}px)`) || false
  const tablet = useMedia(`(max-width: ${sizes.tablet}px)`) || false

  useIsomorphicLayoutEffect(() => {
    console.log(huge)
    let ctx = gsap.context(() => {
      let radius = huge ? 450 : tablet ? 200 : desktop ? 280 : 360

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
  }, [huge, desktop, tablet])

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
                  {data.title_line1}
                </TitleHeader>
              </OverflowWrapper>
              <OverflowWrapper>
                <TitleHeader
                  ref={(el) => (animRow.current[1] = el)}
                  id="second"
                >
                  {data.title_line2}
                </TitleHeader>
              </OverflowWrapper>
              <TextWrapper ref={(el) => (animRow.current[2] = el)}>
                <ArticleBase>{data.description}</ArticleBase>
              </TextWrapper>
              <ButtonWrapper ref={(el) => (animRow.current[3] = el)}>
                <CustomButton href={`mailto:${data.email}`}>
                  {data.button}
                </CustomButton>
              </ButtonWrapper>
            </div>
          </Parallax>
        </Card>
      </CustomContainer>
    </SectionWrapper>
  )
}

export default ContactSection
