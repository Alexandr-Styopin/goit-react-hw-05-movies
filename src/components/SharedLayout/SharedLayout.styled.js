import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  margin-top: 24px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  padding: 16px;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  text-align: center;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  color: #000000;
  &.active {
    background-color: #00868a;
    color: #ffffff;
  }
`;
