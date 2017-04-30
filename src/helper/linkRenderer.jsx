import { createElement } from 'react';

export const linkRenderer = props => {
  const properties = {
    href : props.href,
    key  : props.nodeKey
  };

  if (/^E/.test(props.href)) {
    properties.target = '_blank';
    properties.href   = props.href.replace(/^E(.*)/, '$1');
  }

  return createElement(
    'a',
    properties,
    props.children
  );
};
