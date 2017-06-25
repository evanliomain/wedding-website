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
            `${lodgingElement} ${getElementTypeClass(lodging)} ${getElementActiveClass(this.props.selectedLodging, lodging)}`
          }
          onMouseEnter={() => this.props.onElementHover(lodging)}
          onMouseLeave={() => this.props.onElementHover(undefined)}
          onClick={() => this.props.onElementClick(lodging)}>
          <div>
            <span>{lodging.name}</span>
            <span className={propertyClass}>
              &nbsp;à {lodging.city}
            </span>
            <span className={propertyClass}>
              à {lodging.distance}
            </span>
            {lodging.nb && <span className={propertyClass}>
              pour {lodging.nb} personnes
            </span>}
          </div>
          <div className={propertyClass}>
            <span>Tel: </span>
            <span>{lodging.phone.join(', ')}</span>
          </div>
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
  onElementClick : PropTypes.func,
  onElementHover : PropTypes.func
};


function getElementActiveClass(selectedLodging, lodging) {
  return selectedLodging &&
         lodging.id === selectedLodging.id &&
         elementActiveClass;
}

function getActiveClass(type, tab) {
  return type === tab && activeClass
}

function getElementTypeClass(lodging) {
  if ('gite'=== lodging.type) {
    return lodgingGite;
  }
  if ('chambres_hotes'=== lodging.type) {
    return lodgingChambresHotes;
  }
  if ('hotel'=== lodging.type) {
    return lodgingHotel;
  }
}
