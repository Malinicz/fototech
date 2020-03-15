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

    // get type slug, e.g. kamery-cyfrowe
    // const typeSlug = path.split('/')[3];

    // const models = modelsList.reduce((result, model) => {
    //   if (model.type.slug !== typeSlug) return result;

    //   return result.find((t) => t.slug === model.slug)
    //     ? result
    //     : [...result, model];
    // }, []);

    // const breadcrumber = models.length > 0 && models[0];

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
