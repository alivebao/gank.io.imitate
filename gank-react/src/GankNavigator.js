import React, { Component } from 'react';
import './resource/style/GankNavigator.css';
import './resource/img/search-icon.jpg'

class GankNavigator extends Component {
  render() {
    return (
      <div className="gank-navigator">
        <nav>
          <input placeholder="搜索真的好了！不骗你！" />
          <ul>
            <li><a href="/xiandu">闲读</a></li>
            <li><a href="/subscribe">订阅到邮箱</a></li>
            <li><a href="/money">外包通缉令</a></li>
            <li><a href="/submit">提交干货</a></li>
            <li><a href="/feed">RSS订阅</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default GankNavigator;
