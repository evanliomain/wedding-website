import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import { className } from './SideMenu.less';

export class SideMenu extends Component {

  render() {
    return <div
      style={{
        transform : `translate3d(0px, ${this.props.sideMenuTranslate}px, 0px)`
      }}
      className={className}>
      <ul>
        <li><Link to="/">Présentation des lieux</Link></li>
        <li><Link to="/about">Conseils sur les costumes</Link></li>
        <li>Adresses locations/ventes de costumes</li>
        <li>Carte des lieux et hébergements aux alentours</li>
        <li>Liste de voeux des mariés</li>
        <li>Partenaires</li>
      </ul>
    </div>;
  }
}

SideMenu.propTypes = {
  sideMenuTranslate : PropTypes.number
};
