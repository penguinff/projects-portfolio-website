import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AboutMeSection, Title, Content, PhotoContainer, Photo, TextContainer } from './about-me.styles';

import aboutMePic from '../../assets/aboutme.JPG';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  let title = useRef(null);
  let list = useRef([]);
  list.current = [];

  const addToRef = el => {
    if (el && !list.current.includes(el)) {
      list.current.push(el)
    }
  }

  useEffect(() => {
    gsap.from(title, {duration: 1.5, opacity: 0, x: 150,
      scrollTrigger: {trigger: title, start: 'top 95%', end: 'top 20%', scrub: 4, toggleActions: 'restart none none none'}});
    gsap.from(list.current, {duration: 1.5, y: 20, opacity: 0, stagger: 3,
      scrollTrigger: {trigger: title, start: 'top 30%', end: 'top 30%', scrub: 3, toggleActions: 'restart none none none'}})
    }, []);

  return (
    <AboutMeSection id='about'>
      <Title ref={el => title = el}>About Me</Title>
      <Content>
        <PhotoContainer>
          <Photo src={aboutMePic} alt='me'/>
        </PhotoContainer>
        <TextContainer>
          <p ref={addToRef}>I am a highly motivated, self-starting front-end developer seeking to launch a career building web applications.</p>
          <p ref={addToRef}>I became interested in web development since early 2020.</p>
          <p ref={addToRef}>Since then, I started self-learning in leisure time and have taken several courses in Udemy.</p>
          <p ref={addToRef}>In the end of year 2020, I resigned from my full-time job and devoted to web development.</p>
          <p ref={addToRef}>Besides coding, I enjoy playing baseball and exploring nature.</p>
        </TextContainer>
      </Content>
    </AboutMeSection>
  )
};

export default AboutMe;