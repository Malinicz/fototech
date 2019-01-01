import styled from 'styles';
import { getRgba } from 'styles/helpers';

const MAX_BUTTON_WIDTH = 300;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 47px;
  min-width: 230px;
  font-size: 0.875em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.brightest};
  border-radius: 4px;
  box-shadow: ${({ theme }) =>
    `0 2px 3px 0px ${getRgba(theme.colors.darkest, 0.16)}`};
  transition: 0.2s ease box-shadow;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 3px 10px 0px ${getRgba(theme.colors.darkest, 0.2)}`};
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    width: ${MAX_BUTTON_WIDTH}px;
    height: ${MAX_BUTTON_WIDTH}px;
    border-radius: ${MAX_BUTTON_WIDTH}px;
    background: ${({ theme }) => theme.colors.bright};
    transition: all 0.6s;
    opacity: 0;
  }

  &:active:before {
    width: 0;
    height: 0;
    opacity: 0.4;
    transition: 0s;
    box-shadow: ${({ theme }) =>
      `0 3px 10px 0px ${getRgba(theme.colors.darkest, 0.2)}`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.bright};
    cursor: not-allowed;
  }
`;
