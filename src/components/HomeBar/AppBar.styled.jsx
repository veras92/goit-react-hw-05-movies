import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #000;
  margin-right: 10px;
  padding: 10px;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: rgb(148, 13, 27);
    color: #ffffff;
  }
`;
