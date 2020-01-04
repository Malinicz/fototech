import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styles';
import {
  MailIcon,
  PdfIcon,
  ManWalkingIcon,
  MapPinIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  DownloadIcon,
  WrenchIcon,
  DropIcon,
  TargetIcon,
  SendIcon,
  CheckMarkIcon,
  CloseIcon,
} from './svgIcons';

const icons = {
  mail: <MailIcon />,
  pdf: <PdfIcon />,
  manWalking: <ManWalkingIcon />,
  mapPin: <MapPinIcon />,
  arrowRight: <ArrowRightIcon />,
  arrowDown: <ArrowDownIcon />,
  download: <DownloadIcon />,
  wrench: <WrenchIcon />,
  drop: <DropIcon />,
  target: <TargetIcon />,
  send: <SendIcon />,
  checkmark: <CheckMarkIcon />,
  close: <CloseIcon />,
};

const IconHolder = styled.div`
  display: inline-block;
  margin-top: ${({ marginTop }) => marginTop || 3}px;
  width: ${({ size }) => size}px;
  fill: currentColor;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`;

export const Icon = ({
  name,
  size,
  marginRight,
  marginLeft,
  marginTop,
  rotate,
}) => {
  return (
    <IconHolder
      rotate={rotate}
      size={size}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      {icons[name]}
    </IconHolder>
  );
};

Icon.defaultProps = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 3,
  rotate: 0,
};

Icon.propTypes = {
  name: string.isRequired,
  size: number.isRequired,
  marginRight: number,
  marginLeft: number,
  marginTop: number,
  rotate: number,
};
