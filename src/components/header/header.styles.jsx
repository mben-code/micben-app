import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const HeaderWrapper = styled.nav`
  background: transparent;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  position: static;
`;

export const HeaderBar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 30px;
  display: flex;
`;

export const RouteItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 0;
`;

export const RouteLink = styled((props) => (
  <NavLink {...props} activeStyle={{ opacity: 0.5 }} />
))`
  font-size: ${({ theme }) => theme.font.fontSize_md};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  padding: 1em 0.5em;
  display: flex;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out 0.1s;
  }
`;
