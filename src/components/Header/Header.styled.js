import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: ${p => p.theme.color.blue};
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`;

export const StyledLink = styled(NavLink)`
  transition: ${p => p.theme.transition};
  font-weight: 800;
  color: white;
  position: relative;
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    color: ${p => p.theme.color.active};

    &::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;

      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: ${p => p.theme.color.active};
    }
  }
`;
