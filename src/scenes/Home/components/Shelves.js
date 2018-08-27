import styled from 'styles';

export const ShelfBase = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 250px;
  height: 250px;
  border-radius: 15px;
  transform: translate3d(-50%, -50%, 0) rotate(-30deg) skew(30deg);
`;

export const TransparentShelf = ShelfBase.extend`
  background-color: ${({ theme }) => theme.colors.brightest};
  opacity: 0.7;
  box-shadow: -7px 7px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const TransparentShelfWithShadow = ShelfBase.extend`
  background-color: ${({ theme }) => theme.colors.brightest};
  opacity: 0.7;
  box-shadow: -30px 30px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const PrimaryColorShelf = ShelfBase.extend`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: -7px 7px 8px 0px rgba(0, 0, 0, 0.2);
`;
