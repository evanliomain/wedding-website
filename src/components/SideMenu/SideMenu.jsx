import React, { Component, PropTypes } from 'react';

import { className } from './SideMenu.less';

export class SideMenu extends Component {

  render() {
    return <div
      style={{
        transform : `translate3d(0px, ${this.props.sideMenuTranslate}px, 0px)`
      }}
      className={className}>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
      </ul>
    </div>;
  }
}

SideMenu.propTypes = {
  sideMenuTranslate : PropTypes.number
};
