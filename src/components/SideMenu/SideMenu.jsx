import React, { PropTypes } from 'react';

import { className } from './SideMenu.less';
import { roseDesVents, costume, lodging } from './icons.less';

export const SideMenu = props => <div
  className={className}>
  <a href="#">
    <i className={roseDesVents} />
    <span>Accueil</span>
  </a>
  <a href="#costume">
    <i className={costume} />
    <span>Costumes</span>
  </a>
  <a href="#lodging">
    <i className={lodging} />
    <span>Hébergement</span>
  </a>
</div>;

SideMenu.propTypes = {
  sideMenuTranslate : PropTypes.number
};

  // style={{ transform : `translateY(${props.sideMenuTranslate}vw)` }}
