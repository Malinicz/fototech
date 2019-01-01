import React from 'react';
import { withRouteData, withSiteData } from 'react-static';
import { object, string } from 'prop-types';
import styled from 'styles';

import { H2 } from 'components/ui/base';

const Label = styled(H2)`
  font-size: 25px;
  margin-bottom: 10px;
`;

const ValueBase = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 35px;
`;

const Link = styled(ValueBase.withComponent('a'))`
  color: ${({ theme }) => theme.colors.primary};
`;

const Address = styled(ValueBase.withComponent('address'))`
  font-style: normal;
  text-align: center;
`;

export const ContactDetails = withSiteData(
  withRouteData(
    ({
      routeData: { phoneHeading, emailHeading, addressHeading },
      siteData: { contactDetails },
      city: cityName,
    }) => {
      const { phone, email, street, postalCode, city } = contactDetails[
        cityName
      ];
      return (
        <React.Fragment>
          <Label>{phoneHeading}</Label>
          <Link href={`tel:${phone}`}>{phone}</Link>
          <Label>{emailHeading}</Label>
          <Link href={`mailto:${email}`}>{email}</Link>
          <Label>{addressHeading}</Label>
          <Address>
            {street}
            <br />
            {postalCode} {city}
          </Address>
        </React.Fragment>
      );
    }
  )
);

ContactDetails.propTypes = {
  routeData: object,
  siteData: object,
  city: string.isRequired,
};
