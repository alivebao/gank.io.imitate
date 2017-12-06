import React, { Component } from 'react';
import './resource/style/GankHeader.css';
import GankNavigator from './GankNavigator'
import logo from './resource/img/work.png'
class GankHeader extends Component {
  render() {
    return (
      <div className="gank-header">
        <header className="container">
          <h5>
          	<a href="/">干货集中营</a>
          </h5>
          <p className="description">每日分享妹子图和技术干货，还有供大家中午休息的休闲视屏</p>
          <img src={logo} alt="Logo"/>
        <GankNavigator />
        </header>
      </div>
    );
  }
}

export default GankHeader;
