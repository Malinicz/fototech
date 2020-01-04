import { Link } from 'react-static';
import styled from 'styles';

export const LevelLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.secondaryDarker};
  margin: ${({ theme }) => `${theme.spacing}px 0`};

  &:hover {
    opacity: 0.8;
  }
`;

export const LastLevelLink = styled(LevelLink)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 0;
`;
