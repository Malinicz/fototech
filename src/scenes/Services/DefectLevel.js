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

class DefectLevel extends Component {
  render() {
    const {
      routeData: { defects, breadcrumber, path },
    } = this.props;

    // const breadcrumber = models.length > 0 ? models[0] : undefined;

    // const defects = models.reduce((result, model) => {
    //   return result.find((t) => t.slug === model.defect.slug)
    //     ? result
    //     : [...result, model.defect];
    // }, []);

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
              {
                name: breadcrumber.name,
                link: `${breadcrumber.type.slug}/${breadcrumber.company.slug}/${
                  breadcrumber.slug
                }`,
              },
            ]}
            path={path}
          />
        )}
        <StyledItems>
          {defects.map((defect) => (
            <LastLevelLink key={defect.slug} to={`/${defect.slug}`}>
              <Item>{defect.title}</Item>
            </LastLevelLink>
          ))}
        </StyledItems>
      </ServicesLayout>
    );
  }
}

DefectLevel.defaultProps = {
  routeData: {},
};

DefectLevel.propTypes = {
  routeData: object,
};

export default withSiteData(withRouteData(withRouter(DefectLevel)));
