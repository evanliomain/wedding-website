import React from 'react';

import { Link } from 'react-router';


import { active } from '../SideMenu/SideMenu.less';

const isIndex = to => '/' === to;

export const NavLink = props =>
  <Link
    activeClassName={active}
    onlyActiveOnIndex={isIndex(props.to)}
    {...props}
  />;
