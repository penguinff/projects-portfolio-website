import styled from 'styled-components';
import { color } from '../../variables.styles';

export const HeaderSection = styled.nav`
  position: sticky;
  top: 0;
  width: 40%;
  float: right;
  z-index: 1000;
  padding: 3rem;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${props => props.headerColor};
`

export const Link = styled.a`
  color: ${color.fontColor};
  font-family: 'Covered By Your Grace', cursive;
  font-size: 2.5rem;
  text-decoration: none;
  position: relative;

  &:hover {
    color: white;
  }

  &:after{
    content: '';
    position: absolute;
    top: 0.8rem;
    left: -0.5rem;
    width: 7rem;
    height: 2rem;
    transform: skew(20deg);
    background-color: transparent;
    z-index: -10;
  }

  &:hover:after{
    background-color: ${color.primaryColor};
  }
`;

export const Link2 = styled(Link)`
  &:after {
    top: 0.5rem;
    height: 2.5rem;
    transform: skew(-25deg);
  }

  &:hover:after{
    background-color: ${color.secondaryColor};
  }
`
