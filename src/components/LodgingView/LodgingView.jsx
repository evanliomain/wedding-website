import React, { Component, PropTypes } from 'react';

import { LODGINGS } from '../../data/positions';

import { LodgingViewMap } from './Map/LodgingViewMap'
import { LodgingViewList } from './List/LodgingViewList'


import {
  containerElementClass,
  mapElementClass,
  listElementClass
} from './LodgingView.less';


export class LodgingView extends Component {
  render() {
    return <li  className={containerElementClass}>
      <LodgingViewList
        className={listElementClass}
        lodgings={this.props.lodgings}
        selectedLodging={this.props.selectedLodging}
        tab={this.props.tab}
        onLodgingTabChange={type => this.props.onLodgingTabChange(type)}
        onElementClick={lodging => this.props.onLodgingSelected(lodging)}>
      </LodgingViewList>
      <LodgingViewMap
        className={mapElementClass}
        lodgings={this.props.lodgings}
        selectedLodging={this.props.selectedLodging}>
      </LodgingViewMap>
    </li>;
  }
}

LodgingView.propTypes = {
  onLodgingTabChange : PropTypes.func.isRequired,
  onLodgingSelected : PropTypes.func.isRequired
};
