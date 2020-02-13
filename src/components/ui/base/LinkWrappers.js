import { Link } from 'react-static';
import styled from 'styles';

export const LinkWrapper = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ParagraphLink = styled(LinkWrapper)`
  color: ${({ theme }) => theme.colors.primaryDarker};
`;

export const ParagraphRouterLink = styled(ParagraphLink.withComponent(Link));

export const BlockLink = styled(LinkWrapper)`
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

export const BlockRouterLink = styled(BlockLink.withComponent(Link));
