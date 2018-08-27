import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

const PdfIconHolder = styled.div`
  display: inline-block;
`;

export const PdfIcon = ({ color }) => {
  const iconStyle = {
    fill: color,
  };

  return (
    <PdfIconHolder style={{ width: '20px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
        <path
          id="ic_description_24px"
          style={iconStyle}
          d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8Zm2,16H8V16h8Zm0-4H8V12h8ZM13,9V3.5L18.5,9Z"
          transform="translate(-4 -2)"
        />
      </svg>
    </PdfIconHolder>
  );
};

PdfIcon.propTypes = {
  color: string.isRequired,
};
