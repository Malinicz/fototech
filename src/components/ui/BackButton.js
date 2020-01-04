import React from 'react';
import { withRouter } from 'react-static';
import styled from 'styles';
import { Icon } from 'components/ui';
import { LinkWrapper } from 'components/ui/base';

const LinkWithArrowLabel = styled.span`
  padding-right: 0;
  transition: 0.2s ease padding-right;
`;

const BackButtonHolder = styled(LinkWrapper)`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.darker};
  padding: ${({ theme }) => `${theme.spacing}px 0`};
`;

export const BackButton = withRouter(({ children }) => {
  return (
    <BackButtonHolder onClick={() => window.history.back()}>
      <Icon
        name="arrowRight"
        size={12}
        marginRight={5}
        marginTop={-3}
        rotate={180}
      />
      <LinkWithArrowLabel>{children || 'Powrót'}</LinkWithArrowLabel>
    </BackButtonHolder>
  );
});
