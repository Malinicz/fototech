import styled from 'styles';

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: ${({ theme }) => theme.spacing}px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth}px;
`;
