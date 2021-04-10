import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeaderSection, Link, Link2 } from './header.styles';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
 let headerSection = useRef(null);
 const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    ScrollTrigger.create({
      trigger: headerSection,
      start: 'top -150',
      onEnter: () => setVisible(true),
      onEnterBack: () => setVisible(false),
      // markers: true
    })
  }, []);

  return (
    <HeaderSection ref={el => headerSection = el} visible={visible}>
      <Link href='#home'>Home</Link>
      <Link2 href='#about'>About</Link2>
      <Link href='#skills'>Skills</Link>
      <Link2 href='#projects'>Projects</Link2>
      <Link href='#contact'>Contact</Link>
    </HeaderSection>
  );
}

export default Header;