import styled from 'styled-components'
import { Container, Logo, Z, media } from 'styles'

export const PageHeader = styled.header`
  position: fixed;
  z-index: ${Z.PAGE_HEADER};
  width: 100%;
  padding-bottom: 5vw;
`
export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3vw 0 2vw;
`
export const InvisWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 2vw;
  z-index: ${Z.LOGO};
`
export const MainLogo = styled(Container)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2vw;
  z-index: ${Z.LOGO};

  opacity: 0; // reset for initial page load
`
export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li:last-child {
    margin-left: 16px;
  }
`
export const LetterWrapper = styled.div`
  display: inline-block;
  overflow: hidden;

  div {
    display: inline-block;
  }
`
