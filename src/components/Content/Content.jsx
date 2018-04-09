import React, { Component, PropTypes } from 'react';

import HeaderContainer from '../../containers/HeaderContainer';
import MainContentContainer from '../../containers/MainContentContainer';
import SideMenuContainer from '../../containers/SideMenuContainer';

import { className } from './Content.less';

import logoUrl from './blazon.png';

export class Content extends Component {
  ticking;

  constructor() {
    super();
    this.ticking = false;
  }

  render() {
    return <div className={className}>
      <HeaderContainer logo={
        <img src={logoUrl} alt="Blazon-evan-flora"/>
      }>
        Mariage Evan et Flora
      </HeaderContainer>
      <MainContentContainer>
        {this.props.children}
      </MainContentContainer>
    </div>;
  }
  // TODO: implemente a new menu less buggy
      // <SideMenuContainer></SideMenuContainer>

  handleScroll(scroll) {
    if ('number' !== typeof scroll) {
      return;
    }
    this.props.onScrollChange(scroll);
    document.body.style.setProperty('--scroll', `${scroll}px`);
  }

  componentDidMount() {
    window.addEventListener('scroll', e => {
      const scroll = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll(scroll);
          this.ticking = false;
        });
      }
      this.ticking = true;
    });

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
