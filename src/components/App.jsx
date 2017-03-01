import React from 'react';

import ContentContainer from '../containers/ContentContainer';

export const App = props => <ContentContainer>
  {props.children}
</ContentContainer>;
