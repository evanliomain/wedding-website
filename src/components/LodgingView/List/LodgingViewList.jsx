import React, { Component, PropTypes } from 'react';


import {
  activeClass,
  lodgingList,
  propertyClass,
  tabsClass,
  wrapper
} from './LodgingViewList.less';

export class LodgingViewList extends Component {
  render() {
    return <div className={`${this.props.className} ${wrapper}`}>
      <ul className={tabsClass}>
        <li
          className={'all' === this.props.tab && activeClass}
          onClick={() => this.props.onLodgingTabChange('all')}>
          Tout
        </li>
        <li
          className={'gite' === this.props.tab && activeClass}
          onClick={() => this.props.onLodgingTabChange('gite')}>
          Gîte
        </li>
        <li
          className={'chambres_hotes' === this.props.tab && activeClass}
          onClick={() => this.props.onLodgingTabChange('chambres_hotes')}>
          Chambre d'hôtes
        </li>
        <li
          className={'hotel' === this.props.tab && activeClass}
          onClick={() => this.props.onLodgingTabChange('hotel')}>
          Hôtel
        </li>
      </ul>
      <ul className={lodgingList}>
        {this.props.lodgings.map((lodging, id) => <li key={id}>
          {lodging.name}
        </li>)}
      </ul>
    </div>;
  }
}

LodgingViewList.propTypes = {
  onLodgingTabChange : PropTypes.func
};
