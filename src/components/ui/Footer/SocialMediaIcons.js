import React from 'react';
import { object } from 'prop-types';
import styled from 'styles';

import { LinkWrapper } from 'components/ui/base';

import { getRgba } from 'styles/helpers';

const facebookLogo = require('./assets/facebook-logo.svg');
const googlePlusLogo = require('./assets/google-plus-logo.svg');
const youTubeLogo = require('./assets/youtube-logo.svg');

const SocialMediaIconsHolder = styled.div`
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.brightest};
  box-shadow: ${({ theme }) =>
    `0 2px 3px 0px ${getRgba(theme.colors.darkest, 0.16)}`};
  transition: 0.2s ease transform, 0.2s ease box-shadow;

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 3px 10px 0px ${getRgba(theme.colors.darkest, 0.2)}`};
  }
`;

const FacebookIcon = styled.img`
  width: 13px;
`;

const GooglePlusIcon = styled.img`
  width: 32px;
`;

const YouTubeIcon = styled.img`
  width: 30px;
`;

export const SocialMediaIcons = ({ socialMediaUrls }) => {
  return (
    <SocialMediaIconsHolder>
      <LinkWrapper href={socialMediaUrls.facebook} target="_blank">
        <IconHolder>
          <FacebookIcon src={facebookLogo} />
        </IconHolder>
      </LinkWrapper>
      <LinkWrapper href={socialMediaUrls.googlePlus} target="_blank">
        <IconHolder>
          <GooglePlusIcon src={googlePlusLogo} />
        </IconHolder>
      </LinkWrapper>
      <LinkWrapper href={socialMediaUrls.youTube} target="_blank">
        <IconHolder>
          <YouTubeIcon src={youTubeLogo} />
        </IconHolder>
      </LinkWrapper>
    </SocialMediaIconsHolder>
  );
};

SocialMediaIcons.propTypes = {
  socialMediaUrls: object.isRequired,
};
