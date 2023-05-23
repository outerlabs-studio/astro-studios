import { ArticleBody, ArticleSubtitle, Container } from 'styles'
import { StyledSection, TextWrapper, TitleWrapper } from './style'

const SmallInfoSection = () => {
  return (
    <StyledSection>
      <Container fluid>
        <TitleWrapper>
          <ArticleSubtitle>
            Lorem ipsum dolor sit <span>amet</span>, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </ArticleSubtitle>
        </TitleWrapper>
        <TextWrapper>
          <ArticleBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ArticleBody>
        </TextWrapper>
      </Container>
    </StyledSection>
  )
}

export default SmallInfoSection
