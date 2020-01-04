import React, { Component } from 'react';
import { withSiteData, withRouteData, Link } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, Card, Paragraph } from 'components/ui/base';
import { Layout, PageHeading } from 'components/ui';
import { formatDate } from 'utils/dateHelpers';

const pageIcon = require('./assets/blog-icon.svg');

const ContentSection = styled(Section)``;

const PostsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing * 4}px;
  padding-bottom: ${({ theme }) => theme.spacing * 4}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PostHolder = styled(Card.withComponent(Link))`
  display: flex;
  margin: ${({ theme }) => theme.spacing / 2}px;
  width: 48%;

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

const ImageArea = styled.div`
  min-width: 180px;
  min-height: 270px;
  background: ${({ image, theme }) =>
    image ? `url(${image})` : theme.colors.dark};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    min-height: 200px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-left-radius: 0;
  }
`;

const DescriptionArea = styled.div`
  padding: ${({ theme }) => theme.spacing}px;
  min-width: 250px;
  color: ${({ theme }) => theme.colors.darker};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    max-width: unset;
    width: 100%;
  }
`;

const PostDate = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 0.5em;
`;

const PostTitle = styled.h2`
  font-size: 1em;
`;

const PostDescription = styled(Paragraph)`
  text-align: left;
`;

const EmptyContent = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  margin: 30px auto;
`;

class Blog extends Component {
  render() {
    const {
      routeData: { title, subtitle, posts },
    } = this.props;

    return (
      <Layout>
        <PageHeading icon={pageIcon} title={title} subtitle={subtitle} />
        <ContentSection>
          {posts && posts.length === 0 ? (
            <EmptyContent>Brak wpisów</EmptyContent>
          ) : (
            <PostsHolder>
              {posts.map((post) => {
                return (
                  <PostHolder key={post.slug} to={`blog/${post.slug}`}>
                    <ImageArea image={post.imageSmall || post.imageLarge} />
                    <DescriptionArea>
                      <PostDate>{formatDate(post.createdAt)}</PostDate>
                      <PostTitle>{post.title}</PostTitle>
                      <PostDescription>{post.leadParagraph}</PostDescription>
                    </DescriptionArea>
                  </PostHolder>
                );
              })}
            </PostsHolder>
          )}
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
