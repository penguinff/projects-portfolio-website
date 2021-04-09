import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeaderSection, Link, Link2 } from './header.styles';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
 let headerSection = useRef(null);
 const [headerColor, setHeaderColor] = useState('transparent')
  
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: headerSection,
  //     start: 'top -150',
  //     onEnter: () => setHeaderColor('white'),
  //     onEnterBack: () => setHeaderColor('transparent'),
  //     markers: true
  //   })
  // }, []);

  return (
    <HeaderSection ref={el => headerSection = el} headerColor={headerColor}>
      <Link href='#home'>Home</Link>
      <Link2>About</Link2>
      <Link href='#skills'>Skills</Link>
      <Link2 href='#projects'>Projects</Link2>
      <Link href='#contact'>Contact</Link>
    </HeaderSection>
  );
}

export default Header;