import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
export default class Home extends Component {
    render() {
       return (
          
          <div className="chart">
             <h1>Hello React!  </h1>
          <p>Bar Chart</p> 
          
          <Bar
              data={this.state.chartData}
              width={100}
              height={50}
              options={{
                  title: {
                      display: this.props.displayTitle,
                      text: 'Largest Cities In ' + this.props.location,
                      fontSize: 25
                  },
                  legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition
                  }
              }}
          />
      </div>
       )
    }
}