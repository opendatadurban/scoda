import React from 'react';
import { Component, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

/**
 * 
 * Plugins used :
 * react-chartjs-2 : npm i react-chartjs-2,
 * chartjs-plugin-datalabels ="gets the chart values and place them into bar grapahs" : npm i chartjs-plugin-datalabels,
 * FileSaver.js = "Saves Png files or any type of files." : npm i file-saver
 * 
 */



class StackedBar extends Component {
  constructor(props){
    super(props)
  }


  render() {

    return (
      <div>
        <h2 className="text-center ds-chart-name">{this.props.heading}</h2>
        <Bar height={this.props.height} className="data-story-graph"  id="BarGraph" data={this.props.data} options={this.props.options} />
        <div className="source-container">
                <span className={"source-label source-label-align"+this.props.alignmentClass}>{this.props.title} </span>
                <span className="source-info">{this.props.source}</span>
                </div>

      </div>
    );
  }
}
export default StackedBar;