import styled from 'styles';

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spacing}px 0`};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing / 4}px;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.85')};
  text-align: center;
`;
