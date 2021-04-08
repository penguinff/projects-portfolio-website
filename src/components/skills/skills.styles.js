import styled from 'styled-components';
import { color } from '../../variables.styles';
import wordcloud from '../../assets/wordcloud-background3.png'

export const SkillsSection = styled.section`
  height: 100vh;
  background-image: url(${wordcloud});
  background-size: cover;
  z-index: -2;
  position: relative;
` 

export const Title = styled.h1`
  margin: 0;
  width: 30rem;
  font-family: 'Permanent Marker', cursive;
  font-size: 5rem;
  letter-spacing: 0.6rem;
  color: ${color.complementColor};
  position: relative;
  display: flex;
  justify-content: center;
  transform: rotate(270deg);

  &:after {
    content: '';
    position: absolute;
    right: -1rem;
    bottom: -0.3rem;
    width: 25rem;
    height: 3rem;
    background-color: ${color.primaryColor};
    opacity: 0.4;
    z-index: -10;
  }
`;

export const Content = styled.div`
  width: 70%;
  margin: 10% auto;
`

export const List = styled.ul`
  padding: 2rem;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Item = styled.li`
  padding: 2rem;
  font-size: 5rem;
  font-family: 'Covered By Your Grace', cursive;
  color: ${color.primaryColor};
  text-shadow: 2px 2px ${color.primaryColorDark};
`