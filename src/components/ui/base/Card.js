import styled from 'styles';
import { getRgba } from 'styles/helpers';

export const Card = styled.div`
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.brightest};
  box-shadow: ${({ theme }) =>
    `0 3px 40px 0px ${getRgba(theme.colors.darkest, 0.1)}`};
`;
