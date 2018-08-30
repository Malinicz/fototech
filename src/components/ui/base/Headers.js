import styled from 'styles';

export const H1 = styled.h1`
  font-size: 2.5em;
  font-weight: ${({ theme }) => theme.fontWeight.black};
`;

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
