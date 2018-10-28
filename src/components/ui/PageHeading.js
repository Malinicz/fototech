import React from 'react';
import styled from 'styles';
import { string } from 'prop-types';

import { H1 } from 'components/ui/base';

const PageHeadingIcon = styled.img`
  width: 250px;
  margin: -50px 0 -40px 0;
`;

const PageTitle = H1.extend`
  margin: 0;
`;

const PageSubtitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 10px 0 80px 0;
  text-align: center;
`;

export const PageHeading = ({ icon, title, subtitle }) => {
  return (
    <React.Fragment>
      <PageHeadingIcon src={icon} />
      <PageTitle>{title}</PageTitle>
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
    </React.Fragment>
  );
};

PageHeading.defaultProps = {
  subtitle: undefined,
};

PageHeading.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  subtitle: string,
};
