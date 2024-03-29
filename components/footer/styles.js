import styled from 'styled-components'
import { Z, media } from 'styles'

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--blue);
  border-top: 0.75vw solid var(--orange);

  ${media.desktop`border-top: 10px solid var(--orange);`}
`
export const ContentWrapper = styled.div`
  position: relative;
  padding: 6vw 0;
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
  margin-top: 10vw;

  ${media.desktop`margin-top: 10rem;`}
`
export const LineWrapper = styled.div`
  position: absolute;
  padding-bottom: 2vw;
  width: 100%;
  bottom: 0;
  z-index: ${Z.PAGE_HEADER};

  ${media.desktop`padding-bottom: 2rem;`}

  p {
    padding-bottom: 0.2rem;
  }
`
export const LineContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  color: var(--white);

  .creds {
    display: flex;
  }

  ${media.phone`flex-direction: column;`};
`
