import styled from 'styled-components'
import { Z } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--white);
  padding-top: 15vh;
  padding-bottom: 20rem;
  z-index: ${Z.NORMAL_SECTION};
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding-top: 10rem;
`
export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  padding-left: 4rem;
`
export const Line = styled.div`
  background-color: var(--white);
  height: 2px;
  width: 100%;
  margin-top: 5rem;
`
