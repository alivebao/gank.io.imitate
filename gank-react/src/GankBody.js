import React, { Component } from 'react';
import './resource/style/GankBody.css';
var axios = require('axios');
var constData = require('./constData.js')

class GankBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '', 
			imgSrc: '', 
			navData: [], 
			arrTechs: []
		};
	}
	componentDidMount() {
		axios.get(constData.URLHISTORY)
			.then((data) => {
				axios.get(constData.URLSPECIFICDAY + data.data.results[0].split('-').join('/'))
					.then(pageContentData => {
						var currentDayContent = pageContentData.data.results[0];
						this.setState({
							title: currentDayContent.title
						})
					});
			});
	}
  render() {
    return (
      <div className="gank-body container">
      	<h1>{this.state.title}</h1>
        <div>This is body</div>
      </div>
    );
  }
}

export default GankBody;
