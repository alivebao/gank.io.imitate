import React, { Component } from 'react';
import './GankHeader.css';
import logo from './work.png'
class GankHeader extends Component {
  render() {
    return (
      <div className="gank-header">
        <header>
          <h5>
          	<a href="/">干货集中营</a>
          </h5>
          <p>每日分享妹子图和技术干货，还有供大家中午休息的休闲视屏</p>
          <img src={logo} alt="Logo"/>
        </header>
      </div>
    );
  }
}

export default GankHeader;
