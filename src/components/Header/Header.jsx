import React, { Component, PropTypes } from 'react';

import { className, logoWrapper, titleWrapper, contentContainer, toolbar }
from './Header.less';

export class Header extends Component {

  render() {
    return <header
      style={{
        transform : `translateY(${this.props.headerTranslate}px)`
      }}
      className={className}>
      <div
        className={contentContainer}>
        <div
          className={toolbar}>
          <div
            className={logoWrapper}
            style={{
              transform :
                `translateY(${this.props.headerLogoWrapperTranslate}vw)
                 scale(${this.props.headerLogoScale})`
            }}>
            <div
              style={{
                transformOrigin : 'bottom left',
                transform       : `scale(${this.props.headerLogoScale})`
              }}>
              {this.props.logo}
            </div>
          </div>
          <div className={titleWrapper}
               style={{
                 transform :
                  `translateX(${this.props.headerTranslateX}vw)
                   scale(${this.props.headerFontScale})`
               }}>
            <h1 style={{
            }}>
              {this.props.children}
            </h1>
          </div>

        </div>
      </div>
    </header>;
  }
}

              // fontSize  : `${this.props.headerFontSize}em`
Header.propTypes = {
  logo : PropTypes.node,

  headerFontSize             : PropTypes.number,
  headerTranslate            : PropTypes.number,
  headerLogoScale            : PropTypes.number,
  headerLogoWrapperWidth     : PropTypes.number,
  headerLogoWrapperTranslate : PropTypes.number,
  headerTitleScale           : PropTypes.number,
  headerTranslateX           : PropTypes.number,
  headerFontScale            : PropTypes.number
};
