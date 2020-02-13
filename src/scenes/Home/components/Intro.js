import React, { Component } from 'react';
import { withSiteData, withRouteData, Link } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';
import styledTheme from 'styles/theme';

import { Section, H1, LinkWrapper } from 'components/ui/base';
import { Icon } from 'components/ui';
import { CallToActionButton } from './CallToActionButton';

const mainPhoto = require('../assets/main-photo.jpg');
const fototechVideo = require('assets/fototech-video.mp4');

const IntroHolder = Section.extend`
  flex-direction: column;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: -70px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    align-items: unset;
    margin-bottom: 0;
  }
`;

const HeadingHolder = styled.div`
  position: relative;
  z-index: 30;
  display: flex;
  align-items: center;
  padding: 0 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 75px;
  width: 760px;
  color: ${({ theme }) => theme.colors.brightest};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: absolute;
    top: 40%;
    transform: translate(-50%, -40%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    position: absolute;
    top: 25%;
    transform: translate(-50%, -25%);
  }
`;

const Heading = H1.extend`
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 3.5em;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 2.8em;
  }
`;

const Thin = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const MainGraphicsHolder = styled.div`
  position: relative;
  width: 760px;
  height: 420px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    height: 100vh;
    width: 100vw;
  }
`;

const VideoHolder = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  left: 38px;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

const Video = styled.video`
  display: block;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: unset;
    min-width: 100%;
    min-height: 100%;
  }
`;

const PlaceholderPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${mainPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const MainGraphicsOverlay = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Row = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
  }
`;

const CallToActionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-left: 35px;
  padding: ${({ theme }) =>
    `${theme.spacing}px 0px ${theme.spacing}px ${theme.spacing}px`};
  transform: translateY(-20px);

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    transform: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing}px;
    margin-left: 0;
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;

const VenuesHolder = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const VenueHolder = styled.div`
  width: 230px;
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacing * 2}px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    text-align: center;
    margin-bottom: 50px;
    margin-right: 0;
  }
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

const LinkToVenue = styled(LinkWrapper.withComponent(Link))`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.darker};

  &:hover ${LinkWithArrowLabel} {
    padding-right: 5px;
  }
`;

const StyledCallToActionButton = CallToActionButton.extend`
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: none;
    margin-top: 0;
  }
`;

const StyledCallToActionButtonVideo = CallToActionButton.extend`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: block;
    background-color: ${({ theme }) => theme.colors.brightest};
    color: ${({ theme }) => theme.colors.darker};
    position: relative;
    margin-top: 30px;
    z-index: 5;
  }
`;

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.video = null;
  }

  componentDidMount() {
    if (
      window.matchMedia(`(max-width: ${styledTheme.breakpoints.small}px)`)
        .matches
    ) {
      this.video.parentNode.removeChild(this.video);
    } else {
      this.video.setAttribute('preload', 'auto');
      this.video.setAttribute('autoPlay', true);
    }
  }

  render() {
    const {
      siteData: { contactDetails, navigation },
      routeData: { mainHeading, linkToVenueLabel, callToActionButtonLabel },
      history,
    } = this.props;

    return (
      <IntroHolder>
        <HeadingHolder>
          <Heading>
            {mainHeading[0]} <Thin>{mainHeading[1]}</Thin>
          </Heading>
          <StyledCallToActionButtonVideo
            onClick={() => history.push(navigation.howToDeliver.slug)}>
            {callToActionButtonLabel}
          </StyledCallToActionButtonVideo>
        </HeadingHolder>
        <Row>
          <MainGraphicsHolder>
            <VideoHolder>
              <PlaceholderPhoto />
              <Video
                autoPlay={false}
                muted
                loop
                preload="none"
                innerRef={(el) => {
                  this.video = el;
                }}>
                <source src={fototechVideo} type="video/mp4" />
              </Video>
              <MainGraphicsOverlay />
            </VideoHolder>
          </MainGraphicsHolder>
          <CallToActionArea>
            <VenuesHolder>
              <VenueHolder>
                <City>{contactDetails.warszawa.city}</City>
                <Street>{contactDetails.warszawa.street}</Street>
                <Divider />
                <LinkToVenue to={navigation.contact.sections.warszawa.slug}>
                  <LinkWithArrowLabel>{linkToVenueLabel}</LinkWithArrowLabel>
                  <Icon name="arrowRight" size={12} marginLeft={5} />
                </LinkToVenue>
              </VenueHolder>
              <VenueHolder>
                <City>{contactDetails.krakow.city}</City>
                <Street>{contactDetails.krakow.street}</Street>
                <Divider />
                <LinkToVenue to={navigation.contact.sections.krakow.slug}>
                  <LinkWithArrowLabel>{linkToVenueLabel}</LinkWithArrowLabel>
                  <Icon name="arrowRight" size={12} marginLeft={5} />
                </LinkToVenue>
              </VenueHolder>
            </VenuesHolder>
            <StyledCallToActionButton
              onClick={() => history.push(navigation.howToDeliver.slug)}>
              {callToActionButtonLabel}
            </StyledCallToActionButton>
          </CallToActionArea>
        </Row>
      </IntroHolder>
    );
  }
}

export default withSiteData(withRouteData(Intro));

Intro.defaultProps = {
  siteData: {},
  routeData: {},
  history: {},
};

Intro.propTypes = {
  siteData: object,
  routeData: object,
  history: object,
};
