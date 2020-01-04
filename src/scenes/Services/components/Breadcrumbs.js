import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
import styled from 'styles';

import { Icon } from 'components/ui';
import { capitalFirst } from 'utils/textHelpers';

import { LevelLink } from './Links';

const BreadcrumbsHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
`;

const CurrentLevelTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: ${({ theme }) => `${theme.spacing}px 0`};
`;

export const Breadcrumbs = ({ breadcrumbs, path }) => {
  function getBasePath(inputPath) {
    const pathArray = inputPath.split('/').filter((p) => p);
    return `/${pathArray[0]}/${pathArray[1]}`;
  }

  const basePath = getBasePath(path);

  return (
    <BreadcrumbsHolder>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <React.Fragment key={breadcrumb.link}>
            {isLast ? (
              <CurrentLevelTitle>
                {capitalFirst(breadcrumb.name)}
              </CurrentLevelTitle>
            ) : (
              <LevelLink to={`${basePath}/${breadcrumb.link}`}>
                {capitalFirst(breadcrumb.name)}
              </LevelLink>
            )}
            <StyledIcon name="arrowDown" size={8} />
          </React.Fragment>
        );
      })}
    </BreadcrumbsHolder>
  );
};

Breadcrumbs.defaultProps = {
  breadcrumbs: [],
};

Breadcrumbs.propTypes = {
  breadcrumbs: arrayOf(shape({ name: string, link: string })),
  path: string.isRequired,
};
