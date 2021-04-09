import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SkillsSection, Title, Content, List, Item } from './skills.styles';

gsap.registerPlugin(ScrollTrigger);

const skillsArray = ['HTML5', 'CSS3', 'Sass', 'Materialize', 'CSS Modules', 'styled-components', 'JavaScript', 'ES6', 'React', 'Redux', 'Redux-Saga', 'D3.js', 'GSAP', 'Firebase', 'Git', 'GitHub', ''];

const Skills = () => {
  let section = useRef(null);
  let title = useRef(null);
  let list = useRef([]);
  list.current = [];

  const addToRef = el => {
    if (el && !list.current.includes(el)) {
      list.current.push(el)
    }
  }

  useEffect(() => {
    gsap.fromTo(title, {opacity: 0, y:'80vh'}, {opacity: 1, y: '20vh',
      scrollTrigger: {trigger: section, start: 'top 80%', end: 'top 20%', scrub: 4, toggleActions: 'restart none none none'}})
    gsap.from(list.current, {duration: 3, x: 'random(-80, 80)', y: 'random(-80, 80)', opacity: 0, stagger: 2,
      scrollTrigger: {trigger: section, start: 'top top', scrub: 2, toggleActions: 'restart none none none', pin: section}})
  }, []);

  return (
    <SkillsSection ref={el => section = el} id='skills'>
      <Title ref={el => title = el}>
        Skills
      </Title>
      <Content>
        <List>
          {skillsArray.map((skill, index) => 
            <Item key={index} ref={addToRef}>{skill}</Item>
          )}
        </List>
      </Content>
    </SkillsSection>
  )
}

export default Skills;