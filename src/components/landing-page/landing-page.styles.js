import styled from 'styled-components';
import { color } from '../../variables.styles';

export const LandingPageSection = styled.section`
  height: 100vh;
  position: relative;
  /* background-color: ${color.primaryColorLight}; */
`

export const ImageContainer = styled.div`
  display: inline-flex;
`

const Image = styled.img`
  /* width: 40rem;
  height: 60rem; */
  opacity: 0.8;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 20px 20px  ${color.primaryColor};
  /* filter: brightness(0.8); */
`

export const Image1 = styled(Image)`
  width: 40rem;
  height: 40rem;
  position: relative;
  top: -10rem;
  left: 0rem;
  box-shadow: 40px 60px  ${color.complementColorLight};
`

export const Image2 = styled(Image)`
  width: 60rem;
  height: 60rem;
  position: relative;
  top: 20rem;
  left: -4rem;
  box-shadow: 40px 50px  ${color.primaryColorLight};
`

export const Image3 = styled(Image)`
  width: 50rem;
  height: 50rem;
  position: relative;
  top: 0rem;
  left: 2rem;
  box-shadow: -30px -40px  ${color.secondaryColorLight};
`

export const Image4 = styled(Image)`
  width: 60rem;
  height: 80rem;
  position: relative;
  top: 10rem;
  left: -2rem;
  box-shadow: 30px 30px  ${color.complementColorLight};
`