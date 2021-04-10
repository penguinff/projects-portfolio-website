import { AboutMeSection, Photo, TextContainer } from './about-me.styles';

import aboutMePic from '../../assets/aboutme.JPG'

const AboutMe = () => {
  return (
    <AboutMeSection id='about'>
      <Photo src={aboutMePic} alt='me'/>
      <TextContainer>
        <p>I am a highly motivated, self-starting front-end developer seeking to launch a career building web applications.</p>
        <p>I became interested in web development since early 2020.</p>
        <p>Since then, I started self-learning in leisure time and have taken several courses in Udemy.</p>
        <p>In the end of year 2020, I resigned from my full-time job and devoted to web development.</p>
        <p>Besides coding, I enjoy playing baseball and exploring nature.</p>
      </TextContainer>
    </AboutMeSection>
  )
};

export default AboutMe;