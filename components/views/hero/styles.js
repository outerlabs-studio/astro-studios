import styled from 'styled-components'
import { Z } from 'styles'

export const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${Z.NORMAL_SECTION};
  text-align: center;
`
export const ScrollWrapper = styled.div`
  position: absolute;
  top: 80%;
  transform: translateY(-80%);
`
