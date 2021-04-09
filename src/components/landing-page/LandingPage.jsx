import { LandingPageSection, ImageContainer, Image1, Image2, Image3, Image4 } from './landing-page.styles';

const LandingPage = () => {
  return (
    <LandingPageSection id='home'>
      <ImageContainer>
        <Image1 src='https://images.unsplash.com/photo-1591055749071-927e6ddffc82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='image1'/>
        <Image2 src='https://images.unsplash.com/photo-1539498508910-091b5e859b1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80' alt='image2'/>
        <Image3 src='https://images.unsplash.com/photo-1546622136-93da96f1513e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80' alt='image3'/>
        <Image4 src='https://images.unsplash.com/photo-1610934993300-91bb90c580dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80' alt='image4'/>
      </ImageContainer>
    </LandingPageSection>
  )
}

export default LandingPage;