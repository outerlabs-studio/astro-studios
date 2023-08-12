import styled from 'styled-components'
import { Container, Logo, Z, media } from 'styles'

export const PageHeader = styled.header`
  position: fixed;
  z-index: ${Z.PAGE_HEADER};
  width: 100%;
  padding-bottom: 5vw;
  overflow: hidden;

  opacity: 0; // reset for initial page load
`
export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3vw 0 2vw;

  ${media.tablet`padding: 5vw 0 4vw;`};
  ${media.phone`padding: 7vw 0 4vw;`};
`
export const MainLogo = styled(Container)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: calc((3vw + 3vw) / 2);
  z-index: ${Z.LOGO};
  overflow: hidden;

  #logo {
    opacity: 0; // reset for initial page loads
  }

  ${media.tablet`margin-top: 4vw;`};
  ${media.phone`margin-top: 6vw;`};
`
export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li:first-child {
    ${media.phone`display: none;`};
  }

  li:last-child {
    margin-left: 16px;
    ${media.tiny`display: none;`};
  }
`
export const LetterWrapper = styled.div`
  display: inline-block;
`
