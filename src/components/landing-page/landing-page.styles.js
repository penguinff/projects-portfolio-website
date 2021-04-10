import styled from 'styled-components';
import { color } from '../../variables.styles';

export const LandingPageSection = styled.section`
  min-height: 100vh;
  position: relative;
`

export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100vw;

  &:before {
    content: '';
    position: absolute;
    left: 65rem;
    top: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background-color: ${color.complementColorLight};
    opacity: 0.4;
    z-index: -20;
  }

  &:after {
    content: '';
    position: absolute;
    top: -10rem;
    right: -5rem;
    width: 0;
    height: 0;
    border-left: 20rem solid transparent;
    border-right: 30rem solid transparent;
    border-bottom: 30rem solid ${color.primaryColorLight};
    opacity: 0.5;
    transform: skewY(-20deg);
    z-index: -20;
  }
`

const Image = styled.img`
  /* width: 40rem;
  height: 60rem; */
  opacity: 0.8;
  object-fit: cover;
  /* filter: brightness(0.9); */
`

export const Image1 = styled(Image)`
  width: 50rem;
  height: 40rem;
  position: relative;
  top: -10rem;
  left: -5rem;
  box-shadow: 40px 60px  ${color.complementColorLight};
`

export const Image2 = styled(Image)`
  width: 50rem;
  height: 50rem;
  position: relative;
  top: 10rem;
  left: -4rem;
  box-shadow: 40px 50px  ${color.primaryColorLight};
`

export const Image3 = styled(Image)`
  width: 40rem;
  height: 40rem;
  position: relative;
  top: -2rem;
  left: 5rem;
  box-shadow: -30px -40px  ${color.secondaryColorLight};
`

export const Image4 = styled(Image)`
  width: 60rem;
  height: 70rem;
  position: relative;
  top: 10rem;
  left: 5rem;
  box-shadow: -30px 30px  ${color.complementColorLight};
  z-index: -1;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 68rem;
  left: 8rem;
  font-size: 3rem;

  &:before {
    content: '';
    position: absolute;
    left: -10rem;
    top: 10rem;
    width: 0;
    height: 0;
    border-left: 30rem solid transparent;
    border-right:30rem solid transparent;
    border-top: 30rem solid ${color.secondaryColorLight};
    opacity: 0.5;
    transform: skewY(10deg);
    z-index: -20;
  }

  &:after {
    content: '';
    position: absolute;
    top: -15rem;
    right: -10rem;
    width: 0;
    height: 0;
    border-left: 20rem solid transparent;
    border-right: 30rem solid transparent;
    border-bottom: 30rem solid ${color.primaryColorLight};
    opacity: 0.5;
    transform: skewY(10deg);
    z-index: -20;
  }
`

export const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
  letter-spacing: 0.6rem;
  color: ${color.primaryColorDark};
  text-shadow: 3px 3px ${color.primaryColor};
`

export const Title2 = styled(Title)`
  color: ${color.primaryColor};
  text-shadow: 3px 3px ${color.primaryColorDark};
`