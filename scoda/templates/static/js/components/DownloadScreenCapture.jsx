import React, { Component } from 'react';
import Button  from './Button';


export default class DownloadScreenCapture extends Component {
  constructor(props){
    super(props);
    this.download = this.download.bind(this);
  }


  download(e){
    var htmlToImage = require('html-to-image');
    e.preventDefault()
    htmlToImage.toJpeg(document.getElementById('content-scoda'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'data-snapshot.jpeg';
    link.href = dataUrl;
    link.click();
  });

  }

  render(){
    return (
      <Button className={["download-screen-capture "] + this.props.className} onClick={this.download} text={this.props.buttonText} id="download"/>
    );
  }

};