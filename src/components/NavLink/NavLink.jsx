import React from 'react';

import { Link } from 'react-router';

const isIndex = to => '/' === to;

export const NavLink = props =>
  <Link
    {...props}
    activeClassName="active"
    onlyActiveOnIndex={isIndex(props.to)}
  />;
