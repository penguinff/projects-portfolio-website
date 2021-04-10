import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LandingPageSection, ImageContainer, Image1, Image2, Image3, Image4, TitleContainer, Title, Title2 } from './landing-page.styles';

import oceanPic from '../../assets/ocean.jpg';
import divingPic from '../../assets/diving4.jpg';
import planePic from '../../assets/plane4.jpg';
import melPic from '../../assets/mel2.jpg';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  let section = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let title1 = useRef(null);
  let title2 = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(image1, {duration: 1, opacity: 0, y: -150});
    tl.from(image2, {duration: 1, opacity: 0, y: 150});
    tl.from(image3, {duration: 1, opacity: 0, y: -150});
    tl.from(image4, {duration: 1, opacity: 0, y: 150});
    tl.from(title1, {duration: 1, opacity: 0, y: 10});
    tl.from(title2, {duration: 1, opacity: 0, y: 10});
    gsap.fromTo(image1, {y: 0}, {y: 250, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 1, toggleActions: 'restart none none none'}});
    gsap.fromTo(image3, {y: 0}, {y: 100, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 1, toggleActions: 'restart none none none'}});
    gsap.fromTo(image2, {y: 0}, {y: -150, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 1, toggleActions: 'restart none none none'}});
    gsap.fromTo(image4, {y: 0}, {y: -200, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 1, toggleActions: 'restart none none none'}});
    gsap.fromTo(title1, {y: 0}, {y: -50, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 2, toggleActions: 'restart none none none'}});
    gsap.fromTo(title2, {y: 0}, {y: -100, 
      scrollTrigger: {trigger: section, start: 'top -10%', end: 'top -50%', scrub: 2, toggleActions: 'restart none none none'}});
  }, []);

  return (
    <LandingPageSection id='home' ref={el => section = el}>
      <ImageContainer>
        <Image1 ref={el => image1 = el} src={oceanPic} alt='image1'/>
        <Image2 ref={el => image2 = el} src={divingPic} alt='image2'/>
        <Image3 ref={el => image3 = el} src={planePic} alt='image3'/>
        <Image4 ref={el => image4 = el} src={melPic} alt='image4'/>
      </ImageContainer>
      <TitleContainer>
        <Title ref={el => title1 = el}>Hello, I'm Christine.</Title>
        <Title2 as='h2' ref={el => title2 = el}>A Front-end Developer living in Taipei, Taiwan.</Title2>
      </TitleContainer>
    </LandingPageSection>
  )
}

export default LandingPage;