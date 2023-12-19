import styled from 'styled-components'
import { Container, Z, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--white);
  padding: 25vh 0;
  z-index: ${Z.NORMAL_SECTION};
`
export const CustomContainer = styled(Container)`
  width: 100%;
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding-top: 10rem;

  ${media.phablet`flex-direction: column;`};
`
export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  padding-left: 4rem;

  ${media.phablet`padding: 2rem 0 0 0;`};
`
export const Line = styled.div`
  background-color: var(--white);
  height: 2px;
  width: 100%;
  margin-top: 5rem;
`
