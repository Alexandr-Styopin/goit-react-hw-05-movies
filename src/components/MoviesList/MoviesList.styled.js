import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SearchList = styled.ul`
  margin-top: 24px;
`;

export const SearchItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const SearchLink = styled(Link)`
  color: #000000;
`;
