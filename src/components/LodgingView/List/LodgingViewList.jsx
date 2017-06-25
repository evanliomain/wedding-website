import React, { Component, PropTypes } from 'react';


import {
  activeClass,
  elementActiveClass,
  lodgingList,
  lodgingElement,
  propertyClass,
  tabsClass,
  tabClass,
  wrapper,
  lodgingAll,
  lodgingGite,
  lodgingChambresHotes,
  lodgingHotel
} from './LodgingViewList.less';

export class LodgingViewList extends Component {
  render() {
    return <div className={`${this.props.className} ${wrapper}`}>
      <ul className={tabsClass}>
        <li
          className={`${tabClass} ${lodgingAll} ${getActiveClass('all', this.props.tab)}`}
          onClick={() => this.props.onLodgingTabChange('all')}>
          Tout
        </li>
        <li
          className={`${tabClass} ${lodgingGite} ${getActiveClass('gite', this.props.tab)}`}
          onClick={() => this.props.onLodgingTabChange('gite')}>
          Gîte
        </li>
        <li
          className={`${tabClass} ${lodgingChambresHotes} ${getActiveClass('chambres_hotes', this.props.tab)}`}
          onClick={() => this.props.onLodgingTabChange('chambres_hotes')}>
          Chambre d'hôtes
        </li>
        <li
          className={`${tabClass} ${lodgingHotel} ${getActiveClass('hotel', this.props.tab)}`}
          onClick={() => this.props.onLodgingTabChange('hotel')}>
          Hôtel
        </li>
      </ul>
      <ul className={lodgingList}>
        {this.props.lodgings.map(lodging => <li
          key={lodging.id}
          className={
            `${lodgingElement} ${getElementActiveClass(this.props.selectedLodging, lodging)}`
          }
          onClick={() => this.props.onElementClick(lodging)}>
          <div>
            {lodging.name}
            <span className={propertyClass}>
              &nbsp;à {lodging.city}
            </span>
          </div>
          <span className={propertyClass}>
            à {lodging.distance}
          </span>
          <div className={propertyClass}>
            <span>Tel: </span>
            <span>{lodging.phone.join(', ')}</span>
          </div>
          {lodging.nb && <span className={propertyClass}>
            pour {lodging.nb} personnes
          </span>}
          <p>
            {lodging.description}
          </p>
        </li>)}
      </ul>
    </div>;
  }
}

LodgingViewList.propTypes = {
  onLodgingTabChange : PropTypes.func,
  onElementClick : PropTypes.func
};


function getElementActiveClass(selectedLodging, lodging) {
  return selectedLodging &&
         lodging.id === selectedLodging.id &&
         elementActiveClass;
}

function getActiveClass(type, tab) {
  return type === tab && activeClass
}
