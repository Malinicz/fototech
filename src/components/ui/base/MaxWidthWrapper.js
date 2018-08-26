import styled from 'styles';

export const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: ${({ theme }) => `0 ${theme.spacing}px`};
`;
