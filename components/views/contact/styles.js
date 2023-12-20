import { styled } from 'styled-components'
import { Container, Z, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 1000px;
  padding: 20vw 0 15vw 0;
  z-index: ${Z.NORMAL_SECTION};
  display: flex;
  align-items: center;

  ${media.desktop`padding: 20rem 0 15rem 0;`}
  ${media.phablet`
    padding: 10vw 0;
    min-height: 0;
  `}

  #second {
    margin-top: -3vw;
  }
`
export const CustomContainer = styled(Container)`
  width: 100%;
`
export const FerrisWheel = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 7%;
  right: -15%;
  color: var(--blue);
  transform-origin: center;
  width: 75vw;
  height: 75vw;
  flex-shrink: 0;

  ${media.bigDesktop`right: -30%;`}
  ${media.desktop`
    width: 750px;
    height: 750px;
    top: 16%;
  `}
  ${media.tablet`right: -30%;`}
  ${media.phablet`display: none;`};
`
export const ItemWrapper = styled.div`
  position: absolute;
  height: 1px;
  z-index: 3;

  svg {
    width: 13vw;
    height: 13vw;
    color: inherit;
    line-height: 50px;

    /* ${media.bigDesktop`width: 15vw; height: 15vw;`} */
    ${media.tablet`width: 20vw; height: 20vw;`}
  }
`
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  padding: 10vw 5vw;
  border-radius: 8vw;
  background-color: var(--blue);
  color: var(--white);
  z-index: 2;
  mix-blend-mode: difference;
  margin-left: 5rem;

  ${media.desktop`
    padding: 6rem 5rem;
    border-radius: 8rem;
  `}
  ${media.giant`margin-left: 0;`}
  ${media.tablet`
    max-width: 100%;
    margin-top: 5rem;
  `}
  ${media.phablet`
    padding: 6rem 2rem;
    border-radius: 4rem;
  `}
`
export const TextWrapper = styled.div`
  max-width: 35vw;
  margin: 4vw 0;

  ${media.desktop`
    max-width: 35rem;
    margin: 4rem 0;
  `}
`
export const ButtonWrapper = styled.div`
  width: fit-content;
`
