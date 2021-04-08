import { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';

import { HeaderStyles, Circle } from './header.styles';
import { color } from '../../variables.styles';

const Header = () => {
  let app = useRef(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circle2, .8, {width: 200, height: 200, ease: Power3.easeOut});
    setExpanded(true);
  }
  const handleShrink = () => {
    TweenMax.to(circle2, .8, {width: 75, height: 75, ease: Power3.easeOut});
    setExpanded(false);
  }
  
  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}});
    TweenMax.staggerFrom([circle1, circle2, circle3], .8, {opacity:0, x:40, ease: Power3.easeOut}, .2);
  }, []);

  return (
    <HeaderStyles ref={el => app = el}>
      <Circle ref={el => circle1 = el} backgroundColor={color.primaryColor}/>
      <Circle onClick={expanded ? handleShrink : handleExpand} ref={el => circle2 = el} backgroundColor={color.secondaryColor}/>
      <Circle ref={el => circle3 = el} backgroundColor={color.complementColor}/>
    </HeaderStyles>
  );
}

export default Header;