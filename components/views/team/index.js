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

const TeamSection = ({ data }) => {
  let target = useRef()

  return (
    <StyledSection ref={target}>
      <Container>
        <SectionHeader>
          <TitleWrapper>
            <TitleSubtile
              dangerouslySetInnerHTML={{
                __html: data.title.replace(/\n/g, '<br/>'),
              }}
            />
          </TitleWrapper>
          <TextWrapper>
            <ArticleBody>{data.description}</ArticleBody>
          </TextWrapper>
        </SectionHeader>
      </Container>
      <Line1>
        <Marquee duration={10}>
          <CustomScrollerText>
            {data.marquee} {data.marquee}
          </CustomScrollerText>
        </Marquee>
      </Line1>
      <Container fluid>
        <Parallax speed={2} trigger={target}>
          <RightImage>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                data.right_image.data.attributes.url
              }
              alt={data.right_image.data.attributes.alternativeText}
              quality={90}
              style={{ borderRadius: 'inherit', objectFit: 'contain' }}
              fill
            />
          </RightImage>
        </Parallax>
        <Parallax speed={-2} trigger={target}>
          <LeftImage>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                data.left_image.data.attributes.url
              }
              alt={data.left_image.data.attributes.alternativeText}
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
              {data.marquee} {data.marquee}
            </CustomScrollerText>
          </Marquee>
        </Line2>
      </Parallax>
    </StyledSection>
  )
}

export default TeamSection
