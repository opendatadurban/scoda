import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            test_data: props.test_data
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/react/test_data')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
          this.setState({ test_data: data.test_data })
        })
        .catch(console.log)
      }
    render() {
        return (
            <div className="chart">
    <p>{this.state.test_data}</p> 
                
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