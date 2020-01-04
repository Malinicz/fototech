import styled from 'styles';
import styledTheme from 'styles/theme';
import { Card, H1, Paragraph } from './base';

const CARD_SPACING = styledTheme.spacing * 2;

export const ArticleHolder = styled(Card)`
  margin-right: ${({ theme }) => theme.spacing}px;
  margin-bottom: ${({ theme }) => theme.spacing}px;
  width: 100%;
`;

export const ArticleTitle = styled(H1)`
  font-size: 1.25em;
  padding: ${CARD_SPACING}px ${CARD_SPACING}px ${CARD_SPACING / 2}px;
  margin-top: 0;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: ${CARD_SPACING / 2}px ${CARD_SPACING / 2}px ${CARD_SPACING / 2}px;
  }
`;

export const ArticleImage = styled.div`
  min-height: 300px;
  background: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: ${CARD_SPACING / 2}px 0 ${CARD_SPACING}px;
`;

export const ArticleContent = styled.div`
  padding: ${CARD_SPACING / 2}px ${CARD_SPACING}px ${CARD_SPACING}px
    ${CARD_SPACING}px;
  max-width: 100%;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: ${CARD_SPACING / 4}px ${CARD_SPACING / 2}px ${CARD_SPACING / 2}px
      ${CARD_SPACING / 2}px;
  }
`;

export const ArticleParagraph = styled(Paragraph)`
  max-width: 100%;
`;
