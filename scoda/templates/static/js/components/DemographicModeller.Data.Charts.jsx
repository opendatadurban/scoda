import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class DemographicModellerDataChart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    let resultSet = this.props.data;

    let keyArray = Object.keys(resultSet[0]);

    const axis = [<XAxis key={`axis-${keyArray[0]}`} dataKey={keyArray[0]} />];

    const plots = [<Line key={`line-${keyArray[1]}`} type="monotone" dataKey={keyArray[1]} stroke="#F05252" activeDot={{ r: 1 }} />];

    return (
      <LineChart
        width={234}
        height={171}
        data={this.props.data}
        margin={{
          top:2, right: 1, left: 1, bottom: 2,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {axis}
        <YAxis />
        <Tooltip />
        {/*<Legend />*/}
        {plots}
      </LineChart>
    );
  }
}
