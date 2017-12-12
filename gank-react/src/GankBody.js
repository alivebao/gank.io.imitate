import React, { Component } from 'react';
import './resource/style/GankBody.css';
var axios = require('axios');
var constData = require('./constData.js')

class GankBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      pageContent: '', 
      date: ''
    };
  }
  componentDidMount() {
    axios.get(constData.URLHISTORY)
      .then((data) => {
        axios.get(constData.URLSPECIFICDAY + data.data.results[0].split('-').join('/'))
          .then(pageContentData => {
            var currentDayContent = pageContentData.data.results[0];
            var currentDate = new Date(currentDayContent.created_at);
            this.setState({
              title: currentDayContent.title, 
              pageContent: currentDayContent.content, 
              date: (currentDate.getMonth() + 1) + '月' + (currentDate.getDate()) + '日'
            })
          });
      });
  }
  render() {
    return (
      <div className="gank-body container">
        <h1>{this.state.date + ":" + this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
      </div>
    );
  }
}

export default GankBody;
