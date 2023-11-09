import { styled } from 'styled-components'
import { media } from 'styles'

export const StyledSection = styled.section`
  position: relative;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.phablet`
    text-align: left;
    
  `}
`
export const TitleWrapper = styled.div`
  max-width: 27rem;
  margin: 0 auto;

  ${media.phablet`margin: 0;`}
`
export const TextWrapper = styled.div`
  max-width: 39rem;
  margin: 0 auto;
  padding-top: 1.25rem;
`
