import styled from 'styled-components'
import media from './_media'

export const Logo = styled.h1`
  font-family: var(--font-logo);
  color: var(--blue);
  font-size: 10vw;
  font-weight: 400;
  white-space: nowrap;
  margin: 0;
  padding: 0;

  ${media.tablet`font-size: 13vw;`};
`
export const TitleHeader = styled.h1`
  font-family: var(--font-title);
  font-size: 9vw; // 128px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 1.2;
  font-kerning: none;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  ${media.tablet`font-size: 10vw;`};
  ${media.phone`font-size: 15vw;`};
`
export const TitleSubheader = styled.h2`
  font-family: var(--font-title);
  color: var(--white);
  font-size: 7vw; // 96px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 100%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  ${media.phablet`font-size: 10vw;`};
`
export const TitleSubtile = styled.h2`
  font-family: var(--font-title);
  font-size: 3vw; // 48px
  font-weight: 500;
  letter-spacing: -2%;
  line-height: 88.3%;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  ${media.tablet`font-size: 5vw;`};
  ${media.phablet`font-size: 7vw;`};
`
export const ArticleSubtitle = styled.h3`
  font-family: var(--font-text);
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 1.2;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  ${media.desktop`font-size: 24px;`}

  span {
    color: var(--orange);
  }
`
export const ArticleBase = styled.p`
  font-family: var(--font-text);
  font-size: 1.3vw;
  font-weight: 400;
  line-height: 1.3;
  margin: ${({ nm, m }) => (nm ? 0 : m ? m : 'unset')};

  ${media.desktop`font-size: 18px;`}
`
export const ArticleBody = styled(ArticleBase)`
  font-size: 1.2vw;

  ${media.desktop`font-size: 16px;`}
`
