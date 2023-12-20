import { styled } from 'styled-components'
import { media } from 'styles'

export const StyledSection = styled.section`
  position: relative;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.desktop`padding-top: 3rem;`}
  ${media.phablet`text-align: left;`}
`
export const TitleWrapper = styled.div`
  max-width: 40vw;
  margin: 0 auto;

  ${media.desktop`max-width: 40rem;`}
  ${media.phablet`margin: 0;`}
`
export const TextWrapper = styled.div`
  max-width: 40vw;
  margin: 0 auto;
  padding-top: 1.5vw;

  ${media.desktop`
    max-width: 40rem;
    padding-top: 1.25rem;
  `}
`
