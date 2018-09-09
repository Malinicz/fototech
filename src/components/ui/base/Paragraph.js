import styled from 'styles';

export const Paragraph = styled.p`
  max-width: 500px;
  line-height: 1.4em;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
