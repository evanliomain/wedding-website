import React, { Component, PropTypes } from 'react';

import HeaderContainer from '../../containers/HeaderContainer';
import MainContentContainer from '../../containers/MainContentContainer';
import SideMenuContainer from '../../containers/SideMenuContainer';

import { className, contentWrapper } from './Content.less';


import logoUrl from './blazon.png';

export class Content extends Component {

  render() {
    return <div className={className}>
      <HeaderContainer logo={
        <img src={logoUrl} alt="Blazon-evan-flora"/>
      }>
        Mariage Evan et Flora {this.props.scroll}
      </HeaderContainer>
      <MainContentContainer></MainContentContainer>
      <SideMenuContainer></SideMenuContainer>
    </div>;
  }

  handleScroll(event) {
    this.props.onScrollChange(event.srcElement.body.scrollTop);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
}

Content.propTypes = {
  scroll         : PropTypes.number,
  onScrollChange : PropTypes.func.isRequired
};
