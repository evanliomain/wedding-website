import React, { PropTypes } from 'react';

import { className } from './SideMenu.less';

import RoseDesVentsIcon from './Compass_rose_pale.svg';
import CostumeIcon      from './Coat_of_Arms_of_Judenburg.svg';
import LodgingIcon      from './home.svg';

const iconSize = 25;

export const SideMenu = props => <div
  className={className}>
  <a href="#">
    <RoseDesVentsIcon width={iconSize} height={iconSize} />
    <span>Accueil</span>
  </a>
  <a href="#costume">
    <CostumeIcon width={iconSize} height={iconSize} />
    <span>Costumes</span>
  </a>
  <a href="#lodging">
    <LodgingIcon width={iconSize} height={iconSize} />
    <span>Hébergement</span>
  </a>
</div>;

SideMenu.propTypes = {
  sideMenuTranslate : PropTypes.number
};

  // style={{ transform : `translateY(${props.sideMenuTranslate}vw)` }}
