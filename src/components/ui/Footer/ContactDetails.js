import React from 'react';
import { object } from 'prop-types';
import styled from 'styles';
import styledTheme from 'styles/theme';

import { PlaceIcon } from './PlaceIcon';

const ContactDetailsHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const AddressHolder = styled.address`
  margin: 0 30px;
  color: ${({ theme }) => theme.colors.darker};
  font-size: 0.8em;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5em;
`;

const AddressLabel = styled.div`
  font-size: initial;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1em;
`;

const AddressLink = styled.a`
  color: ${({ theme, color }) => color || theme.colors.secondaryDarker};
  transition: 0.2s ease opacity;

  &:hover {
    opacity: 0.7;
  }
`;

const MapLink = AddressLink.extend`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
`;

const PlaceIconHolder = styled.div`
  width: 15px;
  margin-left: 10px;
`;

export const ContactDetails = ({ data }) => {
  return (
    <ContactDetailsHolder>
      <AddressHolder>
        <AddressLabel>{data.warszawa.label}</AddressLabel>
        {data.warszawa.street}
        <br />
        {data.warszawa.postalCode} {data.warszawa.city}
        <br />
        <AddressLink href={`tel:${data.warszawa.phone}`}>
          {data.warszawa.phone}
        </AddressLink>
        <br />
        <AddressLink href={`mailto:${data.warszawa.email}`}>
          {data.warszawa.email}
        </AddressLink>
        <br />
        <MapLink href="/contact/warszawa">
          {data.warszawa.showOnMapLabel}
          <PlaceIconHolder>
            <PlaceIcon fill={styledTheme.colors.secondaryDarker} />
          </PlaceIconHolder>
        </MapLink>
      </AddressHolder>
      <AddressHolder>
        <AddressLabel>{data.krakow.label}</AddressLabel>
        {data.krakow.street}
        <br />
        {data.krakow.postalCode} {data.krakow.city}
        <br />
        <AddressLink
          href={`tel:${data.krakow.phone}`}
          color={styledTheme.colors.primaryDarker}>
          {data.krakow.phone}
        </AddressLink>
        <br />
        <AddressLink
          href={`mailto:${data.krakow.email}`}
          color={styledTheme.colors.primaryDarker}>
          {data.krakow.email}
        </AddressLink>
        <br />
        <MapLink
          href="/contact/krakow"
          color={styledTheme.colors.primaryDarker}>
          {data.krakow.showOnMapLabel}
          <PlaceIconHolder>
            <PlaceIcon fill={styledTheme.colors.primaryDarker} />
          </PlaceIconHolder>
        </MapLink>
      </AddressHolder>
    </ContactDetailsHolder>
  );
};

ContactDetails.propTypes = {
  data: object.isRequired,
};
