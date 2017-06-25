import React, { Component, PropTypes } from 'react';

import { LODGINGS } from './positions';

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
      <LodgingViewMap
        className={mapElementClass}
        lodgings={LODGINGS}>
      </LodgingViewMap>
      <LodgingViewList
        className={listElementClass}
        lodgings={LODGINGS}
        tab={this.props.tab}
        onLodgingTabChange={type => this.props.onLodgingTabChange(type)}>
      </LodgingViewList>
    </li>;
  }
}

LodgingView.propTypes = {
  onLodgingTabChange : PropTypes.func.isRequired
};
