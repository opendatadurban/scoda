import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Chart from './components/Chart';
// import more components
export default (
  <HashRouter history={hashHistory}>
    <div>
      <Route path='/'
        render={(props) => <Chart {...props} chartData={{
          labels: ['Boston', 'Worcester', 'Springfield', 'Cape town', 'Cambridge', 'New Bedford'],
          datasets: [
            {
              label: 'Population',
              data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }} location={"Massachusetts"} legendPosition={"bottom"}
        />}
      />
    </div>
  </HashRouter>
);