import React from 'react';
import styled from 'styles';

const Address = styled.address`
  font-style: normal;
  margin-bottom: 15px;
`;

const City = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const StepAddresses = ({ places }) => {
  return Object.keys(places).map((placeName) => {
    const place = places[placeName];
    return (
      <Address key={placeName}>
        <City>{place.city}</City>
        <br />
        {place.street}
        <br />
        {place.postalCode} {place.city}
        <br />
      </Address>
    );
  });
};

export default StepAddresses;
