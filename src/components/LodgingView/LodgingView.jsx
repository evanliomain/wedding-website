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
    console.log('LodgingView', this.props.lodgings);
    return <li  className={containerElementClass}>
      <LodgingViewList
        className={listElementClass}
        lodgings={this.props.lodgings}
        tab={this.props.tab}
        onLodgingTabChange={type => this.props.onLodgingTabChange(type)}>
      </LodgingViewList>
      <LodgingViewMap
        className={mapElementClass}
        lodgings={this.props.lodgings}>
      </LodgingViewMap>
    </li>;
  }
}

LodgingView.propTypes = {
  onLodgingTabChange : PropTypes.func.isRequired
};
