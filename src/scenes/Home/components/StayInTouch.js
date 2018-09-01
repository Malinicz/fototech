/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import styled from 'styles';
import Markdown from 'react-markdown';

import { Section, H1, Paragraph, ParagraphLink } from 'components/ui/base';
import { TransparentShelfWithShadow } from './Shelves';
import { withRouteData } from 'react-static';

const facebookLogoIsometric = require('scenes/Home/assets/facebook-logo-isometric.svg');
const googlePlusLogoIsometric = require('scenes/Home/assets/google-plus-logo-isometric.svg');
const youtubeLogoIsometric = require('scenes/Home/assets/youtube-logo-isometric.svg');

const StayInTouchHolder = Section.extend`
  margin-bottom: 70px;
`;

const GraphicsHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 400px;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Article = styled.article``;

const ArticleTitle = H1.extend`
  margin-top: 0;
`;

const SocialLogoIsometricBase = styled.img`
  position: absolute;
  z-index: 2;
  width: 100px;
`;

const YoutubeLogoIsometric = SocialLogoIsometricBase.extend`
  transform: translate(50px, -70px);
`;

const FacebookLogoIsometric = SocialLogoIsometricBase.extend`
  transform: translate(-130px, -40px);
`;

const GooglePlusLogoIsometric = SocialLogoIsometricBase.extend`
  transform: translate(0, 20px);
`;

export const StayInTouch = withRouteData(
  ({ routeData: { stayInTouchHeading, stayInTouchParagraphs } }) => {
    return (
      <StayInTouchHolder>
        <ContentHolder>
          <Article>
            <ArticleTitle>{stayInTouchHeading}</ArticleTitle>
            <Markdown
              source={stayInTouchParagraphs[0]}
              renderers={{
                paragraph: Paragraph,
                root: React.Fragment,
                link: (mdProps) => (
                  <ParagraphLink
                    href={mdProps.href}
                    target="_blank"
                    rel="nofollow noreferrer noopener">
                    {mdProps.children}
                  </ParagraphLink>
                ),
              }}
            />
            <Markdown
              source={stayInTouchParagraphs[1]}
              renderers={{
                paragraph: Paragraph,
                root: React.Fragment,
                link: (mdProps) => (
                  <ParagraphLink
                    href={mdProps.href}
                    target="_blank"
                    rel="nofollow noreferrer noopener">
                    {mdProps.children}
                  </ParagraphLink>
                ),
              }}
            />
          </Article>
        </ContentHolder>
        <GraphicsHolder>
          <FacebookLogoIsometric src={facebookLogoIsometric} alt="" />
          <GooglePlusLogoIsometric src={googlePlusLogoIsometric} alt="" />
          <YoutubeLogoIsometric src={youtubeLogoIsometric} alt="" />
          <TransparentShelfWithShadow />
        </GraphicsHolder>
      </StayInTouchHolder>
    );
  }
);
