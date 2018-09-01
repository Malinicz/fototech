import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styles';
import Markdown from 'react-markdown';

import {
  Section,
  H1,
  Paragraph,
  PdfIcon,
  LinkWrapper,
  ParagraphLink,
} from 'components/ui/base';
import { TransparentShelf, ColoredShelf } from './Shelves';

import styledTheme from 'styles/theme';

const cameraDestructured = require('scenes/Home/assets/camera-destructured.svg');
const isometricGradient = require('scenes/Home/assets/gradient-isometric.svg');

const HowWeWorkHolder = Section.extend`
  padding-bottom: 100px;
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

const CameraDestructured = styled.img`
  position: absolute;
  top: 42%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  width: 200px;
`;

const UpperShelf = TransparentShelf.extend`
  z-index: 7;
`;

const LowerShelf = ColoredShelf.extend`
  top: 60%;
  z-index: 5;
`;

const DottedDivider = styled.div`
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: 2px;
  overflow: hidden;

  &::before {
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .';
    position: absolute;
    top: -13px;
    color: #707070;
  }
`;

const TermsOfUseHolder = styled.div`
  display: flex;
  align-items: center;
`;

const TermsOfUseLink = LinkWrapper.extend`
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primaryDarker};
  margin-left: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

const IsometricGradient = styled.img`
  position: absolute;
  width: 2000px;
  transform: translate(300px, 230px);
  z-index: -1;
`;

export const HowWeWork = withRouteData(
  ({
    routeData: {
      howWeWorkHeading,
      howWeWorkParagraphs,
      termsOfUse,
      termsOfUseLink,
    },
  }) => {
    return (
      <HowWeWorkHolder>
        <GraphicsHolder>
          <CameraDestructured src={cameraDestructured} alt="" />
          <UpperShelf />
          <LowerShelf />
          <IsometricGradient src={isometricGradient} />
        </GraphicsHolder>
        <ContentHolder>
          <Article>
            <ArticleTitle>{howWeWorkHeading}</ArticleTitle>
            <Markdown
              source={howWeWorkParagraphs[0]}
              renderers={{ paragraph: Paragraph, root: React.Fragment }}
            />
            <Markdown
              source={howWeWorkParagraphs[1]}
              renderers={{
                paragraph: Paragraph,
                root: React.Fragment,
                link: ParagraphLink,
              }}
            />
            <DottedDivider />
            <TermsOfUseHolder>
              <PdfIcon color={styledTheme.colors.primaryDarker} />
              <TermsOfUseLink href={termsOfUseLink}>
                {termsOfUse}
              </TermsOfUseLink>
            </TermsOfUseHolder>
          </Article>
        </ContentHolder>
      </HowWeWorkHolder>
    );
  }
);
