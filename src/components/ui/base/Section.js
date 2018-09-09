import styled from 'styles';

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: ${({ theme }) => theme.spacing}px;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
    align-items: center;
  }
`;
