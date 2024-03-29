import React, { Component } from 'react';
import { withSiteData, withRouteData, withRouter } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  ServicesLayout,
  Items,
  Item,
  Breadcrumbs,
  LastLevelLink,
} from './components';

export const CompanyLogo = styled.img`
  width: 100%;
  max-width: 100px;
`;

const StyledItem = styled(Item)`
  justify-content: flex-end;
`;

class CompanyLevel extends Component {
  render() {
    const {
      routeData: { companies, breadcrumber, path },
    } = this.props;

    return (
      <ServicesLayout>
        {breadcrumber && (
          <Breadcrumbs
            breadcrumbs={[
              { name: breadcrumber.type.name, link: breadcrumber.type.slug },
            ]}
            path={path}
          />
        )}
        <Items>
          {companies.map((company) => (
            <LastLevelLink
              to={`${path}/${company.slug}`}
              key={company.slug}
              scrollToTop={false}>
              <StyledItem>
                <CompanyLogo src={company.logo} />
              </StyledItem>
            </LastLevelLink>
          ))}
        </Items>
      </ServicesLayout>
    );
  }
}

CompanyLevel.defaultProps = {
  routeData: {},
};

CompanyLevel.propTypes = {
  routeData: object,
};

export default withSiteData(withRouteData(withRouter(CompanyLevel)));
