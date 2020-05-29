import React, { PureComponent } from 'react';


import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#c0c0c0','#F95B45','#FFCA00'];

export default class IndicatorExplorerDataChart extends PureComponent {
  constructor(props) {
        super(props);
  }

  render() {

    let resultSet = this.props.data;

    let keyArray = Object.keys(resultSet[0]);

    const plots = keyArray.map((result,index) =>(
        <Bar stackId="a" dataKey={result} fill={colors[index]}/>
    ));

    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend/>
        {plots}
      </BarChart>
    );
  }
}
