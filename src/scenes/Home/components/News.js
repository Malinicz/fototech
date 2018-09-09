import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styles';

import { Section, H1, H2, Paragraph } from 'components/ui/base';
import { TransparentShelf, ColoredShelf } from './Shelves';

import { formatDate } from 'utils/dateHelpers';

const cameraReflex = require('scenes/Home/assets/camera-reflex.svg');

const NewsHolder = Section.extend`
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
  }
`;

const UpperShelf = TransparentShelf.extend`
  z-index: 7;
`;

const LowerShelf = ColoredShelf.extend`
  top: 60%;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const GraphicsHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 500px;
  min-height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 40%;
    min-width: 400px;
  }
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;

const Article = styled.article``;

const ArticleTitle = H1.extend`
  margin-top: 0;
`;

const CameraReflex = styled.img`
  position: absolute;
  top: 38%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  width: 45%;
`;

const NewsTitle = H2.extend`
  margin: 0;
  font-size: initial;
`;

const NewsDescription = Paragraph.extend`
  margin-top: 5px;
  margin-bottom: 25px;
`;

export const News = withRouteData(({ news, routeData: { newsHeading } }) => {
  return (
    <NewsHolder>
      <GraphicsHolder>
        <CameraReflex src={cameraReflex} alt="" />
        <UpperShelf />
        <LowerShelf />
      </GraphicsHolder>
      <ContentHolder>
        <Article>
          <ArticleTitle>{newsHeading}</ArticleTitle>
          {news.map((singleNews) => {
            return (
              <React.Fragment key={singleNews.sys.createdAt}>
                <NewsTitle>{formatDate(singleNews.sys.createdAt)}</NewsTitle>
                <NewsDescription>
                  {singleNews.fields.description}
                </NewsDescription>
              </React.Fragment>
            );
          })}
        </Article>
      </ContentHolder>
    </NewsHolder>
  );
});
