import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';
import styledTheme from 'styles/theme';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

import { Section, ParagraphLink } from 'components/ui/base';
import {
  Layout,
  BackButton,
  ArticleHolder,
  ArticleTitle,
  ArticleImage,
  ArticleContent,
  ArticleParagraph,
} from 'components/ui';

const CARD_SPACING = styledTheme.spacing * 2;

const ContentSection = styled(Section)`
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing * 3}px;
  align-items: flex-start;
`;

const CardsHolder = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;

const AsideCard = styled(ArticleHolder)`
  padding: ${CARD_SPACING}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: ${CARD_SPACING / 2}px;
  }
`;

const Aside = styled.div`
  min-width: 350px;
  font-size: 0.9em;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    min-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-left: 0;
  }
`;

const AsideTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const AffectedModelsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const AdditionalInfoHolder = styled.div`
  padding: 0 ${CARD_SPACING}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 0 ${CARD_SPACING / 2}px;
  }
`;

const AdditionalInfo = styled.div`
  font-size: 0.9em;
  padding-bottom: 5px;
`;

const BackButtonHolder = styled.div`
  display: inline-flex;
`;

class Repair extends Component {
  render() {
    const {
      routeData: { defect },
    } = this.props;

    const options = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <ParagraphLink href={node.data.uri}>{children}</ParagraphLink>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <ArticleParagraph>{children}</ArticleParagraph>
        ),
      },
    };

    return (
      <Layout>
        <ContentSection>
          <BackButtonHolder>
            <BackButton />
          </BackButtonHolder>
          <CardsHolder>
            <ArticleHolder>
              <ArticleTitle>{defect.title}</ArticleTitle>
              {defect.imageUrl && (
                <ArticleImage imageUrl={defect.imageUrl} alt="defect image" />
              )}
              <AdditionalInfoHolder>
                <AdditionalInfo>
                  <b>Kategoria:</b>{' '}
                  <span>
                    {defect.serviceCategories
                      .map((category) => category.name)
                      .join(', ')}
                  </span>
                </AdditionalInfo>
                <AdditionalInfo>
                  <b>Cena usługi:</b>{' '}
                  <span>
                    {defect.priceMax === defect.priceMin
                      ? `${defect.priceMin}zł`
                      : `${defect.priceMin}zł - ${defect.priceMax}zł`}
                  </span>
                </AdditionalInfo>
              </AdditionalInfoHolder>
              <ArticleContent>
                {documentToReactComponents(defect.description, options)}
              </ArticleContent>
            </ArticleHolder>
            <Aside>
              <AsideCard>
                <AsideTitle>Modele, których dotyczy ten defekt</AsideTitle>
                <AffectedModelsList>
                  {defect.deviceModels.map((model) => (
                    <li key={model.slug}>
                      {model.company.name} - {model.name}
                    </li>
                  ))}
                </AffectedModelsList>
              </AsideCard>
            </Aside>
          </CardsHolder>
        </ContentSection>
      </Layout>
    );
  }
}

Repair.defaultProps = {
  routeData: {},
};

Repair.propTypes = {
  routeData: object,
};

export default withSiteData(withRouteData(Repair));
