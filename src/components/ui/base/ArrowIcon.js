import React from 'react';
import { string } from 'prop-types';
import styled from 'styles';

const ArrowIconHolder = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

export const ArrowIcon = ({ color }) => {
  const arrowIconStyle = {
    fill: 'none',
    strokeWidth: '1.3px',
    stroke: color || '#000',
  };

  return (
    <ArrowIconHolder style={{ width: '12px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.346 8.85">
        <g
          id="Group_62"
          data-name="Group 62"
          transform="translate(-1008.938 -237.736)">
          <g
            id="Group_59"
            data-name="Group 59"
            transform="translate(1019.406 238.168) rotate(90)">
            <path
              id="Path_243"
              data-name="Path 243"
              style={arrowIconStyle}
              d="M0,2.705,3.042,0,5.978,2.705"
              transform="translate(0)"
            />
            <path
              id="Path_244"
              data-name="Path 244"
              style={arrowIconStyle}
              d="M0,0V10.469"
              transform="translate(2.989)"
            />
          </g>
        </g>
      </svg>
    </ArrowIconHolder>
  );
};

ArrowIcon.propTypes = {
  color: string.isRequired,
};
