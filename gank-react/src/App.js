import React, { Component } from 'react';
import GankHeader from './GankHeader'
import GankBody from './GankBody'
import './App.css';
import './resource/img/bg.png'

class App extends Component {
  render() {
    return (
      <div>
        <GankHeader />
        <GankBody />
      </div>
    );
  }
}

export default App;
