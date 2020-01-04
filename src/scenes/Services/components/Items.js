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
  justify-content: flex-start;
  height: 100%;
  padding: ${({ theme }) => theme.spacing / 2}px;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.85')};
  text-align: center;
`;
