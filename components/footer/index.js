import { TitleSubheader } from 'styles'
import { ButtonWrapper, ContentWrapper, FooterWrapper } from './styles'
import { CustomButton } from 'components'

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <TitleSubheader>we’re feeling a bit silly. wbu?</TitleSubheader>
        <ButtonWrapper>
          <CustomButton href="/contact">Let's talk instead</CustomButton>
        </ButtonWrapper>
      </ContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
