import { useEffect, useRef } from 'react'
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
import Ukiyo from 'ukiyojs'

const TeamSection = ({ data }) => {
  let target = useRef()

  useEffect(() => {
    const els = document.querySelectorAll('.ukiyo')
    els.forEach((el) => {
      const parallax = new Ukiyo(el, { scale: 1.1 })
    })
  }, [])

  return (
    <StyledSection ref={target}>
      <Container>
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
      </Container>
      <Line1>
        <Marquee duration={10}>
          <CustomScrollerText>
            {data.marquee}&nbsp;{data.marquee}&nbsp;
          </CustomScrollerText>
        </Marquee>
      </Line1>
      <Container fluid>
        <Parallax speed={1.5} trigger={target}>
          <RightImage>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                data.right_image.data.attributes.url
              }
              alt={data.right_image.data.attributes.alternativeText}
              sizes="(min-width: 520px) 20vw, 40vw"
              fill
              objectFit="cover"
              className="ukiyo"
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
              sizes="(min-width: 520px) 20vw, 40vw"
              fill
              objectFit="cover"
              className="ukiyo"
            />
          </LeftImage>
        </Parallax>
      </Container>
      <Parallax speed={-2} trigger={target}>
        <Line2>
          <Marquee duration={10}>
            <CustomScrollerText>
              {data.marquee}&nbsp;{data.marquee}&nbsp;
            </CustomScrollerText>
          </Marquee>
        </Line2>
      </Parallax>
    </StyledSection>
  )
}

export default TeamSection
