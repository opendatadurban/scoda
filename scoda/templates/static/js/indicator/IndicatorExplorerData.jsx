import React, {Component, useEffect, useState} from 'react';

import IndicatorExplorerDataCard from '../components/IndicatorExplorer.Data.Card';

function IndicatorData() {
  const [explorerData, setExplorerData] = useState(0);
const [indicatorListData, setIndicatorListData] = useState(0);
  useEffect(() => {
    fetch('/api/explore').then(res => res.json()).then(data => {
     console.log(data);
   setExplorerData(data.cities);
    });
  }, []);
  useEffect(() => {
    fetch('/api/indicators-list').then(res => res.json()).then(data => {
     console.log(data);
   setIndicatorListData(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">

        The Explorer Data is here:

        <p>The current Cities list is {explorerData}.</p>

          <p>Selecting Data:</p>
    <p>The current Cities list is {indicatorListData}.</p>
      </header>
    </div>
  );
}

export default IndicatorData;