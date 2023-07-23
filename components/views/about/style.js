import styled from 'styled-components'
import { Z, media } from 'styles'

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 20vw;
  z-index: ${Z.NORMAL_SECTION};

  ${media.tablet`padding-bottom: 60vw;`};
  ${media.phablet`padding-bottom: 100vw;`};
`
const ImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 15vw;
  height: 15vw;

  ${media.tablet`
    width: 20vw;
    height: 20vw;
  `};
  ${media.phone`
    width: 30vw;
    height: 30vw;
  `};
`
export const FirstImage = styled(ImageWrapper)`
  left: 45%;
  top: 10%;
  transform: translate(-45%, -10%);

  ${media.phablet`
    top: 5%;
    transform: translate(-10%, -5%);
  `};
`
export const SecondImage = styled(ImageWrapper)`
  right: 10%;
  top: 40%;
  transform: translate(-10%, -40%);

  ${media.phablet`
    top: 30%;
    transform: translate(-10%, -30%);
  `};
`
export const ThirdImage = styled(ImageWrapper)`
  left: 10%;
  top: 60%;
  transform: translate(-10%, -60%);

  ${media.phablet`
    top: 40%;
    transform: translate(-10%, -40%);
  `};
`
export const FourthImage = styled(ImageWrapper)`
  right: 25%;
  top: 90%;
  transform: translate(-25%, -90%);

  ${media.tablet`
    top: 75%;
    transform: translate(-25%, -75%);
  `};
  ${media.phablet`
    top: 60%;
    transform: translate(-25%, -60%);
  `};
`
export const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 15vw;
  text-align: center;
  color: var(--blue);

  ${media.tablet`padding: 0 10vw;`};
  ${media.phone`
    text-align: left;
    padding: 0;
  `};

  span {
    color: var(--orange);
  }
`
