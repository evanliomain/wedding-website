import React, { Component } from 'react';

import { wrapper, content } from './Parchment.less';

export class Parchment extends Component {
  render() {
    return (
      <span className={wrapper}>
        <span className={content}>
          {this.props.children}
        </span>
      </span>
    );
  }
}
