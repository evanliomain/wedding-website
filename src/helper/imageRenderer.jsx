import React from 'react';

import { imageWrapper, imageInner } from '../components/Parchment/Parchment.less';

export const imageRenderer = props =>
  <span className={imageWrapper}>
    <img src={props.src} alt={props.alt} title={props.title} />
    <span className={imageInner}></span>
  </span>;
