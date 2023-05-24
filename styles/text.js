import styled from 'styled-components'

export const Logo = styled.h1`
  font-family: var(--font-logo);
  color: var(--blue);
  font-size: 10vw;
  font-weight: 400;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`
export const TitleHeader = styled.h1`
  font-family: var(--font-title);
  font-size: 9vw; // 128px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 1.2;
  font-kerning: none;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const TitleSubheader = styled.h2`
  font-family: var(--font-title);
  font-size: 7vw; // 96px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 100%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const TitleSubtile = styled.h2`
  font-family: var(--font-title);
  font-size: 3vw; // 48px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 88.3%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const ArticleSubtitle = styled.h3`
  font-family: var(--font-text);
  font-size: 20px; // 20px
  font-weight: 700;
  line-height: 118%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  span {
    color: var(--orange);
  }
`
export const ArticleBase = styled.p`
  font-family: var(--font-text);
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};
`
export const ArticleBody = styled(ArticleBase)`
  font-size: 16px;
`
