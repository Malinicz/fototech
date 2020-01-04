import React, { Component } from 'react';
import { withSiteData, withRouteData, Link } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

import { Section, ParagraphLink, Card } from 'components/ui/base';
import {
  Layout,
  BackButton,
  ArticleHolder,
  ArticleTitle,
  ArticleImage,
  ArticleContent,
  ArticleParagraph,
} from 'components/ui';
import { formatDate } from '../../utils/dateHelpers';

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

const AsideCardHolder = styled(Card.withComponent(Link))`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing}px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex: auto;
    width: 100%;
    margin: ${({ theme }) => theme.spacing / 2}px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: column;
  }
`;

const AsideCardTitle = styled.div`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.darkest};
`;

const AsideCardDate = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 0.5em;
`;

const AsideCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing / 2}px;
`;

const AsideCardImage = styled.div`
  min-width: 100px;
  min-height: 100px;
  background: ${({ image, theme }) =>
    image ? `url(${image})` : theme.colors.dark};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

class Blog extends Component {
  render() {
    const {
      routeData: { post, allPosts },
    } = this.props;

    const options = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <ParagraphLink>{children}</ParagraphLink>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <ArticleParagraph>{children}</ArticleParagraph>
        ),
      },
    };

    return (
      <Layout>
        <ContentSection>
          <BackButton />
          <CardsHolder>
            <ArticleHolder>
              <ArticleTitle>{post.title}</ArticleTitle>
              {post.imageLarge && (
                <ArticleImage imageUrl={post.imageLarge} alt="post image" />
              )}
              <ArticleContent>
                {documentToReactComponents(post.content, options)}
              </ArticleContent>
            </ArticleHolder>
            <Aside>
              {allPosts.map((asidePost) => {
                return (
                  <AsideCardHolder
                    to={`/blog/${asidePost.slug}`}
                    key={asidePost.slug}>
                    <AsideCardImage
                      image={
                        asidePost.imageSmall
                          ? asidePost.imageSmall
                          : asidePost.imageLarge
                      }
                    />
                    <AsideCardContent>
                      <AsideCardDate>
                        {formatDate(asidePost.createdAt)}
                      </AsideCardDate>
                      <AsideCardTitle>{asidePost.title}</AsideCardTitle>
                    </AsideCardContent>
                  </AsideCardHolder>
                );
              })}
            </Aside>
          </CardsHolder>
        </ContentSection>
      </Layout>
    );
  }
}

Blog.defaultProps = {
  routeData: {},
};

Blog.propTypes = {
  routeData: object,
};

export default withSiteData(withRouteData(Blog));
