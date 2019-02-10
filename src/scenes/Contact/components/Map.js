import React, { Component } from 'react';
import { object, number } from 'prop-types';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styles';

import { H2 } from 'components/ui/base';

export const MapHolder = styled.div`
  width: 100%;
`;

export const MapHeading = styled(H2)`
  margin-top: 100px;
  padding: 0 ${({ theme }) => theme.spacing}px;
  text-align: center;
`;

const GoogleMapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: -100px;
`;

export class Map extends Component {
  render() {
    const { google, lat, lng } = this.props;

    return (
      <React.Fragment>
        <GoogleMapContainer>
          <GoogleMap
            google={google}
            zoom={16}
            style={{ width: '100%', height: '100%' }}
            initialCenter={{
              lat,
              lng,
            }}>
            <Marker onClick={this.onMarkerClick} name="Current location" />
          </GoogleMap>
        </GoogleMapContainer>
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  google: object.isRequired,
  lat: number.isRequired,
  lng: number.isRequired,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIuPLkUNbYWbrPeQVY9x2-Gj7wWISy1ig',
})(Map);
