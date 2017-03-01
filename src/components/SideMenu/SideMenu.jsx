import React, { PropTypes } from 'react';

import { NavLink } from '../NavLink/NavLink';

import { className } from './SideMenu.less';

import ReactMarkdown from 'react-markdown';
import navigation from '../../content/00_navigation.md';

export const SideMenu = props => <div
  style={{ transform : `translate3d(0px, ${props.sideMenuTranslate}px, 0px)` }}
  className={className}>
  <ReactMarkdown source={navigation} renderers={renderers} />
</div>;

SideMenu.propTypes = {
  sideMenuTranslate : PropTypes.number
};

const renderers = {
  link : props => <NavLink
    activeClassName="active"
    to={props.href}>
    {props.children}
  </NavLink>
};
