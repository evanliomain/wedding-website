import React from 'react';
//import { createElement } from 'react';

import { textContent } from '../components/Parchment/Parchment.less';


export const textRenderer = props =>
  <span className={textContent}>
    {props.literal}
  </span>;

