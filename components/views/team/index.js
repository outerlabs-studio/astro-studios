import { useRef } from 'react'
import Image from 'next/image'
import { ArticleBody, Container, TitleSubtile, TitleHeader } from 'styles'
import {
  StyledSection,
  TextWrapper,
  TitleWrapper,
  Line1,
  CustomScrollerText,
  Line2,
  SectionHeader,
  LeftImage,
  RightImage,
} from './style'
import { Marquee, Parallax } from 'components'

const TeamSection = () => {
  let target = useRef()

  return (
    <StyledSection>
      <SectionHeader>
        <TitleWrapper>
          <TitleSubtile>
            built different,
            <br />
            just like you
          </TitleSubtile>
        </TitleWrapper>
        <TextWrapper>
          <ArticleBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </ArticleBody>
        </TextWrapper>
      </SectionHeader>
      <Line1>
        <Marquee duration={10}>
          <CustomScrollerText>
            For teens by teens - For teens by teens -
          </CustomScrollerText>
        </Marquee>
      </Line1>
      <Container fluid>
        <Parallax speed={2} trigger={target}>
          <RightImage>
            <Image
              src="/images/2.png"
              alt="2"
              quality={90}
              style={{ borderRadius: 'inherit', objectFit: 'contain' }}
              fill
            />
          </RightImage>
        </Parallax>
        <Parallax speed={-2} trigger={target}>
          <LeftImage>
            <Image
              src="/images/1.png"
              alt="1"
              quality={90}
              style={{ borderRadius: 'inherit', objectFit: 'contain' }}
              fill
            />
          </LeftImage>
        </Parallax>
      </Container>
      <Parallax speed={-2} trigger={target}>
        <Line2>
          <Marquee duration={10}>
            <CustomScrollerText>
              For teens by teens - For teens by teens -
            </CustomScrollerText>
          </Marquee>
        </Line2>
      </Parallax>
    </StyledSection>
  )
}

export default TeamSection
