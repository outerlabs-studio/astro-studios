import { styled } from 'styled-components'
import { TitleHeader, Z, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 15vw;
  padding-bottom: 40vw;
  z-index: 1;

  #hide {
    ${media.tablet`display: none;`};
  }

  ${media.desktop`padding-top: 10rem;`}
  ${media.tablet`padding-bottom: 60vw;`};
  ${media.phablet`padding-bottom: 80vw;`};
`
export const RowWrapper = styled.div`
  position: relative;
  transform: rotate(-6.5deg);
  display: flex;
  width: 100%;
  z-index: ${Z.TEXT};
  align-items: center;
  overflow: hidden;
  // The following two lines helps remove white space
  margin-top: -1vw;
  margin-left: -1.5%;
  width: 102%;
  justify-content: ${(props) =>
    props.reverse
      ? 'flex-end'
      : props.sb
      ? 'space-between'
      : props.se
      ? 'space-evenly'
      : 'unset'};
`
export const RowText = styled(TitleHeader)`
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${({ ml }) => (ml ? ml : 0)}!important;
  margin-right: ${({ mr }) => (mr ? mr : 0)}!important;
`
export const ParagraphWrapper = styled.div`
  max-width: 20vw;
  text-align: center;

  ${media.desktop`max-width: 20rem;`}
`
