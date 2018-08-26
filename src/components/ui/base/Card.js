import styled from 'styles';
import { getRgba } from 'styles/helpers';

export const Card = styled.div`
  border-radius: 7px;
  box-shadow: ${({ theme }) =>
    `0 3px 11px 0px ${getRgba(theme.colors.darkest, 0.16)}`};
  transition: 0.2s ease box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 3px 20px 0px ${getRgba(theme.colors.darkest, 0.2)}`};
  }
`;
