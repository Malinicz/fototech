import styled from 'styles';

export const H1 = styled.h1`
  font-size: 2.5em;
  font-weight: ${({ theme }) => theme.fontWeight.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: center;
  }
`;

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: center;
  }
`;
