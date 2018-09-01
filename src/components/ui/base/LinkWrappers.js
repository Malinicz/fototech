import styled from 'styles';

export const LinkWrapper = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ParagraphLink = LinkWrapper.extend`
  color: ${({ theme }) => theme.colors.primaryDarker};
`;
