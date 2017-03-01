import React from 'react';

import ReactMarkdown from 'react-markdown';

import { Parchment } from '../components/Parchment/Parchment';

export const Page = content => () =>
  <Parchment>
    <ReactMarkdown source={content} />
  </Parchment>;
