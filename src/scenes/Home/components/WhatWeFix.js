import React from 'react';
import { withRouteData, withSiteData, Link } from 'react-static';
import styled from 'styles';

import { Section, H1, Card } from 'components/ui/base';

const cameraReflex = require('assets/images/camera-reflex.svg');
const cameraMirrorless = require('assets/images/camera-mirrorless.svg');
const cameraLens = require('assets/images/camera-lens.svg');
const cameraFlash = require('assets/images/camera-flash.svg');
const camcorder = require('assets/images/camcorder.svg');
const drone = require('assets/images/drone.svg');

const WhatWeFixHolder = Section.extend`
  flex-direction: column;
  padding-bottom: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    align-items: center;
    padding-bottom: 100px;
  }
`;

const CardsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    justify-content: center;
    max-width: 587px;
  }

  @media (max-width: 615px) {
    max-width: 390px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    max-width: unset;
    justify-content: space-evenly;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 0.85em;
  }
`;

const IsometricCardBackground = styled.div`
  position: absolute;
  z-index: 0;
  width: 400px;
  height: 400px;
  transform: translate3d(-50px, 270px, 0) rotate(30deg);
  color: black;
  overflow: hidden;
  transition: 0.5s ease transform;
`;

const StyledCard = styled(Card.withComponent(Link))`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
  width: 15%;
  min-width: 160px;
  max-width: 200px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.brightest};
  overflow: hidden;
  cursor: pointer;

  &:hover ${IsometricCardBackground} {
    transform: translate3d(50px, -135px, 0) rotate(30deg);
  }

  &:nth-child(2n) ${IsometricCardBackground} {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:nth-child(2n + 1) ${IsometricCardBackground} {
    background-color: ${({ theme }) => theme.colors.secondary};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 7.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex: 1;
    min-width: 150px;
    max-width: 150px;
    height: 220px;
  }
`;

const CardImage = styled.img`
  position: relative;
  z-index: 5;
  width: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 140px;
  }
`;

const CameraReflex = CardImage.extend`
  width: 140px;
`;

const CameraMirrorless = CardImage.extend`
  width: 135px;
`;

const CameraLens = CardImage.extend`
  width: 150px;
`;
const CameraFlash = CardImage.extend`
  width: 135px;
`;

const Camcorder = CardImage.extend`
  width: 140px;
  transform: translate3d(10px, 0, 0);
`;

const Drone = CardImage.extend`
  width: 150px;
`;

export const WhatWeFix = withSiteData(
  withRouteData(
    ({
      routeData: { whatWeFixHeading, whatWeFixItems },
      siteData: { navigation },
    }) => {
      return (
        <WhatWeFixHolder>
          <H1>{whatWeFixHeading}</H1>
          <CardsHolder>
            <StyledCard to={navigation.services.slug}>
              <CameraReflex src={cameraReflex} />
              <CardLabel>{whatWeFixItems[0]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
            <StyledCard to={navigation.services.slug}>
              <CameraMirrorless src={cameraMirrorless} />
              <CardLabel marginTop={22}>{whatWeFixItems[1]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
            <StyledCard to={navigation.services.slug}>
              <CameraLens src={cameraLens} />
              <CardLabel marginTop={1}>{whatWeFixItems[2]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
            <StyledCard to={navigation.services.slug}>
              <CameraFlash src={cameraFlash} />
              <CardLabel>{whatWeFixItems[3]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
            <StyledCard to={navigation.services.slug}>
              <Camcorder src={camcorder} />
              <CardLabel marginTop={10}>{whatWeFixItems[4]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
            <StyledCard to={navigation.services.slug}>
              <Drone src={drone} />
              <CardLabel marginTop={10}>{whatWeFixItems[5]}</CardLabel>
              <IsometricCardBackground />
            </StyledCard>
          </CardsHolder>
        </WhatWeFixHolder>
      );
    }
  )
);
