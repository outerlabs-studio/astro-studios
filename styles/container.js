import styled from 'styled-components'
import media from './_media'

const Container = styled.div`
  width: 100%;
  height: inherit;
  padding-right: 3vw;
  padding-left: 3vw;
  margin-right: auto;
  margin-left: auto;

  ${media.phablet`
    padding-right: 5vw;
    padding-left: 5vw;
  `};
`

export default Container
