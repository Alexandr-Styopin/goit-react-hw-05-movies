import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TrendingList = styled.ul`
  margin-top: 24px;
`;

export const TrendingItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const TrendingLink = styled(Link)`
  color: #000000;
`;
