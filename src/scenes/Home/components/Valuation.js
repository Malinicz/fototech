import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styles';
import Markdown from 'react-markdown';

import { Section, H1, Paragraph } from 'components/ui/base';
import { TransparentShelfWithShadow } from './Shelves';
import { CallToActionButton } from './CallToActionButton';

const cameraMirrorless = require('scenes/Home/assets/camera-mirrorless.svg');

const ValuationHolder = Section.extend`
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

const CameraMirrorless = styled.img`
  position: absolute;
  top: 38%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  width: 270px;
`;

const StyledCallToActionButton = CallToActionButton.extend`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
`;

export const Valuation = withRouteData(
  ({
    routeData: {
      valuationHeading,
      valuationParagraphs,
      callToActionButtonLabel,
    },
  }) => {
    return (
      <ValuationHolder>
        <ContentHolder>
          <Article>
            <ArticleTitle>{valuationHeading}</ArticleTitle>
            <Markdown
              source={valuationParagraphs[0]}
              renderers={{
                paragraph: Paragraph,
                root: React.Fragment,
              }}
            />
            <StyledCallToActionButton>
              {callToActionButtonLabel}
            </StyledCallToActionButton>
          </Article>
        </ContentHolder>
        <GraphicsHolder>
          <CameraMirrorless src={cameraMirrorless} alt="" />
          <TransparentShelfWithShadow />
        </GraphicsHolder>
      </ValuationHolder>
    );
  }
);
