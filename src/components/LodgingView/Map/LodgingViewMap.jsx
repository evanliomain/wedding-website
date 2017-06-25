import React, { Component, PropTypes } from 'react';

import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import { ALLERAY } from '../../../data/positions';

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

const getCircleColor = type => {
  if ('gite' === type) {
    return '#004D40';
  }
  if ('chambres_hotes' === type) {
    return '#E65100';
  }
  if ('hotel' === type) {
    return '#0D47A1';
  }
  return '#B71C1C';
};

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props =>
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={11}
        defaultCenter={ALLERAY}
        onClick={props.onMapClick}
      >
        <Marker position={ALLERAY} />
        {props.selectedLodging && <Marker position={props.selectedLodging.position} />}
        {props.lodgings.map((lodging, index) =>
          <Circle
            key={index}
            center={lodging.position}
            radius={getRadius(props, lodging)}
            options={{
              fillColor     : getCircleColor(lodging.type),
              fillOpacity   : 0.20,
              strokeColor   : getCircleColor(lodging.type),
              strokeOpacity : 1,
              strokeWeight  : getStrokeWeight(props, lodging)
            }}
          />
        )}
      </GoogleMap>
  )
);

export class LodgingViewMap extends Component {
  render() {
    return <AsyncGettingStartedExampleGoogleMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
      loadingElement={
        <div
          className={this.props.className}
          style={{ height : `600px` }}>
          Loading
        </div>
      }
      containerElement={
        <div
          className={this.props.className}
          style={{ height : `600px`, width : `800px` }}
        />
      }
      mapElement={
        <div style={{ height : `600px`, width : `800px` }} />
      }
      onMapLoad={() => {}}
      onMapClick={() => {}}
      lodgings={this.props.lodgings}
      selectedLodging={this.props.selectedLodging}
      hoverLodging={this.props.hoverLodging}
    />;
  }
}

function getRadius(props, lodging) {
  return isLodgingFocus(props, lodging) ? 500 : 200;
}

function getStrokeWeight(props, lodging) {
  return isLodgingFocus(props, lodging) ? 3 : 1;
}


function isLodgingFocus(props, lodging) {
  return props.selectedLodging && props.selectedLodging.id === lodging.id ||
         props.hoverLodging    && props.hoverLodging.id    === lodging.id;
}
