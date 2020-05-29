import React, { Component } from 'react';

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
  
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default class DemographicModellerDataMap extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    let resultSet = this.props.data;

    const colors = ['#A11A32','#F64343','#FF8A3A'];

    const coords = resultSet.map((result,index) =>(
        <Marker key={index} coordinates={[result.long, result.lat]}>
                <circle r={8} fill={colors[index]} ></circle>
                <text textAnchor="bottom" fill="#000" style={{ fontFamily: "system-ui", fontSize:"8px" }}>
                  {result.city}: {result.count}
                </text>
               
        </Marker>
    ));


    return (
      //[25,-29.8]
           <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 900
            }}>
            <ZoomableGroup  zoom={this.props.zoom} center={this.props.center}>
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