import React from 'react';

import ReactMarkdown from 'react-markdown';

import { Parchment } from '../components/Parchment/Parchment';

import { imageRenderer } from './imageRenderer';
import { headingRenderer } from './headingRenderer';
import { linkRenderer } from './linkRenderer';

export const Page = content => props =>
  <Parchment {...props}>
    <ReactMarkdown source={content} renderers={renderers} />
  </Parchment>;


const renderers = {
  image   : imageRenderer,
  heading : headingRenderer,
  link    : linkRenderer
};
