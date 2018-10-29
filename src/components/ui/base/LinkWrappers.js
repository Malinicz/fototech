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

export const BlockLink = LinkWrapper.extend`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primaryDarker};

  &:hover {
    opacity: 0.8;
  }
`;
