import styled from 'styled-components';
// import { color } from '../../variables.styles';

export const HeaderStyles = styled.div`
  height: 100vh;
`;

export const Circle = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 100%;
  margin: 5rem;
  background-color: ${(props) => props.backgroundColor};
`;
