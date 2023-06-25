import styled from 'styled-components'
import { Z } from 'styles'

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--blue);
  border-top: 10px solid var(--orange);
`
export const ContentWrapper = styled.div`
  position: relative;
  padding: 6vw 0;
  width: 60rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`
export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 10rem;
`
export const LineWrapper = styled.div`
  position: absolute;
  padding-bottom: 2rem;
  width: 100%;
  bottom: 0;
  z-index: ${Z.PAGE_HEADER};
`
export const LineContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  color: var(--white);
`
