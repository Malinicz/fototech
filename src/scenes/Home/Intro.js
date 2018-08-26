import React from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  Section,
  H1,
  LinkWrapper,
  Button,
  ArrowIcon,
} from 'components/ui/base';

const mainPhoto = require('./assets/main-photo.jpg');

const IntroHolder = Section.extend`
  flex-direction: column;
`;

const HeadingHolder = styled.div`
  display: flex;
  align-items: center;
  padding: 0 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 70px;
  width: 60%;
  color: ${({ theme }) => theme.colors.brightest};
`;

const Heading = H1.extend``;

const Thin = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const MainPhotoHolder = styled.div`
  max-width: 760px;
`;

const MainPhoto = styled.img`
  position: relative;
  display: block;
  width: 100%;
  transform: translate3d(35px, -35px, 0);
  z-index: -5;
`;

const Row = styled.div`
  display: flex;
`;

const CallToActionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-left: 35px;
  padding: ${({ theme }) =>
    `${theme.spacing}px ${theme.spacing}px ${theme.spacing}px ${
      theme.spacing
    }px`};
`;

const VenueHolder = styled.div`
  width: 230px;
  margin-bottom: 35px;
`;

const City = styled.div`
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const Street = styled.div`
  font-size: 1.25em;
`;

const Divider = styled.div`
  margin: 15px 0 8px 0;
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const LinkWithArrowLabel = styled.span`
  padding-right: 0;
  transition: 0.2s ease padding-right;
`;

const LinkToVenue = LinkWrapper.extend`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  &:hover ${LinkWithArrowLabel} {
    padding-right: 5px;
  }
`;

const CallToActionButton = Button.extend`
  margin-top: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover ${LinkWithArrowLabel} {
    padding-right: 5px;
  }
`;

export const Intro = withSiteData(
  withRouteData(
    ({
      siteData: { contactDetails },
      routeData: { linkToVenueLabel, callToActionButtonLabel },
    }) => {
      return (
        <IntroHolder>
          <HeadingHolder>
            <Heading>
              Serwis <Thin>fotograficzny</Thin>
            </Heading>
          </HeadingHolder>
          <Row>
            <MainPhotoHolder>
              <MainPhoto src={mainPhoto} alt="" />
            </MainPhotoHolder>
            <CallToActionArea>
              <VenueHolder>
                <City>{contactDetails.warszawa.city}</City>
                <Street>{contactDetails.warszawa.street}</Street>
                <Divider />
                <LinkToVenue>
                  <LinkWithArrowLabel>{linkToVenueLabel}</LinkWithArrowLabel>
                  <ArrowIcon />
                </LinkToVenue>
              </VenueHolder>
              <VenueHolder>
                <City>{contactDetails.krakow.city}</City>
                <Street>{contactDetails.krakow.street}</Street>
                <Divider />
                <LinkToVenue>
                  <LinkWithArrowLabel>{linkToVenueLabel}</LinkWithArrowLabel>
                  <ArrowIcon />
                </LinkToVenue>
              </VenueHolder>
              <CallToActionButton>{callToActionButtonLabel}</CallToActionButton>
            </CallToActionArea>
          </Row>
        </IntroHolder>
      );
    }
  )
);

Intro.defaultProps = {
  siteData: {},
  routeData: {},
};

Intro.propTypes = {
  siteData: object,
  routeData: object,
};
