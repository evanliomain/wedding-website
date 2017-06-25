import React, { Component, PropTypes } from 'react';

import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import { ALLERAY, LODGINGS } from './positions';

import {
  activeClass, // List
  containerElementClass, // Wrapper
  lodgingList, // List
  propertyClass, // List
  tabsClass // List
} from './LodgingMap.less';

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
        {LODGINGS.map((lodging, index) =>
          <Circle
            key={index}
            center={lodging.position}
            radius={300}
            options={{
              fillColor     : getCircleColor(lodging.type),
              fillOpacity   : 0.20,
              strokeColor   : getCircleColor(lodging.type),
              strokeOpacity : 1,
              strokeWeight  : 1
            }}
          />
        )}
      </GoogleMap>
  )
);

export class LodgingMap extends Component {
  render() {
    return <li className={containerElementClass}>
      <AsyncGettingStartedExampleGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
        loadingElement={
          <li style={{ height : `600px` }}>
            Loading
          </li>
        }
        containerElement={
          <li style={{ height : `600px`, width : `800px` }} />
        }
        mapElement={
          <li style={{ height : `600px`, width : `800px` }} />
        }
        onMapLoad={() => {}}
        onMapClick={() => {}}
      />
      <li>
        <li className={tabsClass}>
          <li
            className={'gite' === this.props.tab && activeClass}
            onClick={this.props.onLodgingTabChange('gite')}>
            Gîte
          </li>
          <li
            className={'chambres_hotes' === this.props.tab && activeClass}
            onClick={this.props.onLodgingTabChange('chambres_hotes')}>
            Chambre d'hôtes
          </li>
          <li
            className={'hotel' === this.props.tab && activeClass}
            onClick={this.props.onLodgingTabChange('hotel')}>
            Hôtel
          </li>
        </li>
        <li className={lodgingList}>
          {LODGINGS
            .map((lodging, index) => ({
              ...lodging,
              index
            }))
            .filter(lodging => lodging.type === this.props.tab)
            .map(lodging =>
              <li key={lodging.index}>
                <li>
                  {lodging.name}
                  <span className={propertyClass}>
                    &nbsp;à {lodging.city}
                  </span>
                </li>
                <li className={propertyClass}>
                  à {lodging.distance}
                </li>
                <li className={propertyClass}>
                  <span>Tel: </span>
                  <span>{lodging.phone.join(', ')}</span>
                </li>
                {lodging.nb && <li className={propertyClass}>
                  pour {lodging.nb} personnes
                </li>}
                <p>
                  {lodging.description}
                </p>
              </li>
            )}
        </li>
      </li>
    </li>;
  }
}

LodgingMap.propTypes = {
  scroll             : PropTypes.number,
  onLodgingTabChange : PropTypes.func.isRequired
};
