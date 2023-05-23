import { styled } from 'styled-components'
import { TitleHeader, Z } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 40vw;
  z-index: 1;
`
export const RowWrapper = styled.div`
  position: relative;
  transform: rotate(-6.5deg);
  display: flex;
  width: 100%;
  z-index: ${Z.TEXT};
  align-items: center;
  margin-top: 1vw;
  overflow: hidden;
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
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
`
export const ParagraphWrapper = styled.div`
  max-width: 20rem;
  text-align: center;
`
