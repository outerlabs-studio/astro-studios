import { styled } from 'styled-components'
import { TitleHeader, Z, media } from 'styles'

export const StyledSection = styled.section`
  position: relative;
  padding: 30vw 0;
  width: 100%;
  text-align: center;

  ${media.tablet`padding: 40vw 0;`}
  ${media.phablet`padding: 20vw 0;`}
`
export const SectionHeader = styled.div`
  padding-bottom: 30vw;

  ${media.desktop`padding-bottom: 60vw;`}
  ${media.phablet`
    padding-top: 100vw;
    padding-bottom: 20vw;
  `}
`
export const TitleWrapper = styled.div`
  margin: 0 auto;
  color: var(--blue);
`
export const TextWrapper = styled.div`
  max-width: 23rem;
  margin: 0 auto;
  padding-top: 1.25rem;
`
const Line = styled.div`
  position: relative;
  background-color: var(--orange);
  color: var(--white);
  width: 117%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${media.phablet`margin-top: -40vw;`};
`
const ImageWrapper = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  width: 20vw;
  height: 30vw;

  ${media.phablet`
    width: 40vw;
    height: 50vw;
    top: 25%;
    transform: translateY(-25%);
  `};
`
export const LeftImage = styled(ImageWrapper)`
  left: 5vw;
  z-index: 1;
`
export const RightImage = styled(ImageWrapper)`
  right: 5vw;
  z-index: 2;
`
export const Line1 = styled(Line)`
  transform: rotate(-25deg);
  margin-left: -8%;
  z-index: 3;
`
export const Line2 = styled(Line)`
  transform: rotate(25deg);
  margin-left: -8%;
  z-index: 0;
`
export const CustomScrollerText = styled(TitleHeader)`
  white-space: nowrap;
`
