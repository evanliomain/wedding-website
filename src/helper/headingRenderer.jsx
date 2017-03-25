import { createElement } from 'react';

export const headingRenderer = props => {
  const params     = getHeaderParams(props.children[0]),
        properties = {
          key              : props.nodeKey,
          'data-sourcepos' : props['data-sourcepos']
        };

  if (params.id) {
    properties.id = params.id;
  }

  return createElement(
    `h${props.level}`,
    properties,
    params.children
  );
}


function getHeaderParams(header) {
  const anchorLinkRE       = /^\[\w*\]/,
        anchorLinkHeaderRE = /^\[(\w*)\](.*)/;

  if (anchorLinkRE.test(header)) {
    return {
      id       : header.replace(anchorLinkHeaderRE, '$1'),
      children : [header.replace(anchorLinkHeaderRE, '$2')]
    };
  }
  return { children : [header] };
}
