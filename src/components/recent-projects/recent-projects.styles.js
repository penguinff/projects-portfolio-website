import styled from 'styled-components';
import { color } from '../../variables.styles';

export const ProjectsSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 90rem;
    height: 55rem;
    background-color: ${color.complementColorLight};
    opacity: 0.8;
    z-index: -20;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Permanent Marker', cursive;
  font-size: 5rem;
  letter-spacing: 0.6rem;
  color: ${color.secondaryColorDark};
  text-shadow: 3px 3px ${color.secondaryColor};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: -5rem;
    bottom: -0.5rem;
    width: 60rem;
    height: 3rem;
    background-color: ${color.complementColor};
    opacity: 0.5;
    z-index: -10;
  }
`;

export const ProjectContainer = styled.div`
  width: 120rem;
  height: 60rem;
  position: relative;
`;


export const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  cursor: pointer;
  border-radius: 8px;
  right: ${props => props.right && 0};
  color: ${color.complementColor};
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${color.secondaryColorDark};
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60rem;
`;

export const Image = styled.div`
  width: 70rem;
  position: relative;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    overflow: hidden;
    width: 70rem;
    height:40rem;
    box-shadow: 0 0 4rem rgba(0, 0, 10, .25);
  
    li {
      width: 70rem;
      height:40rem;
      opacity: 0;
    }
  }

  img {
    width: 70rem;
    height:40rem;
    object-fit: cover;
    transition: all 0.3s;
  }

  &:hover img {
    filter: brightness(85%);
  }

  &:before {
    content: 'Click To See Demo';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Covered By Your Grace', cursive;
    color: white;
    font-size: 2rem;
    padding: 1.5rem;
    z-index: 100;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover:before, &:hover img {
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: -35rem;
    top: -35rem;
    width: 50rem;
    height: 50rem;
    border-radius: 100%;
    background-color: ${color.primaryColorLight};
    opacity: 0.8;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 70rem;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    width: 70rem;
    li {
      width: 70rem;
      color: ${color.fontColor};
      width: 70rem;
      font-size: 1.7rem;
      font-family: 'Covered By Your Grace', cursive;
      letter-spacing: 2px;
      position: absolute;
      opacity: 0;

      h3 {
        overflow:visible;
        &:before {
          content: '';
          position: absolute;
          top: 1rem;
          left: -1.5rem;
          width: 35%;
          height: 2rem;
          background-color: ${color.secondaryColor};
          opacity: 0.5;
          z-index: -10;
        }
        &:after {
          content: '';
          position: absolute;
          top: 2.5rem;
          left: -3.5rem;
          width: 30%;
          height: 2rem;
          background-color: ${color.primaryColor};
          opacity: 0.5;
          z-index: -10;
        }
      }

      a {
        color: ${color.complementColorDark}
      }
    }
  }
`;
