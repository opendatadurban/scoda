import GoogleMapReact from "google-map-react";

import React from "react";
// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      backgroundColor: "red",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
    }}
  >
    {text}
  </div>
);

const Map = (props) => {
  //const divRef = useRef(null);
  const coords = {
    center: {
      lat: -26.128423,
      lng: 28.230037,
    },
    placeOne: {
      lat: -26.128423,
      lng: 28.230037,
    },
    placeTwo: {
      lat: -22.224289,
      lng: 29.986555,
    },
  };


  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAtNjiKin99k1kQ_zZoPFO05hGLG76Hmpg" }}
          defaultCenter={coords.center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={props.pointA ? props.pointA.latlng.lat : coords.placeOne.lat}
            lng={props.pointA ? props.pointA.latlng.lng : coords.placeOne.lng}
            text="Starting point"
          />
          <AnyReactComponent
            lat={props.pointB ? props.pointB.latlng.lat : coords.placeTwo.lat}
            lng={props.pointB ? props.pointB.latlng.lng : coords.placeTwo.lng}
            text="End point"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
