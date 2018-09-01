import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styles';

import { Section, H1, Card } from 'components/ui/base';

const cameraReflex = require('scenes/Home/assets/camera-reflex.svg');
const cameraMirrorless = require('scenes/Home/assets/camera-mirrorless.svg');
const cameraLens = require('scenes/Home/assets/camera-lens.svg');
const cameraFlash = require('scenes/Home/assets/camera-flash.svg');
const camcorder = require('scenes/Home/assets/camcorder.svg');

const WhatWeFixHolder = Section.extend`
  flex-direction: column;
  padding-bottom: 150px;
`;

const CardsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const CardLabel = styled.h2`
  position: relative;
  z-index: 5;
  margin: 0;
  margin-top: ${({ marginTop }) => marginTop || 20}px;
  height: 60px;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;
  color: ${({ theme }) => theme.colors.brightest};
  transition: 0.5s ease color;
`;

const StyledCard = Card.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 250px;
  background-color: white;
  overflow: hidden;

  &:hover {
    &::after {
      transform: translate3d(50px, -135px, 0) rotate(30deg);
    }
  }

  &:nth-child(2n + 1) {
    &:hover ${CardLabel} {
      color: ${({ theme }) => theme.colors.secondaryDarker};
    }
  }

  &:nth-child(2n) {
    &:hover ${CardLabel} {
      color: ${({ theme }) => theme.colors.primaryDarker};
    }
  }

  &:nth-child(2n + 1) {
    &::after {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:nth-child(2n) {
    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    width: 400px;
    height: 400px;
    transform: translate3d(-50px, 270px, 0) rotate(30deg);
    color: black;
    overflow: hidden;
    transition: 0.5s ease transform;
  }
`;

const CardImage = styled.img`
  position: relative;
  z-index: 5;
  width: 160px;
`;

const CameraReflex = CardImage.extend``;

const CameraMirrorless = CardImage.extend`
  width: 165px;
`;

const CameraLens = CardImage.extend`
  width: 180px;
`;
const CameraFlash = CardImage.extend`
  width: 165px;
`;

const Camcorder = CardImage.extend`
  width: 170px;
  transform: translate3d(10px, 0, 0);
`;

export const WhatWeFix = withRouteData(
  ({ routeData: { whatWeFixHeading, whatWeFixItems } }) => {
    return (
      <WhatWeFixHolder>
        <H1>{whatWeFixHeading}</H1>
        <CardsHolder>
          <StyledCard>
            <CameraReflex src={cameraReflex} />
            <CardLabel>{whatWeFixItems[0]}</CardLabel>
          </StyledCard>
          <StyledCard>
            <CameraMirrorless src={cameraMirrorless} />
            <CardLabel marginTop={22}>{whatWeFixItems[1]}</CardLabel>
          </StyledCard>
          <StyledCard>
            <CameraLens src={cameraLens} />
            <CardLabel marginTop={1}>{whatWeFixItems[2]}</CardLabel>
          </StyledCard>
          <StyledCard>
            <CameraFlash src={cameraFlash} />
            <CardLabel>{whatWeFixItems[3]}</CardLabel>
          </StyledCard>
          <StyledCard>
            <Camcorder src={camcorder} />
            <CardLabel marginTop={10}>{whatWeFixItems[4]}</CardLabel>
          </StyledCard>
        </CardsHolder>
      </WhatWeFixHolder>
    );
  }
);
