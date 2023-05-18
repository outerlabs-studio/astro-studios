import styled from 'styled-components'

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`
const ImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 15vw;
  height: 15vw;
`
export const FirstImage = styled(ImageWrapper)`
  left: 45%;
  top: 10%;
  transform: translate(-45%, -10%);
`
export const SecondImage = styled(ImageWrapper)`
  right: 10%;
  top: 40%;
  transform: translate(-10%, -40%);
`
export const ThirdImage = styled(ImageWrapper)`
  left: 10%;
  top: 60%;
  transform: translate(-10%, -60%);
`
export const FourthImage = styled(ImageWrapper)`
  right: 25%;
  top: 90%;
  transform: translate(-25%, -90%);
`
export const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 15vw;
  text-align: center;
  color: var(--blue);

  span {
    color: var(--orange);
  }
`
