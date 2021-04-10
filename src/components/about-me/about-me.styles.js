import styled from 'styled-components';
import { color } from '../../variables.styles';

import leftQuote from '../../assets/quote-left-solid.svg';
import rightQuote from '../../assets/quote-right-solid.svg';

export const AboutMeSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  width: 30rem;
  margin: 8rem 20vw;
  font-family: 'Permanent Marker', cursive;
  font-size: 5rem;
  letter-spacing: 0.6rem;
  color: ${color.secondaryColor};
  text-shadow: 3px 3px ${color.secondaryColorDark};
  position: relative;
  align-self: flex-end;
  top: 5rem;

  &:after {
    content: '';
    position: absolute;
    left: 2rem;
    top: 3rem;
    width: 30rem;
    height: 3rem;
    background-color: ${color.primaryColor};
    opacity: 0.4;
    z-index: -10;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const PhotoContainer = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 5rem;
  position: relative;

  &:before {
    content: '';
    width: 50rem;
    height: 50rem;
    background-color: ${color.secondaryColorLight};
    opacity: 0.8;
    position: absolute;
    top: -13rem;
    left: 13rem;
    z-index: -10;
  }

  &:after {
    content: '';
    width: 50rem;
    height: 50rem;
    background-color: ${color.primaryColorLight};
    opacity: 0.8;
    position: absolute;
    top: 20rem;
    right: 20rem;
    z-index: -10;
  }
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 40% bottom;
  opacity: 0.9;
`

export const TextContainer = styled.div`
  color: ${color.fontColor};
  font-size: 1.7rem;
  font-family: 'Covered By Your Grace', cursive;
  letter-spacing: 2px;
  padding: 5rem;
  position: relative;

  &:before {
    content: url(${leftQuote});
    width: 5rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: url(${rightQuote});
    width: 5rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`