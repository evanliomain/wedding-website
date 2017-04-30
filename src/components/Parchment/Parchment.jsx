import React, { Component } from 'react';

import { content } from './Parchment.less';

export class Parchment extends Component {
  render() {
    return (
      <div className={content}>
        {this.props.children}
      </div>
    );
  }
}
