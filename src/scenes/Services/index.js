import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { ServicesLayout, Items, Item, LastLevelLink } from './components';
import { capitalFirst } from 'utils/textHelpers';

const cameraReflex = require('assets/images/camera-reflex.svg');
const cameraMirrorless = require('assets/images/camera-mirrorless.svg');
const cameraLens = require('assets/images/camera-lens.svg');
const cameraFlash = require('assets/images/camera-flash.svg');
const camcorder = require('assets/images/camcorder.svg');

const categoryToImage = {
  obiektywy: cameraLens,
  'lustrzanki-i-bezlusterkowce': cameraReflex,
  'aparaty-i-obiektywy-analogowe': cameraMirrorless,
  'lampy-blyskowe': cameraFlash,
  'kamery-cyfrowe': camcorder,
};

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 15px;
  -webkit-box-shadow: 0px 3px 23px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 23px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.brightest};
  border: ${({ theme, isActive }) =>
    isActive && `1px solid ${theme.colors.secondaryDarker}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 70px;
    height: 70px;
  }
`;

const Image = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 50px;
    height: 50px;
  }
`;

const ImageCaption = styled.div`
  width: 100px;
  font-size: 0.8em;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondaryDarker : theme.colors.darkest};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeight.semiBold : theme.fontWeight.regular};
`;

class Services extends Component {
  render() {
    const {
      routeData: { hardwareTypes, path },
      match,
    } = this.props;

    // const hardwareTypes = models.reduce((result, model) => {
    //   return result.find((t) => t.slug === model.type.slug)
    //     ? result
    //     : [...result, model.type];
    // }, []);

    return (
      <ServicesLayout>
        <Items>
          {hardwareTypes.map((type) => {
            const isActive = match.url.includes(type.slug);

            return (
              <LastLevelLink
                to={`${path}/${type.slug}`}
                key={type.slug}
                scrollToTop={false}>
                <Item isActive={isActive}>
                  <ImageHolder isActive={isActive}>
                    <Image
                      src={categoryToImage[type.slug]}
                      alt={type.name}
                      isActive={isActive}
                    />
                  </ImageHolder>
                  <ImageCaption isActive={isActive}>
                    {capitalFirst(type.name)}
                  </ImageCaption>
                </Item>
              </LastLevelLink>
            );
          })}
        </Items>
      </ServicesLayout>
    );
  }
}

Services.defaultProps = {
  routeData: {},
};

Services.propTypes = {
  routeData: object,
  match: object.isRequired,
};

export default withSiteData(withRouteData(Services));
