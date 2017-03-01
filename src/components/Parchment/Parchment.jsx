import React, { Component } from 'react';

import { wrapper, content } from './Parchment.less';

export class Parchment extends Component {
  render() {
    return (
      <div className={wrapper}>
        <div className={content}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
