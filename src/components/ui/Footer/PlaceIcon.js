import React from 'react';
import { string } from 'prop-types';

export const PlaceIcon = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.6 18">
      <path
        style={{ fill }}
        d="M11.3,2A6.3,6.3,0,0,0,5,8.3C5,13.025,11.3,20,11.3,20s6.3-6.975,6.3-11.7A6.3,6.3,0,0,0,11.3,2Zm0,8.55A2.25,2.25,0,1,1,13.55,8.3,2.251,2.251,0,0,1,11.3,10.55Z"
        transform="translate(-5 -2)"
      />
    </svg>
  );
};

PlaceIcon.propTypes = {
  fill: string.isRequired,
};
