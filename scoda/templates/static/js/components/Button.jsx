import React, { Component } from 'react';
export default class Button extends Component {

  render() {

    const imageBootstapStyleOverride = {
      position: "relative",
      top: "unset",
      right: "unset"
    }

    const downloadLinkBootstapStyleOverride = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "12px"
    }

    return (
      <a href={this.props.href} target={this.props.target}
        id={this.props.id} onClick={this.props.onClick}
        className={"btn " + this.props.className} style={downloadLinkBootstapStyleOverride}>

        {this.props.text}{this.props.icon}{this.props.children}

 { this.props.downloadBtn?
        <img className="subnav--cta---download_icon" style={imageBootstapStyleOverride} src="/static/dist/img/icon_download.png" alt="download_icon" />:""
}      </a>
    )
  }
}