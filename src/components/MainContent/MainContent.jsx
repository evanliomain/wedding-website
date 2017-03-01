import React, { Component } from 'react';

import { className } from './MainContent.less';

export class MainContent extends Component {

  render() {
    return <div className={className}>{this.props.children}</div>;
  }
}
