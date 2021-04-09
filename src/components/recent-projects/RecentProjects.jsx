import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Title, ProjectsSection, ProjectContainer, Arrow, Inner, Image, Content } from './recent-projects.styles';

import { ReactComponent as LeftArrow } from '../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';
import FloralAccessories from '../../assets/floral-accessories.png';
import Covid19Dashboard from '../../assets/covid19-dashboard.png';
import PortfolioWebsite from '../../assets/portfolio-website.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Floral Accessories',
    description: 'Built responsive E-commerce website with Firebase as the Backend-as-a-Service.',
    skills: 'React, Redux, Redux-Saga, Sass, CSS Modules, Firebase',
    github: 'https://github.com/penguinff/projects-floral-accessories',
    demo: 'https://floral-accessories.herokuapp.com/',
    image: `${FloralAccessories}`
  },
  {
    name: 'COVID-19-Dashboard',
    description: 'Built data visualization using the latest world COVID-19 data from a third-party API.',
    skills: 'D3.js, React, Materialize CSS',
    github: 'https://github.com/penguinff/projects-covid19-dashboard',
    demo: 'https://covid-19-dashboard-penf.herokuapp.com/',
    image: `${Covid19Dashboard}`
  },
  {
    name: 'Portfolio Website',
    description: 'Built my own portfolio website with fancy design and animation.',
    skills: 'GSAP, React, styled-components',
    github: 'https://github.com/penguinff/projects-portfolio-website',
    demo: '',
    image: `${PortfolioWebsite}`
  },
];

const RecentProjects = () => {
  let title = useRef(null);
  let imageList = useRef(null);
  let projectList = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    gsap.from(title, {duration: 1.5, opacity: 0, x: 200, 
      scrollTrigger: {trigger: title, start: 'top 95%', end: 'top 20%', scrub: 4, toggleActions: 'restart none none none'}});
    gsap.to(imageList.children, {duration: .5, opacity: 1, delay: .5});
    gsap.fromTo(projectList, {opacity: 0, x: -200}, {duration: 1.5, opacity: 1, x: 0, 
      scrollTrigger: {trigger: title, start: 'top 50%', end: 'top 20%', scrub: 4, toggleActions: 'restart none none none'}});
  }, []);

  useEffect(() => {
    gsap.to(projectList.children, {duration: .5, opacity: 0});
    gsap.to(projectList.children[activeSlide], {duration: .5, opacity: 1, delay: .5});
  }, [activeSlide]);

  const imageWidth = 700;

  const changeSlide = (value) => {
    if (activeSlide === 0 && value === -1) {
      setActiveSlide(projects.length - 1);
      gsap.to(imageList.children, {duration: 1, x: -imageWidth*(projects.length - 1), ease: 'power3.easeOut'})
      gsap.from(imageList.children[projects.length - 1], {duration: 1, scale: 1.2, ease: 'power3.easeOut'});
    } else if (activeSlide === projects.length - 1 && value === 1) {
      setActiveSlide(0);
      gsap.to(imageList.children, {duration: 1, x: 0, ease: 'power3.easeOut'})
      gsap.from(imageList.children[0], {duration: 1, scale: 1.2, ease: 'power3.easeOut'});
    } else {
      setActiveSlide(activeSlide + value);
      gsap.to(imageList.children, {duration: 1, x: -imageWidth*(activeSlide+value), ease: 'power3.easeOut'});
      gsap.from(imageList.children[activeSlide + value], {duration: 1, scale: 1.2, ease: 'power3.easeOut'});
    }
  }

  return (
    <ProjectsSection id='projects'>
      <Title ref={el => title = el}>
        My Recent Projects
      </Title>
      <ProjectContainer>
        <Arrow onClick={() => changeSlide(-1)}>
          <LeftArrow />
        </Arrow>
        <Inner>
          <Image>
            <ul ref={el => imageList = el}>
              {projects.map((project, index) => (
                <li key={index}>
                  <a href={project.demo} target='_blank' rel='noreferrer'>
                    <img src={project.image} alt={projects.name} />
                  </a>
                </li>
              ))}
            </ul>
          </Image>
          <Content>
            <ul ref={el => projectList = el}>
              {projects.map((project, index) => (
                <li key={index}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <h4>{project.skills}</h4>
                  <a href={project.github} target='_blank' rel='noreferrer'>{project.github}</a>
                </li>
              ))}
            </ul>
          </Content>
        </Inner>
        <Arrow right='true' onClick={() => changeSlide(1)}>
          <RightArrow />
        </Arrow>
      </ProjectContainer>
    </ProjectsSection>
  )
};

export default RecentProjects;