import React from 'react';
import styled from 'styles';

import {
  Section,
  H1,
  Paragraph,
  PdfIcon,
  LinkWrapper,
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
  transform: translate(0, 410px);
  z-index: -1;
`;

export const HowWeWork = () => {
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
          <ArticleTitle>Jak działamy</ArticleTitle>
          <Paragraph>
            Mając na uwadze stosunkowo niskie ceny zakupu aparatów
            fotograficznych, przy wykonywaniu wycen napraw staramy się rozsądnie
            kalkulować koszty usług. Najpierw podejmujemy próbę diagnozy oraz
            naprawy usterki na poziomie wymiany pojedynczych elementów
            elektronicznych, a nie całych modułów. Takie działanie pozwala nam
            na znaczne obniżenie końcowej ceny usługi oraz skrócenie czasu
            naprawy.
          </Paragraph>
          <Paragraph>
            Na wszystkie naprawy udzielamy 6 miesięcy gwarancji. Więcej
            informacji w regulaminie.
          </Paragraph>
          <DottedDivider />
          <TermsOfUseHolder>
            <PdfIcon color={styledTheme.colors.primaryDarker} />
            <TermsOfUseLink href="#">Regulamin</TermsOfUseLink>
          </TermsOfUseHolder>
        </Article>
      </ContentHolder>
    </HowWeWorkHolder>
  );
};
