import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  padding-bottom: 10px;
  text-align: center;
`;

export const Header = styled.h3`
  text-transform: capitalize;
  border-bottom: ${p => p.theme.border};
  width: 100%;
`;

export const Paragraph = styled.p`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const Phone = styled.span`
  color: tomato;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  display: block;
  border-radius: 12px;
  padding: 5px 10px;
  max-width: 200px;
  text-align: center;
  background-color: ${p => p.theme.color.blue};
  color: white;
  transition: ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.blueHover};
  }
`;

export const PhoneLink = styled.a`
  display: block;
  border-radius: 12px;
  padding: 5px 10px;
  max-width: 200px;
  text-align: center;
  background-color: ${p => p.theme.color.blue};
  color: white;
  transition: ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.blueHover};
  }
`;
