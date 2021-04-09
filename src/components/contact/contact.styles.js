import styled from 'styled-components';
import { color } from '../../variables.styles';

export const ContactSection = styled.section`
  height: 100vh;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -10rem;
    top: 10rem;
    width: 0;
    height: 0;
    border-left: 85rem solid transparent;
    border-right:50rem solid transparent;
    border-top: 70rem solid ${color.primaryColorLight};
    opacity: 0.5;
    transform: skewY(10deg);
    z-index: -20;
  }

  &:after {
    content: '';
    position: absolute;
    top: -10rem;
    right: -5rem;
    width: 0;
    height: 0;
    border-left: 30rem solid transparent;
    border-right: 30rem solid transparent;
    border-bottom: 60rem solid ${color.secondaryColorLight};
    opacity: 0.5;
    transform: skewX(30deg);
    z-index: -20;
  }
` 

export const Title = styled.h1`
  margin-left: 20rem;
  padding: 8rem;
  font-family: 'Permanent Marker', cursive;
  font-size: 5rem;
  letter-spacing: 0.6rem;
  color: ${color.primaryColor};
  text-shadow: 3px 3px ${color.primaryColorDark};
  position: relative;
  display: flex;

  &:after {
    content: '';
    position: absolute;
    left: 4rem;
    bottom: 7.5rem;
    width: 35rem;
    height: 3rem;
    background-color: ${color.secondaryColor};
    opacity: 0.4;
    z-index: -10;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`

`

export const Input = styled.input`
  width: 60rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 1rem 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  font-family: 'Covered By Your Grace', cursive;
  color: ${color.fontColor};
  letter-spacing: 2px;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`

export const InputLarge = styled(Input)`
  height: 20rem;
`

export const Label = styled.label`
  font-family: 'Covered By Your Grace', cursive;
  font-size: 2.5rem;
  color: ${color.primaryColor};
  text-shadow: 1px 1px ${color.secondaryColor};
`

export const Button = styled(Input)`
  width: 15rem;
  height: 4rem;
  color: white;
  background-color: ${color.primaryColor};
  opacity: 0.8;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: skewX(20deg);
    background-color: ${color.complementColor};
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isModalShown ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s;
`

export const Modal = styled.div`
  width: 30rem;
  height: 10rem;
  padding: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Covered By Your Grace', cursive;
  font-size: 2.5rem;
  color: ${color.primaryColorLight};
  text-align: center;
  position: relative;
  z-index: 1000;
  transition: all 0.3;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 32rem;
    height: 12rem;
    background-color: ${color.primaryColor};
    opacity: 0.8;
    transform: skewX(-20deg);
    z-index: -1;
  }
`

export const Cfa = styled.a`
  margin: 5rem;
  padding: 1rem;
  font-family: 'Covered By Your Grace', cursive;
  font-size: 3rem;
  color: ${color.complementColorDark};
  text-shadow: 1px 1px ${color.complementColor};
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 1rem;
    top: 2rem;
    width: 27rem;
    height: 3rem;
    background-color: ${color.complementColorLight};
    transform: skewX(-20deg);
    z-index: -10;
  }

  &:hover {
    color: ${color.complementColorLight};
    text-shadow: 1px 1px ${color.complementColorDark};
  }

  &:hover:after {
    background-color: ${color.complementColorDark};
  }
`