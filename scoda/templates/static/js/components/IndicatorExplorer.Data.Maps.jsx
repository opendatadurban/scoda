import React, { Component } from 'react';

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";
  
   const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default class IndicatorExplorerDataMap extends Component {
  
    constructor(props) {
        super(props);
    }

  render() {

    let resultSet = this.props.data;

    const coords = resultSet.map((result,index) =>(
        <Marker key={index} coordinates={[result.long, result.lat]}>
                <circle r={4} fill="#A11A32" />
        </Marker>
    ));


    return (
           <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 900
            }}>
            <ZoomableGroup  zoom={3} center={[25,-29.8]}>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies
            .filter(d => d.properties.NAME=== "South Africa")
            .map(geo => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0BE881"
                stroke="#727272"
                />
            ))
            }
            </Geographies>
            {coords}
            </ZoomableGroup>
            </ComposableMap>
        
    );
  }
}


