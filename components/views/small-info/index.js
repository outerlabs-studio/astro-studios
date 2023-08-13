import { ArticleBody, ArticleSubtitle, Container } from 'styles'
import { StyledSection, TextWrapper, TitleWrapper } from './style'

const SmallInfoSection = ({ data }) => {
  return (
    <StyledSection>
      <Container fluid>
        <TitleWrapper>
          <ArticleSubtitle
            dangerouslySetInnerHTML={{
              __html: data.subtitle.replace(/\n/g, '<br/>'),
            }}
          />
        </TitleWrapper>
        <TextWrapper>
          <ArticleBody>{data.description}</ArticleBody>
        </TextWrapper>
      </Container>
    </StyledSection>
  )
}

export default SmallInfoSection
