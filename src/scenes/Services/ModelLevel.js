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

const StyledItems = styled(Items)`
  flex-direction: column;
`;

class ModelLevel extends Component {
  render() {
    const {
      routeData: { models, breadcrumber, path },
    } = this.props;

    return (
      <ServicesLayout>
        {breadcrumber && (
          <Breadcrumbs
            breadcrumbs={[
              { name: breadcrumber.type.name, link: breadcrumber.type.slug },
              {
                name: breadcrumber.company.name,
                link: `${breadcrumber.type.slug}/${breadcrumber.company.slug}`,
              },
            ]}
            path={path}
          />
        )}
        <StyledItems>
          {models.map((model) => (
            <LastLevelLink
              to={`${path}/${model.slug}`}
              key={model.slug}
              scrollToTop={false}>
              <Item>{model.name}</Item>
            </LastLevelLink>
          ))}
        </StyledItems>
      </ServicesLayout>
    );
  }
}

ModelLevel.defaultProps = {
  routeData: {},
};

ModelLevel.propTypes = {
  routeData: object,
};

export default withSiteData(withRouteData(withRouter(ModelLevel)));
