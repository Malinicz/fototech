import React from 'react';
import { withSiteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, MaxWidthWrapper } from 'components/ui/base';
import { FooterNavigation } from './FooterNavigation';
import { SocialMediaIcons } from './SocialMediaIcons';
import { ContactDetails } from './ContactDetails';

import termsOfUse from 'assets/regulamin.pdf';

const malinowskiLogo = require('./assets/malinowski-logo.svg');

const FooterBase = Section.withComponent('footer');
const FooterHolder = FooterBase.extend`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brightest};
  max-width: unset;
  padding: 50px 0 30px 0;
`;

const BottomCover = styled.div`
  position: fixed;
  bottom: -300px;
  left: 0;
  right: 0;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.brightest};
`;

const AdditionalMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  font-size: 0.7em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const AdditionalMenuLink = styled.a`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.darker};
  transition: 0.2s ease opacity;

  &:hover {
    opacity: 0.7;
  }
`;

const MalinowskiLogo = styled.img`
  margin-top: 70px;
  width: 170px;
  align-self: center;
`;

const AllRightsReserved = styled.div`
  margin-top: 15px;
  font-size: 0.7em;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const Footer = withSiteData(({ siteData }) => {
  return (
    <FooterHolder>
      <MaxWidthWrapper flexDirection="column">
        <SocialMediaIcons socialMediaUrls={siteData.socialMediaUrls} />
        <FooterNavigation navLinks={siteData.navigation} />
        <ContactDetails
          data={siteData.contactDetails}
          navigation={siteData.navigation}
        />
        <AdditionalMenu>
          <AdditionalMenuLink href={termsOfUse}>
            {siteData.footer.termsOfUse.label}
          </AdditionalMenuLink>
        </AdditionalMenu>
        <MalinowskiLogo src={malinowskiLogo} />
        <AllRightsReserved>
          {siteData.footer.allRightReservedInfo}
        </AllRightsReserved>
      </MaxWidthWrapper>
      <BottomCover />
    </FooterHolder>
  );
});

Footer.defaultProps = {
  siteData: {},
};

Footer.propTypes = {
  siteData: object,
};
